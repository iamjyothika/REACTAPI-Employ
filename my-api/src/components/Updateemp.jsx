import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UpdateEmp = () => {
    const {id} = useParams()
    const [emp,setEmp]= useState({})
    const navigate = useNavigate()


const getEntityById = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/getemp/${id}`);
        console.log(response.data);
   
        
        let result = response.data;
        delete result.emp_image;

        console.log(result);
        
        setEmp(result)
    } catch (error) {
        if (error.response) {
            console.error(`Error Status Code: ${error.response.status}`);
            console.error(error.response.data);
        } else {
            console.error('There was a problem with the axios request:', error.message);
        }
    }
};
const InputData = (e)=>{

    console.log(e.target);
    // let {name,value} = e.target
    let name = e.target.name;
    let value = e.target.value;
    let files = e.target.files;
    console.log(name);
    console.log(files);
    console.log(value);
    
    
    let newData = {...emp,[name]:files ? files[0]:value}
    setEmp(newData)
    // console.log(newData);

}

const replaceEntity = async () => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/update/${id}`, emp, {
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







useEffect(() => {
    getEntityById();
}, []);


const empUpdate = () => {
    replaceEntity()
};



  return (
    <div className="container mt-5">
    <h2 className="mb-4">Update a new emp</h2>
    <form  >

      <div className="form-group">
        <label htmlFor="name">Emp Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="emp_name"
          value={emp.emp_name}
          onChange={InputData}

          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Emp place:</label>
        <input
          type="text"
          className="form-control"
          id="place"
          name="emp_place"
          value={emp.emp_place}
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
        <img src={`http://127.0.0.1:8000/${emp.emp_image}`} alt="" />
      </div>
      <button type="button" onClick={empUpdate} className="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default UpdateEmp