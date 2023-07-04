import React from 'react';
import Login from './Login';
import CreateStudent from "./Utils/CreateStudent";
import StudentList from './Studentlist';
import News from './News';
import Images from './Images';
import Blog from './Blog';
import Signup from './Signup';
import ErrorPage from '../src/Errorpage'
import PrivateRoute from './Utils/PrivateRoute';

import "./New.css";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Dashboard from './Dashboard';
import PublicRoute from './Utils/PublicRoute';


const App = () => {
    return (
        <>
            <div className="App" >
                <Router>
                    <nav className="header">
                        
                        <NavLink to="/Utils/CreateStudent" style={{ fontSize: "30px" }}>CreateStudent</NavLink>
                        <NavLink to="/StudentList" style={{ fontSize: "30px" }}>StudentList</NavLink>
                        <NavLink to="/News" style={{ fontSize: "30px" }}>News</NavLink>
                        <NavLink to="/Images" style={{ fontSize: "30px" }}>Images</NavLink>
                        <NavLink to="/Blog" style={{ fontSize: "30px" }}>Blog</NavLink>
                        <NavLink to="/Signup" style={{fontSize:"30px"}}>Signup</NavLink>
                        <NavLink to="/Login" style={{ fontSize: "30px" }}>Login</NavLink>
                        <NavLink to="/Dashboard" style={{ fontSize: "30px" }}>Dashboard</NavLink>
                    </nav>
                    <div className="content">
                        
                        <Routes>
                            <Route path="/Utils/CreateStudent" element={<PrivateRoute><CreateStudent /></PrivateRoute>}></Route>
                            <Route  path="/StudentList" element={<PrivateRoute><StudentList /></PrivateRoute>}></Route>
                            <Route  path="/News" element={<PrivateRoute><News /></PrivateRoute>}></Route>
                            <Route  path="/Images" element={<PrivateRoute><Images /></PrivateRoute>}></Route>
                            <Route  path="/Blog" element={<PrivateRoute><Blog /></PrivateRoute>}></Route>
                           <Route path='/Signup' element={<Signup/>}></Route>
                            <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>}></Route>
                            <Route path="/Dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>}></Route>
                            <Route path="*" element={<ErrorPage />}></Route>
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    )
}
export default App;