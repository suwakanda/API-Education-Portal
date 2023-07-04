import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './New.css'

import {Container , Row}from "reactstrap"

function Images() {
    const [images, setImages] = useState([])
    useEffect(()=>{
        axios.get("https://pixabay.com/api/?key=38059402-3a0a40717c5bb8ea35d81a526&q&category=education&q=university")
        .then((res)=>{
          console.log(res.data.hits);
          setImages(res.data.hits)
        })
      },[])

  return (
    <Container>
      <Row>
      {
          images.map((val)=>{
            return (
              <div className="col my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.largeImageURL} className="card-img-top" alt="..." height= "200px"/>
                  <div className="card-body">
                    <h5 className="card-title" style={{ textTransform: "capitalize" }}>{val.tags}</h5>
                    <p className="card-text">
                      {val.type}
                    </p>
                    <p className="card-text-1"><p><b style={{ color: "#faa935"}}>Views: </b>{val.views}</p>
                    </p>
                    <p className="card-text-1"><p><b style={{ color: "#faa935"}}>Likes: </b>{val.likes}</p>
                    </p>
                    <p className="card-url">
                      <a href={val.pageURL}>Explore More</a>
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Images
