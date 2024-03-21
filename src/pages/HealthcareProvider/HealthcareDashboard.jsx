import React, { useState } from 'react'
import "./healthcaresettings.scss";
import "../../styles/generics.scss";
import PageLayout from '../../components/Layout/PageLayout';
import Search from '../../components/Inputs/Search/Search';
import { FaRegSquarePlus } from "react-icons/fa6";
import axios from 'axios';
import DataTable from '../../components/Table/Table';
import noData from "../../assets/no_data.svg"

const HealthcareDashboard = () => {

    const [isData, setIsData] = useState(false);
    const [data, setData] = useState([]);

    const handleRequestData = () => {
        const response = axios.get(``)

        if(response){
            setIsData(true)
            setData(response.data);
        }

        return response.data

    }

  return (
    <div className='hc_settings'>
      <PageLayout>

        <div className="hc_settings_top">
            <Search />
        </div>

        <div className="hc_settings_header">
            <h3 className='heading_three'>Patient profile</h3>
            <button 
            onClick={handleRequestData}
            className='blue_btn'><FaRegSquarePlus /> Request data</button>
        </div>

        <div className="hac_settings_table px-4 py-12 h-4 mt-12">
            {
                isData ? <DataTable data={data} /> : (
                    <div className="no_data">
                      <img src={noData} alt="no data" />
                      <h4 className='heading_four'>No medical record found</h4>
                    </div>
                )
            }
        </div>

      </PageLayout>
    </div>
  )
}

export default HealthcareDashboard
