import React, { useState, useEffect, createContext, useContext } from 'react'
import { useAlert } from 'react-alert'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useLogin } from './LoginProvider';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './Data/helper';
const Dashboard = () => {

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const history = useHistory();
    const { isLogin } = useLogin()
    const alert = useAlert()
    const [formData, setFormData] = useState({ Date: formattedDate, Timing: "Night", FR: "", SR: "" })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        axios.post(`${BASE_URL}/api/addPrevious`, formData).then((data) => {
            alert.show("Result has been uploaded")
            setFormData({...formData,Timing:"",FR:"",SR:""})
        }).catch(error => {
            console.log(error)
            alert.show("Something wrong")
        })
    };

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div>
            {
                isLogin === false ? history.push('/login') :

                    <form className='user_form content'>

                        <div style={{ display: 'flex', justifyContent: "space-around" }} className='Twoinput'>

                            <div className='input'>
                                <label htmlFor='Timing'>Timing</label>
                                <input
                                    type="text"
                                    name='Timing'
                                    value="Night"
                                />
                            </div>
                            <div className='input'>
                                <label htmlFor='Date'>Date</label>
                                <input
                                    type="text"
                                    name='Date'
                                    value={formattedDate}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: "space-around" }} className='Twoinput'>
                            <div className='input'>
                                <label htmlFor='FR'>FR</label>
                                <input
                                    type="FR"
                                    name='FR'
                                    value={formData.FR}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input'>
                                <label htmlFor='SR'>SR</label>
                                <input
                                    type="SR"
                                    name='SR'
                                    value={formData.SR}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div onClick={handleSubmit} className='button'>Submit</div>
                    </form>
            }

        </div>
    )
}

export default Dashboard
