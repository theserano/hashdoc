import React from 'react'
import SideNav from './SideNav'
import Main from './Main'
import "./layout.scss"
import SideNavHC from './sideNavHC'


const PageLayout = ({children, patient}) => {
  return (
    <div className='pageLayout'>
      <div className="pageLayout_side">{patient ? <SideNav /> : <SideNavHC />}</div>
      <div className="pageLayout_main"><Main>{children}</Main></div>
    </div>
  )
}

export default PageLayout
