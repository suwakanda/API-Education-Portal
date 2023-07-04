import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Blog() {
    const [blog, setBlog] = useState([])
    useEffect(()=>{
        axios.get("https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyAmcKDolR253oqyL2zki4uNR-IyoxMsMC0")
        .then((res)=>{
          console.log(res.data.items);
          setBlog(res.data.items)
        })
      },[])

  return (
    <div className='body'>
    <div className="container my-5">
      <div className=".enter">
        {
          blog.map((val)=>{
            return (
              <div className="col my-3">
                <div className="card" style={{ width: "18rem" }}>
                  
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    
                    <p className="card-text-1"><p><b>Date Created:</b></p>
                      {val.published}
                    </p>
                    <p className="card-url">
                      <a href={val.url}>Link</a>
                    </p> 
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </div>

  )
}

export default Blog