import { useState,useEffect } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import axios from "axios";
const Empdetails=()=>{
    const {id}=useParams();
    const navigate =useNavigate();
    const [emps,setemps]=useState({});
    const deletebyid=async()=>{
        try{
            await axios.delete(`http://127.0.0.1:8000/delete/${id}`);
            navigate('/');
            
        }catch(error){
            if(error.response){
                console.error(`Error status:${error.response.status}`);
            
            }else{
                console.error('Error message:',error.message);
            }
        }
    };
    const getDetailsbyid=async()=>{
        try{
            const response =await axios.get(`http://127.0.0.1:8000/getemp/${id}`);
            setemps(response.data)
            
        }catch(error){
            if(error.response){
                console.error(`Error status:${error.response.status}`);
            
            }else{
                console.error('Error message:',error.message);
            }
        }
    };
    const deleteemp =async()=>{
        if(window.confirm("Are you want to delete?")){
            await deletebyid();
        }
    };
    useEffect(()=>{
        getDetailsbyid();
    },[]);
    return(
        <div>
            <Link className="btn btn-success m-2" to={`/update/${emps.emp_id}`}>Update emp</Link>
            <button className="btn btn-danger" onClick={deleteemp}>DELETE</button>
            <h1>Emp Phone:{emps.emp_phone}</h1>
            <h1>Emp Place:{emps.emp_place}</h1>
        </div>
    );
};
export default Empdetails;