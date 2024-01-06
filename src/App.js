//import './App.css';
//import Create from './component/Create';
//import Update from './component/Update';
//import Read from './component/Read';
//import { Routes,Route } from 'react-router-dom';


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigat=useNavigate()
  useEffect(() => {
    axios.get('http://localhost:4000/person')
      .then(res => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='container mt-5'>
      <div className='text-end'><Link to="/create" className='btn btn-primary'>Add +</Link></div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
              
            ))}
          <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link to={`/update/${d.id}`} className='btn btn-sm btn-success'>Update</Link>
                <button onClick={e=>handleSubmit(d.id)} className='btn btn-sm ms-1 btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id)
  {
    const conf =window.confirm("do you want to delete")
    if(conf)
    {
      axios.delete('http://localhost:4000/person/'+id)
      .then(res =>
        {
          alert("data has been deleted")
          navigat('/')
        }).catch(err=>console.error(err))
    
    }
  }
}

export default App;
 


/*  <div className="main">
     <h2>CRUD Operation</h2> 
      
      <Routes>
        <Route exact path='/create' element={<Create/>}/>
        <Route exact path='/read' element={<Read/>}/>
        <Route exact path='/update' element={<Update/>}/>
      </Routes>
      
      
  </div>*/





      
