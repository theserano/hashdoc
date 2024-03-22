import React from 'react'
import PageLayout from '../../../components/Layout/PageLayout'
import Search from '../../../components/Inputs/Search/Search'
import noData from "../../../assets/no_data.svg";
import "./patientprofile.scss";


const PatientProfile = () => {
  return (
    <PageLayout>
        <div className='p-4 mt-8'>
            <Search />
            <div className="no_data">
                <img src={noData} alt="no data" />
                <h4 className='heading_four'>No medical record found</h4>
            </div>
        </div>
    </PageLayout>
  )
}

export default PatientProfile
