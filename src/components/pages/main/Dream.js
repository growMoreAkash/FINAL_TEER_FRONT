import React from 'react'
import { Ddata } from './Data/DreamData.js'
const Dream = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: "10%" }}>
            <div style={{ background: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)', textAlign: 'center', color: 'white', padding: "30px 0px 50px 0px" }}>
                <h1>Dream Numbers</h1>
                <h1 style={{ fontWeight: "lighter", fontSize: "30px" }}>(Date: {formattedDate})</h1>
            </div>

            <div className='cont'>
                    <div className="i backi">#</div>
                    <div className="i backi">Dream</div>
                    <div className="i backi">Numbers</div>
                    <div className="i backi">House</div>
                    <div className="i backi">Ending</div>
                {
                    Ddata.map((item) => {
                        return (
                            <>
                                    <div className="i">{item.id}</div>
                                    <div className="i">{item.Dream}</div>
                                    <div className="i">{item.Numbers.join(',')}</div>
                                    <div className="i">{item.House.join(',')}</div>
                                    <div className="i">{item.Ending.join(',')}</div>
                                    
                            </>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Dream
