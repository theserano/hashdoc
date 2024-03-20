import React, { lazy, useState } from 'react'
import PageLayout from '../../../components/Layout/PageLayout'
import "./medicalRecords.scss";



const Search = lazy(() => import("../../../components/Inputs/Search/Search"));
const PatientMedicalForm = lazy(() => import("../../../components/Medical/PatientMedicalForm/PatientMedicalForm"));

const MedicalRecordsPatient = () => {

  return (
    <>
        <PageLayout>

            <div className="medicalRecordsPatient_top">
                <div className="medicalRecordsPatient_top_left">
                    <Search />
                </div>
            </div>

            <h3 style={{
                fontWeight: "400"
            }} className='heading_three  medicalRecordsPatient_header'>Medical Record</h3>


            <section className="medicalRecordsPatient_form">
                <form className='medical_form'>
                    <div className="medical_form_header">
                        <h4 className='heading_four'>Medical Data</h4>
                        <p className='paragraph'>Provide details to your medical record </p>
                    </div>
                    <div className="medical_form_name">
                        <label htmlFor="name" className='paragraph'>Name Tag</label>
                        <input className='input' type="text" id='name' />
                    </div>
                    <div className="medical_form_select">
                        <label className='paragraph' htmlFor="select">Section</label>
                        <select className='custom_select' id="select">
                            <option value="Select your medical recird description"></option>
                            <option value="allergies">allergies</option>
                            <option value="vaccination">vaccination</option>
                            <option value="doctors notes">doctors notes</option>
                            <option value="test results">test results</option>
                        </select>
                        <div className="paragraph_small medical_form_select_div">select <span><PatientMedicalForm /></span> to upload your document</div>
                    </div>
                    <div className="medical_form_description">
                        <label htmlFor="desc">Description</label>
                        <textarea className='input' placeholder='Input your medical record description' id="desc" cols="30" rows="5"></textarea>
                    </div>
                    <button className='medical_form_button blue_btn'>Next</button>
                </form>
            </section>


        </PageLayout>
    </>
  )
}

export default MedicalRecordsPatient
