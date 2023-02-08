import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import { AdminSidebar } from '../layouts/navs/NavData'
import Main from '../layouts/navs/Main'
import CustomPaginationActionsTable from '../../../components/Table'
import BasicModal from '../../../components/Modal'
import { IoIosAddCircle } from "react-icons/io";
function Accounts() {

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
  
  return (
    <div>
  <AdminLayout SidebarNav={AdminSidebar}  />
  <Main>
    <h3>Accounts</h3>
      <BasicModal Modalbtn={<>Add <IoIosAddCircle/></>}/>
    <CustomPaginationActionsTable 
      columns={columns}
      rows   = {rows}
    />
  




  </Main>
  </div> 
  )
}

export default Accounts