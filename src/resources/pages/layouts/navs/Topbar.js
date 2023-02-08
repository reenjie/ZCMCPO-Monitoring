import React from 'react'
import '../../../../assets/css/admin.css'
import { AiOutlineLogout } from 'react-icons/ai'
function Topbar() {
  return (
    <div className='topbar'>
        <h1>P.O Monitoring System</h1>
        <a href="#">Logout <i className='icon'><AiOutlineLogout/></i></a>
    </div>
  )
}

export default Topbar