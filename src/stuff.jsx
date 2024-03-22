import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@kudi-inc/dip';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../../components/Layout';
import { sectionBaseURL, SubNavItems } from '../data';
import Filter from '../../../components/Filter';
import { Table } from '../../../components/Utility/Table';
import {
  fetchTerminalsRequests,
  updateTerminalsFilters,
  updateTerminalsPagination,
  updateTerminalRequestsStatus,
  fetchTerminalRequestSummary,
  refundTerminalRequest,
  updateTerminalRequest,
  assignSerialNumber,
  unAssignSerialNumber,
  forceRefundTerminalRequest
} from '../../../store/actions/terminals';
import { generateDefaultFiltersFromConfig } from '../../../utils/functions';
import config from './filterConfig';
import schema from './tableSchema';
import styles from '../Terminals.module.scss';
import RequestDetailFlyout from './RequestDetailFlyout';
import AddTerminalFlyout from './AddTerminalFlyout';
import { ExportData } from 'assets/svg';
import { toast } from 'react-toastify';
import { downloadTerminalsRequest } from '../functions';
import { pick } from 'lodash';
import RequestsSummaryOverview from './RequestsSummaryOverview';
import RequestControls from './RequestControls';

class Requests extends PureComponent {
  static propTypes = {
    requests: PropTypes.object
  };

  state = {
    showFlyout: false,
    showAddterminal: false,
    activeRequest: {},
    selectedStatus: '',
    refundQuantity: null,
    search: '',
    searchParamType: '',
    requestType: ''
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.selectedStatus !== prevState.activeRequest.status &&
      !prevState.selectedStatus
    ) {
      return {
        selectedStatus: prevState.activeRequest.status
      };
    }
    return null;
  }

  componentDidMount() {
    const { updateTerminalsFilters } = this.props;
    let filters = generateDefaultFiltersFromConfig(config);
    let newFilters = { ...filters };
    if (newFilters?.timeCreated) {
      newFilters.from = newFilters?.timeCreated?.start;
      newFilters.to = newFilters?.timeCreated?.end;
      delete newFilters.timeCreated;
    }
    updateTerminalsFilters('requests', newFilters);
  }

  async componentDidUpdate(prevProps, prevState) {
    const {
      fetchTerminalsRequests,
      fetchTerminalRequestSummary,
      requests: { filters, pagination }
    } = this.props;
    let { search, searchParamType } = this.state;
    search.trim();
    const _filters = {
      [searchParamType]: search,
      ...filters
    };

    if (
      filters !== prevProps.requests.filters &&
      pagination !== prevProps.requests.pagination
    ) {
      await fetchTerminalsRequests(_filters, pagination);
      await fetchTerminalRequestSummary(pick(_filters, ['from', 'to']));
    }
    if (
      pagination !== prevProps.requests.pagination &&
      filters === prevProps.requests.filters
    ) {
      await fetchTerminalsRequests(_filters, pagination);
    }
  }

  unAssignNumber = (serialNumber, id) => {
    const {
      fetchTerminalsRequests,
      unAssignSerialNumber,
      requests: { filters, pagination }
    } = this.props;

    unAssignSerialNumber({ serialNumber, id }).then(() => {
      fetchTerminalsRequests(filters, pagination);
    });
  };

  assignNumber = (serialNumber, id) => {
    const {
      fetchTerminalsRequests,
      assignSerialNumber,
      requests: { filters, pagination }
    } = this.props;

    assignSerialNumber({ serialNumber, id }).then(() => {
      fetchTerminalsRequests(filters, pagination);
    });
  };

  _handleChange = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  _handleKeyPress = async e => {
    console.log(e.key);
    if (e.key === 'Enter') {
      this.setState({
        activeRequest: {}
      });
      if (this.state.searchParamType && this.state.search) {
        await this._handleSearchRequests();
        return;
      } else if (this.state.searchParamType && !this.state.search) {
        this.setState({
          search: '',
          searchParamType: ''
        });
        return;
      }
      return toast.info('You must enter a search value or search by!');
    }
  };

  _handleExportData = () => {
    const {
      requests: { filters }
    } = this.props;
    downloadTerminalsRequest(filters);
  };

  _handleFilterUpdate = filters => {
    let newFilters = { ...filters };
    const { updateTerminalsFilters } = this.props;
    let from, to;
    if (newFilters['timeCreated']) {
      [from, to] = newFilters['timeCreated'];
      delete newFilters['timeCreated'];
    }
    updateTerminalsFilters('requests', { ...newFilters, from, to });
  };

  _handleDetailsChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  _handleSearch = async e => {
    let { search } = this.state;
    if (!search) {
      return toast.info('You must enter a search value!');
    }
    await this._handleChange(e);
    await this._handleSearchRequests();
  };

  _handleSearchRequests = async () => {
    const {
      updateTerminalsPagination,
      requests: { pagination }
    } = this.props;
    updateTerminalsPagination('requests', {
      ...pagination,
      page: 0
    });
  };

  _handleToggleFlyout = () => {
    this.setState({ showFlyout: !this.state.showFlyout });
    if (this.state.showFlyout) {
      this.setState({
        activeRequest: {},
        selectedStatus: ''
      });
    }
  };

  _handleAddTerminalToggleFlyout = requestType =>
    this.setState({
      showAddterminal: !this.state.showAddterminal,
      requestType
    });

  _handleViewMore = () => {
    const {
      updateTerminalsPagination,
      requests: { pagination }
    } = this.props;
    updateTerminalsPagination('requests', {
      ...pagination,
      page: pagination.page + 1
    });
  };

  _handleUpdateRequestStatus = async () => {
    const {
      updateTerminalRequestsStatus,
      updateTerminalsFilters,
      requests: { filters }
    } = this.props;
    const {
      activeRequest: { id },
      selectedStatus
    } = this.state;

    await updateTerminalRequestsStatus(id, selectedStatus);
    this._handleToggleFlyout();
    return await updateTerminalsFilters('requests', filters);
  };

  refundTerminal = async () => {
    const { refundTerminalRequest } = this.props;
    const {
      activeRequest: { id }
    } = this.state;

    await refundTerminalRequest({
      posRequestId: id,
      newQuantity: null
    });
  };

  forceRefundTerminal = async () => {
    const { forceRefundTerminalRequest } = this.props;
    const {
      activeRequest: { id },
      refundQuantity
    } = this.state;

    this._handleToggleFlyout();
    await forceRefundTerminalRequest({
      posRequestId: id,
      amount: refundQuantity
    });
  };

  _handleViewRowDetail = data => {
    this.setState({ activeRequest: data });
    this._handleToggleFlyout();
  };

  render() {
    const {
      requests: { data, loading, summary, isLastPage },
      updateTerminalRequest
    } = this.props;
    const {
      showFlyout,
      activeRequest,
      selectedStatus,
      search,
      searchParamType,
      refundQuantity,
      showAddterminal,
      requestType
    } = this.state;
    return (
      <div className={styles.Terminals}>
        <PageLayout
          header="Terminals"
          menuItems={SubNavItems}
          sectionBaseURL={sectionBaseURL}
          comingSoon={false}
        >
          <main>
            <header className={styles.Terminals__header}>
              <h2>Terminals - Requests</h2>
              <Filter
                config={config}
                onValueChange={this._handleFilterUpdate}
              />
            </header>
            <div className={styles.Terminals__controls}>
              <div></div>
              <div style={{ alignItems: 'right' }}>
                <Link
                  className={styles.submitLink}
                  to={`${this.props.match.url}activity-logs`}
                >
                  <Button>View Activity Log</Button>
                </Link>
              </div>
            </div>
            <RequestsSummaryOverview
              summary={summary?.summary}
              terminalRequestConfig={summary?.terminalRequestConfig}
              showAddterminal={this._handleAddTerminalToggleFlyout}
            />
            <RequestControls
              terminalRequestConfig={summary.terminalRequestConfig}
              updateTerminalRequest={updateTerminalRequest}
            />
            <section>
              <Table
                title="REQUESTS TABLE"
                data={data}
                schema={schema}
                isLoading={loading}
                onViewMore={this._handleViewMore}
                onViewRowDetail={this._handleViewRowDetail}
                isLastPage={isLastPage}
                renderHeaderRight={
                  <>
                    <input
                      className={styles.Terminals__Table__Input}
                      name="search"
                      value={search}
                      type="text"
                      placeholder="Search..."
                      onChange={this._handleChange}
                      onKeyPress={this._handleKeyPress}
                    ></input>
                    <select
                      className={styles.Terminals__Table__Select}
                      name="searchParamType"
                      onChange={this._handleSearch}
                      value={searchParamType}
                    >
                      <option>Search by:</option>
                      <option value="phone">Phone</option>
                      <option value="agentId">Customer Id</option>
                    </select>
                    <button
                      className={styles.Terminals__Table__Button}
                      onClick={this._handleExportData}
                    >
                      <ExportData />
                      <span>Export data</span>
                    </button>
                  </>
                }
              />
              {Object.keys(activeRequest).length > 0 && (
                <RequestDetailFlyout
                  show={showFlyout}
                  toggleFlyout={this._handleToggleFlyout}
                  activeRequest={activeRequest}
                  onChange={this._handleDetailsChange}
                  forceRefundTerminal={this.forceRefundTerminal}
                  refundTerminal={this.refundTerminal}
                  selectedStatus={selectedStatus}
                  refundQuantity={refundQuantity}
                  onUpdateStatus={this._handleUpdateRequestStatus}
                  isLoading={loading}
                  assignSerialNumber={this.assignNumber}
                  unAssignSerialNumber={this.unAssignNumber}
                />
              )}
              <AddTerminalFlyout
                show={showAddterminal}
                onClose={this._handleAddTerminalToggleFlyout}
                updateTerminalRequest={updateTerminalRequest}
                terminalRequestConfig={summary.terminalRequestConfig}
                requestType={requestType}
              />
            </section>
          </main>
        </PageLayout>
      </div>
    );
  }
}

const mapStateToProps = ({ terminals: { requests } }) => ({
  requests
});

export default connect(mapStateToProps, {
  fetchTerminalsRequests,
  updateTerminalsFilters,
  updateTerminalsPagination,
  updateTerminalRequestsStatus,
  fetchTerminalRequestSummary,
  refundTerminalRequest,
  updateTerminalRequest,
  assignSerialNumber,
  unAssignSerialNumber,
  forceRefundTerminalRequest
})(Requests);
