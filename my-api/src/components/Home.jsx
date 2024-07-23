import { Link } from "react-router-dom";
import axios from 'axios'
import { useState,useEffect } from "react";
import './emp.css';
const Home =()=>{
    const [employ,setEmp]=useState([]);
    const getEmpdetails =async()=>{
        try{
            const response=await axios.get('http://127.0.0.1:8000/');
            setEmp(response.data);
        }catch(error){
            if(error.response){
                console.error(`Error status code:${error.response.status}`);
                console.error(error.response.data);
            }else{
                console.error('Error:',error.message);
            }
            }
        };
        useEffect(()=>{
            getEmpdetails();
        },[]);
        return(
            <div className="row">
                {employ.map((emp)=>(
                    <div className="emp-item col-12 col-sm-6 col-md-4 col-lg-3 m-3" key={emp.emp_id}>
                    <img src={`http://127.0.0.1:8000/${emp.emp_image}`} alt={emp.emp_name} className="img-fluid mb-2" />
                    <h2>{emp.emp_name}</h2>
                    <Link className="btn btn-primary-mt-2" to={`/emp/${emp.emp_id}`}>View details</Link>
                    </div>
                ))}
            </div>
        );
    };
export default Home;