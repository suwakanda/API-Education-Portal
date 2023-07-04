import React, { useState } from 'react'
import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useNavigate } from 'react-router'
import { getUser } from './Utils/Common';  
import { removeUserSession } from './Utils/Common';
const Dashboard = () => {
  const value = getUser()
  const navigate = useNavigate()
  const handleLogout = () => {
    removeUserSession()
    
    if (!navigate("/")) {
      alert("Are you sure for Logout")
    }
    // confirmAlert({
    //   title: 'Confirm to Logout',                        
    //   message: 'Are you sure to do this.',               
    //   childrenElement: () => <div>Custom UI</div>,       
    //   confirmLabel: 'Confirm',                           
    //   cancelLabel: 'Cancel',                             
    //   onConfirm: () => removeUserSession(),    
    //   onCancel: () => alert('Action after Cancel'),      
    //   overlayClassName: "overlay-custom-class-name"      
    // })
    window.location.href = "./Login";
  };
  const [image, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...image,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  }
  //-----------------image upload -----------------------
  const [isSucces, setSuccess] = useState(null);

  const submit = async () => {
    const formdata = new FormData();
    formdata.append('userFile', image.file);
    console.log(image.file)

    axios.post("http://localhost:3000/image/profileimg", formdata, {
    })
      .then(res => { // then print response status
        console.log(res);
        if (res.data.success === 1) {
          setSuccess("Image upload successfully");
        }

      })
  }
  return (
    <>
      <div className='logout'>
        <h1>Welcome User Dashboard Page  </h1>
        {/* <h1 style={{ textTransform: " uppercase" }}>{value.username}</h1> */}
        <h1>{value.username}</h1>
        <input type="button" value="logout" onClick={handleLogout} />
        {/* <button onClick={this.submit}>Confirm dialog</button> */}
      </div>

      

      {isSucces !== null ? <h4> {isSucces} </h4> : null}

      
      
    </>
  )
}
export default Dashboard;

