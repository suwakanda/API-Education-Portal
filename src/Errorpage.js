import React from 'react'
const ErrorPage = () => {
  return (
    <div> 
       <img src={process.env.PUBLIC_URL + '/ErrorPage.jpg'} alt="errorimage" height= "1000px" width= "1214px"/> 
    </div>
  )
}
export default ErrorPage;
