import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import { AdminSidebar } from '../layouts/navs/NavData'
import Main from '../layouts/navs/Main'
function Settings() {
  return (
    <div>
  <AdminLayout SidebarNav={AdminSidebar}  />
  <Main>
    <h3>Settings</h3>
      

  




  </Main>
  </div>   
  )
}

export default Settings