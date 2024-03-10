import React from 'react'
import { Cdata } from './Data/commonData.js'
const Common = () => {
    console.log(Cdata)
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)', textAlign: 'center', color: 'white', padding: "30px 0px 50px 0px" }}>
                <h1>Common Numbers</h1>
                <h1 style={{ fontWeight: "lighter", fontSize: "30px" }}>(Date: {formattedDate})</h1>
            </div>
            <div className='contC'>
                <div className="i backi">#</div>
                <div className="i backi">Direct</div>
                <div className="i backi">House</div>
                <div className="i backi">Ending</div>

                {
                    Cdata.map((item) => {
                        return (
                            <>
                                    <div className="i">{item.id}</div>
                                    <div className="i">{item.Direct.join(',')}</div>
                                    <div className="i">{item.House}</div>
                                    <div className="i">{item.Ending}</div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Common
