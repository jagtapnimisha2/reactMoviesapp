import React from 'react'
import Footers from './Footers'
import { Outlet, useNavigation } from 'react-router-dom'
import Headers from './Headers'
import Loding from './Loding'

const AppLayouts = () => {
  const navigations= useNavigation();
  console.log(navigations);
  if(navigations.state==="loading") return <Loding />

  return (
    <div>
        <Headers />
        <div> 
        <Outlet />
        </div>
        <Footers />
    
    </div>
  )
}

export default AppLayouts