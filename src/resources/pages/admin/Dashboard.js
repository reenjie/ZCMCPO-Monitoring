import React, { useEffect } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import {AdminSidebar}  from '../layouts/navs/NavData'
import Main from '../layouts/navs/Main'

function Dashboard() {
return (
  <div>
  <AdminLayout SidebarNav={AdminSidebar}  />
  <Main>
    <h3>Dashboard</h3>
      

  




  </Main>
  </div>    
  )
}

export default Dashboard