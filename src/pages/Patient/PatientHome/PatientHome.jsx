import React from 'react'
import PageLayout from '../../../components/Layout/PageLayout'
import Search from '../../../components/Inputs/Search/Search'

const PatientHome = () => {
  return (
    <PageLayout patient={true}>
        <div className='p-4 mt-8'>
            <Search />
        </div>
    </PageLayout>
  )
}

export default PatientHome
