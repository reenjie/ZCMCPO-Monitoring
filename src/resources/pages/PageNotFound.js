import React from 'react'
import '../../assets/css/pagenotfound.css'
import { useNavigate } from 'react-router-dom';
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";
import { Button } from '../../components/MaterialUI';
function PageNotFound() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }

  return (
    <div className='page'>
        
        <h1>
        <span>4</span> <HiOutlineMagnifyingGlassCircle/> <span>4</span> 
        </h1>
        <span>Requested page not found</span>
        <br/><br/>
        
        <Button onClick={handleBack} variant="outlined" color='primary'>Back to Home</Button>

        
    </div>
  )
}

export default PageNotFound