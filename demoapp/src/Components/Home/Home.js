import React, { useEffect,useState } from "react";
import {  Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import Login from "../Login/Login";

function Home() {
  const section_ApI ="https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7";
  const newsHeadlines_ApI = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7';

  const [headSection, setSectiondata] = useState([]);
  const [headlines,setHeadlines] = useState([]);

  var  responsedata =[];
  var listItems =[];
  var responseHead =[];
  useEffect(() => {
    debugger;
    const fetchData = async () => {
        const resSectionHead = await axios(section_ApI);
        const respHeadlines = await axios(newsHeadlines_ApI);
        setSectiondata(resSectionHead.data['results'])
        setHeadlines(respHeadlines.data['results'] );
        console.log('Headlines',respHeadlines.data['results'])
      };
  
      fetchData();



    // axios.get(section_ApI).then( responsedata => setData(responsedata.data['results']))
    // axios.get(newsHeadlines_ApI).then( responseHead => setHeadlines(responseHead))
    // console.log('responseHead',responseHead)
  },[]);

  
  return (
    <div class="wrapper">
      <div class="sidebar">
        <h2>News</h2>
        {headSection.map((row) => (
        <ul>
          <Link>{row.display_name}</Link>
        </ul>
        ))}
      </div>
      <div class="main_content">
      <nav class="Navbar">
       <Link>Read Later</Link>
       <Link>Manage Profile</Link>
       <Link to ='/Login'>Logout</Link>
      </nav>

      <div class="container-fluid mt-3">
        <div class="row mt-3">
        <div  class="col-lg-2 mt-2 mb-3">
        <div class="box">
        {headlines.map((row) => (
        <>
        <img src="{row.thumbnail_standard}" width="100%" />
        <h5>{row.title}</h5>
        <p>{row.abstract}</p>
        <a href="{row.url}">Read more</a>
        </>
        ))}
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
