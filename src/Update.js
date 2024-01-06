import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Update() {
    const {id}=useParams();
    const [data,setData]=useState([])
    const navigat=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:4000/person/'+id)
        .then(res => setData(res.data))
        .catch(error => {
            console.error('Error fetching data:', error);
          });
    },[])
    function handleSubmit(event)
    {
        event.preventDefault()
        axios.put('http://localhost:4000/person/'+id,data)
        .then(res =>{
            alert("data update successfully !");
            navigat('/')
        })
    }
  return (
    <div className='d-flex mt-5 w-50 vh-80 justify-content-center aling-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>ID:</label>
                <input type='text' disabled name='name' value={data.id} className='form-control'
                />
            </div>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' value={data.name} className='form-control'
                onChange={e => setData({...data,name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor='Email'>Email:</label>
                <input type='text' name='email' value={data.email} className='form-control'
             onChange={e => setData({...data,email: e.target.value})} />
            </div><br/>
            <button className='btn btn-info'>Update</button>
            </form>
        </div>
        </div>
  )
}

export default Update