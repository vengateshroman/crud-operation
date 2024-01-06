import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Add() {
    const [inputData ,setInputData]=useState({name:'',email:''})
    const navigat=useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:4000/person',inputData)
        .then(res=>{
            alert("data added successfully!");
            navigat('/');
        }).catch(error => {
            console.error('Error fetching data:', error);
          });
    }

  return (
    <div className='d-flex mt-5 w-50 vh-80 justify-content-center aling-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control'
                onChange={e=>setInputData({...inputData,name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='Email'>Email:</label>
                <input type='text' name='email' className='form-control'
                onChange={e=>setInputData({...inputData,email: e.target.value})}/>
            </div><br/>
            <button className='btn btn-info'>Submit</button>
            </form>
        </div>
        </div>
  )
}
export default Add