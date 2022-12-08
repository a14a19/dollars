import classes from './home.module.scss';

import { useContext, useEffect, useState } from 'react';
import CrudContext from '../context/context';
import axios from 'axios';

function Home() {

    const { base_url2 } = useContext(CrudContext)
    const [msg, setMsg] = useState({})
    const [getMsg, setGetMsg] = useState([])
    const [effect, setEffect] = useState(false)

    const handleChange = (k, v) => {
        if (v !== '') {
            setMsg({ ...msg, [k]: v })
        }
    }

    const sendBtn = (e) => {
        e.preventDefault()
        axios.post(base_url2, {
            message: msg
        })
            .then(() => {
                setMsg({ ...msg, message: '' })
                setEffect(current => !current)
            })
            .catch(error => {
                console.alert(error.message)
            })
    }

    useEffect(() => {
        axios.get(base_url2)
            .then((data) => {
                setGetMsg(data.data)
            })
    }, [getMsg])

    const result = getMsg.map((item, i) => {
        return(
            <div key={i} className={classes.result}>
                {item.message.message}
            </div>
        )
    })

    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <div className={classes.rules}>
                    Rules!
                    <ul>
                        <li>
                            Friendly chat are welcome.
                        </li>
                        <li>
                            No information is saved.
                        </li>
                        <li>
                            Chat will disappear after 24hours. (Some times before 24hours, if the usage of app is high.)
                        </li>
                        <li>
                            For feedback or any inconvenience, please contact - anas31197@gmail.com or +918251039590 or +18507248774 (whatsapp only).
                        </li>
                    </ul>
                </div>
                <div className={classes.messages}>
                    {result}
                </div>
            </div>
            <form className={classes.form}>
                <textarea rows='4' name='message' onChange={(e) => handleChange('message', e.target.value)}></textarea>
                <button type='submit' onClick={sendBtn}><i className="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

export default Home;