import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './Data/helper';

const Previous = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const [FData, setFData] = useState([]); // Corrected variable name to FData

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/getPrevious`);
                setFData(response.data); // Update FData with response data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)', textAlign: 'center', color: 'white', padding: "30px 0px 50px 0px" }}>
                <h1>Previous Numbers</h1>
                <h1 style={{ fontWeight: "lighter", fontSize: "30px" }}>(Date: {formattedDate})</h1>
            </div>
            <div className='cont'>
                <div className="i backi">#</div>
                <div className="i backi">Date</div>
                <div className="i backi">Timing</div>
                <div className="i backi">FR</div>
                <div className="i backi">SR</div>
                {FData.reverse().map((item, i) => { // Corrected variable name to FData
                    return (
                        <>
                            <div className="i">{i + 1}</div>
                            <div className="i">{item.Date}</div>
                            <div className="i">{item.Timing}</div>
                            <div className="i">{item.FR}</div>
                            <div className="i">{item.SR}</div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Previous;
