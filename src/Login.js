import React, { useState } from 'react';
import axios from "axios"
// import * as Yup from 'yup';
// import { Formik } from 'formik';
import { setuserSession } from './Utils/Common';
import { useNavigate } from "react-router-dom";

//----------Login Form validation-------------------

const Login = () => {
    // const [username, setuserName] = useState("")
    const [email, setuserEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    var navigate = useNavigate()
    const handleLogin = (empData) => {
        if (email === "" || password === "") {
            alert("plese filled you data")
        }
        setError(null)
        setLoading(true)
        axios.post("http://localhost:9000/user/login", {
            // username: username,
            email: email,
            password: password
        }).then(response => {
            setLoading(false)
            setuserSession(response.data.token, response.data.user)
            navigate("/Dashboard")
        }).catch(error => {
            setLoading(false)
            if (error.response.status === 401 || error.response.status === 400) {
                setError(error.response.data.message);
            }
            else {
                setError("somthing wrong plese try letter")
            }
        })
    }
    const goToSignupPage = () => {
        navigate("/Signup")
    }

    return (
        //-----------> Login form input value
        <>

            <div className='main'>
                <h1> Login Page</h1>
                {/* <div className='input'>
                        <b>name :</b>
                        <input type="text"
                            value={username}
                            onChange={e => setuserName(e.target.value)}>
                        </input>
                        </div> */}
                <br></br>

                <div><b>Email :</b>
                    <input type="email"
                        value={email}
                        onChange={e => setuserEmail(e.target.value)}>
                    </input></div>
                <br></br>

                <div style={{ marginRight: "41px" }}><b>Password :</b>
                    <input type="text"
                        value={password}
                        onChange={e => setPassword(e.target.value)}>
                    </input></div>
                <div>
                    {/* -------------Login Form Submit button--------------- */}
                    {error && <div className="error">{error}</div>}
                    <input
                        style={{ marginTop: "34px", marginLeft: "60px", padding: "3px 13px", fontSize: "1rem" }}
                        type="button"
                        value={loading ? "Loading..." : "Login"}
                        onClick={handleLogin}>
                    </input>
                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                    <button
                        style={{ marginTop: "50px", marginLeft: "60px", padding: "3px 13px", fontSize: "1rem" }}
                        type="button"
                        onClick={goToSignupPage}>SIGNUP
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login;
