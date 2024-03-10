import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from './main/Data/helper';
export default function Home() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  const [FData, setFData] = useState({ Daydata: {}, Nightdata: {} }); // Corrected variable name to FData

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/getPreviousDay`);
        console.log(response.data)
        setFData(response.data); // Update FData with response data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <>
      <div className='main' style={{ margin: "0px 0px 80px 0px" }}>
        <div className='main_text'>

          <img src="img2.jpeg" alt="" className='img2'/>
        </div>

        <div className='home'></div>
        <h1 style={{ textAlign: 'center', marginTop: "30px", fontSize: "60px" }}
        >Check Shillong Teer Results</h1>
        <h1 style={{ textAlign: 'center', marginTop: "30px", fontSize: "50px" }}
        >Date: {formattedDate}</h1>
        <div className='main-box'>

          <div className='box'>
            <h1 >FR (Night: 10:15 PM)</h1>
            <h1 style={{ marginTop: '10px' }}>{FData.Nightdata == null ? "undefined" :FData.Nightdata.FR}</h1>
          </div>

          <div className='box'>
            <h1 >SR (Night: 11:15 PM)</h1>
            <h1 style={{ marginTop: '10px' }}>{FData.Nightdata == null ? "undefined" :FData.Nightdata.SR}</h1>
          </div>

        </div>
        <div className='button-box'>

          <Link to='/common' className='main_button' >
            <div  >Common Numbers</div>
          </Link>
          <Link to='/dream' className='main_button' >
            <div >Dream Numbers</div>
          </Link>
          <Link to='/previous' className='main_button' >
            <div >Previous Results</div>
          </Link>
        </div>
      </div>
    </>
  );
}
