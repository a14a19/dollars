import classes from './login.module.scss';
import img from '.././components/dollars_logo.jpg'

import { useContext, useState } from 'react';
import CrudContext from '../context/context';
import axios from 'axios';

function Login() {

    const { setLogin, base_url1, passRegex } = useContext(CrudContext)
    const [user, setUser] = useState({})
    const [pass, setPass] = useState('')
    const [check, setCheck] = useState(false)

    const handleChange = (k, v) => {
        if (v !== '') {
            setUser({ ...user, [k]: v })
            axios.get(base_url1)
                .then((data) => {
                    data.data.map((item) => {
                        if(item.username.username.includes(v)){
                            setCheck(true)
                        } else {
                            setCheck(false)
                        }
                    })
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }

    const loginBtn = () => {
        if (pass.match(passRegex) && check === false) {
            axios.post(base_url1, {
                username: user
            })
                .then(() => {
                    setLogin(current => !current)
                    setUser({})
                })
                .catch(error => {
                    console.alert(error.message);
                })
        }
    }

    return (
        <div className={classes.login}>
            <img src={img} alt='Dollars' />
            <input type='text' onChange={(e) => handleChange('username', e.target.value)} placeholder="username" />
            <input type='password' placeholder="password" onChange={(e) => setPass(e.target.value)} />
            <button type='submit' onClick={() => loginBtn()} >
                Login
            </button>
        </div>
    )
}

export default Login;