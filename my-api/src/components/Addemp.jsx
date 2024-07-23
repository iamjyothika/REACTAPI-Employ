import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmp = () => {
    const navigate = useNavigate()
    const [data,setData]= useState(
        {
        emp_id:"",
        emp_name:"",
        emp_phone:"",
        emp_place:"",
        emp_image:null    
    }
)

const InputData = (e)=>{

    console.log(e.target);
    // let {name,value} = e.target
    let name = e.target.name;
    let value = e.target.value;
    let files = e.target.files;
    console.log(name);
    console.log(files);
    console.log(value);
    
    
    let newData = {...data,[name]:files ? files[0]:value}
    setData(newData)
    // console.log(newData);

}
const addEntity = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/addemp', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
        navigate('/')

    } catch (error) {
        if (error.response) {
            console.error(`Error Status Code: ${error.response.status}`);
            console.error(error.response.data);
        } else {
            console.error('There was a problem with the axios request:', error.message);
        }
    }
};



const submitEmployee  = () => {

    console.log('Function submit  is executed');
    console.log(data)
    addEntity()
    
    
};

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4">Add a New Employee</h2>
      <form  >
      <div className="form-group">
          <label htmlFor="name">Emp Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="emp_name"
            value={data.emp_name}
            onChange={InputData}

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Emp Phone:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="emp_phone"
            value={data.emp_phone}
            onChange={InputData}
          
 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Emp Place:</label>
          <input
            type="text"
            className="form-control"
            id="place"
            name="emp_place"
            value={data.emp_place}
            onChange={InputData}
          
 
            required
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="image">Emp Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="emp_image"
            onChange={InputData}
         
            required
          />
        </div>
        <button type="button" onClick={submitEmployee}  className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddEmp