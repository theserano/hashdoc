import React from 'react'
import SideNav from './SideNav'
import Main from './Main'
import "./layout.scss"


const PageLayout = ({children}) => {
  return (
    <div className='pageLayout'>
      <div className="pageLayout_side"><SideNav /></div>
      <div className="pageLayout_main"><Main>{children}</Main></div>
    </div>
  )
}

export default PageLayout
