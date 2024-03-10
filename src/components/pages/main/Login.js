import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import { useLogin } from './LoginProvider';
import { useHistory } from 'react-router-dom'
import Data from '../../../config.js'
const Login = () => {
    const { isLogin, updateIsLogin } = useLogin()
    const history = useHistory()
    const alert = useAlert()
    const [formData, setFormData] = useState({ username: "", password: "" })
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.username == Data.USER && formData.password == Data.PASS) {
             alert.show("Admin login successfully")
            updateIsLogin(true)
            setTimeout(() => {
                history.push('/dashboard')
            }, 2000);
        }
        else
            return alert.show("Please fill the cradentials properly")
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
            <form className='user_form content'>
                <div className='input'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className='input'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div onClick={handleSubmit} className='button'>Submit</div>
            </form>
        </div>
    )
}

export default Login
