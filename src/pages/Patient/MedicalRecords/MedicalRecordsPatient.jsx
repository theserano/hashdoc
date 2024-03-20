import React, { lazy } from 'react'
import PageLayout from '../../../components/Layout/PageLayout'
import "./medicalRecords.scss";

const Search = lazy(() => import("../../../components/Inputs/Search/Search"));

const MedicalRecordsPatient = () => {
  return (
    <>
        <PageLayout>
            <Search />
        </PageLayout>
    </>
  )
}

export default MedicalRecordsPatient
