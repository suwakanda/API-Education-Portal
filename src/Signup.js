import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Field} from "formik"
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from 'react';
// import { setuserSession } from './Utils/Common';
import { useNavigate } from 'react-router-dom'
import "../src/New.css";
const Signup = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [inputValueName, setInputValueName] = useState("");
    const [inputValueemail, setInputValueemail] = useState("");
    const [inputValuePassword, setInputValuePassword] = useState("");
    const navigate = useNavigate()
    const handleSignup = (empData) => {
        //   if(inputValueName === "" ){
        //       alert("plese enter your name")
        //   } 
        //   if(inputValueemail === ""){
        //       alert("plese enter your email")
        //   }
        //   if(inputValuePassword === ""){
        //       alert("plese enter you password")
        //   }

        setError(null)
        setLoading(true)
        axios.post("http://localhost:9000/user/signup", {
            username: inputValueName,
            email: inputValueemail,
            password: inputValuePassword,
        }).then(response => {
            setLoading(false)
            navigate("/Login")
            console.log(response)
        }).catch(error => {
            setLoading(false)
            if (error.response.status === 401 || error.response.status === 400) {
                // alert("please signup")
                setError(error.response.data.message);
            }
            else {
                setError("somthing wrong plese try letter")
            }
        })
    }
    //-----------------image upload -----------------------
  
    return (
        <>
            <div className='signup'>
                <h1>Signup</h1>
                <h3>Name </h3>
                <input type="Name"  value={inputValueName} placeholder="Name" onChange={e => setInputValueName(e.target.value)} />
                <h3>Email</h3>
                <input type="email" value={inputValueemail} placeholder="Email" onChange={e => setInputValueemail(e.target.value)} />
                <h3>Password</h3>
                <input type="password" value={inputValuePassword} placeholder="Password" onChange={e => setInputValuePassword(e.target.value)} />
                <br></br>
                <br></br>
                {error && <div className='error'>{error}</div>}
                {/* <Filed className="submit" type="button" value={loading ? "Loading..." : "Signup"} disabled={loading} onClick={handleLogin}></Filed> */}
                <input style={{ marginBottom: "17px", marginLeft: "21px", padding: "3px 13px", fontSize: "1rem" }}
                    type="button"
                    value={loading ? "Loading..." : "Signup"}
                    onClick={handleSignup}>
                </input>
            </div>
        </>
    )
}
export default Signup;

