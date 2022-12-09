import classes from './header.module.scss';

import { useContext } from 'react';
import CrudContext from '../context/context';
import { Link } from 'react-router-dom';

function SideMenu() {
    const { sidemenu, setLogin, users } = useContext(CrudContext)

    const logoutBtn = (e) => {
        e.preventDefault()
        setLogin(current => !current)
    }

    const usersList = users.map((item, i) => {
        return (
            <li key={i}>
                {item.username.username}
            </li>
        )
    })

    return (
        <>
            {sidemenu &&
                <ul className={classes.sidemenu}>
                    <h3>Online</h3>
                    {usersList}
                    <button onClick={logoutBtn}>
                        Logout
                    </button>
                </ul>
            }
        </>
    )
}

function HeaderSub() {
    const { setSidemenu } = useContext(CrudContext)

    const sideBtn = (e) => {
        e.preventDefault()
        setSidemenu(current => !current)
    }
    return (
        <div className={classes.headerSub}>
            <Link to='/home' className={classes.title} title='Home'>
                <h3>Welcome to Dollars</h3>
            </Link>
            <button onClick={sideBtn}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <SideMenu />
        </div>
    )
}

function Header() {

    const { login } = useContext(CrudContext)

    return (
        <div className={classes.header}>
            {login ? <div></div> : <HeaderSub />}
        </div>
    )
}

export default Header;