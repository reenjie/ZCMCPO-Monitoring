import React from 'react'
import { useState } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import { AdminSidebar } from '../layouts/navs/NavData'
import Main from '../layouts/navs/Main'
import CustomPaginationActionsTable from '../../../components/Table'
import BasicModal from '../../../components/Modal'
import { TextField,Grid,Button } from '@mui/material';

import { IoIosAddCircle } from "react-icons/io";
function Accounts() {
const [closeModal,setCloseModal] = useState(false);

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  
];

function createData(name, code, population, size,dataid) {
  const density = population / size;
  return { name, code, population, size, density,dataid };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263,51715),
 
];

const AddAccounts=()=>{
  return <>
     <h3 style={{marginBottom:'10px',fontWeight:'normal'}}>Add Accounts</h3>
        
      
        <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
        <TextField fullWidth id="filled-basic" size='small' sx={{marginBottom:'10px'}} label="First Name" variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField fullWidth id="filled-basic" size='small' sx={{marginBottom:'10px'}} label="Last Name"  variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField fullWidth id="filled-basic" size='small' sx={{marginBottom:'10px'}} label="Username"  variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField fullWidth id="filled-basic" size='small' sx={{marginBottom:'10px'}} label="Role"  variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField fullWidth type={'password'} id="filled-basic" size='small' sx={{marginBottom:'10px'}} label="Password"  variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6}>
        <TextField fullWidth type={'password'} id="filled-basic" size='small' sx={{marginBottom:'10px'}} label="Re-EnterPassword"  variant="outlined" />
        </Grid>
      </Grid>
      <div style={{float:'right',marginTop:'10px'}}>
      <Button variant='contained' size='small' color='success' sx={{padding:'4px 30px'}}> Save</Button>
        <Button variant='contained' size='small' sx={{marginLeft:'5px'}} onClick={()=>setCloseModal(true)}> Close</Button>
      </div>
       
  </>
}
  
  return (
    <div>
  <AdminLayout SidebarNav={AdminSidebar}  />
  <Main>
    <h3>Accounts</h3>
      <BasicModal Modalbtn={<>Add <IoIosAddCircle/></>} ModalContent={<AddAccounts/>} Close={closeModal} setClose={setCloseModal} />
    <CustomPaginationActionsTable 
      columns={columns}
      rows   = {rows}
    />
  




  </Main>
  </div> 
  )
}

export default Accounts