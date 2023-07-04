import React, {useState,useEffect} from 'react';
import axios from 'axios';

function News() {
    const [news, setNews] = useState([])
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=education&apiKey=f35f6545abfa4b26985edc9788e2db79")
        .then((res)=>{
          console.log(res.data.articles);
          setNews(res.data.articles)
        })
      },[])

  return (
    <div className='body'>
    <div className="container my-5">
      <div className=".enter">
        {
          news.map((val)=>{
            return (
              <div className="col my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">
                      {val.description}
                    </p>
                    <p className="card-text-1"><p><b>Date Created:</b></p>
                      {val.publishedAt}
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

export default News