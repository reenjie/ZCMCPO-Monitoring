import React from 'react'
import { FallingLines } from  'react-loader-spinner'
import '../../../assets/css/admin.css'


function Loader() {
  return (
    <div className='loader'>
<FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
    </div>
  )
}

export default Loader