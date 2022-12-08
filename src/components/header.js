import classes from './header.module.scss';

import { useContext } from 'react';
import CrudContext from '../context/context';

function SideMenu() {
    const { sidemenu, setLogin } = useContext(CrudContext)

    const logoutBtn = (e) => {
        e.preventDefault()
        setLogin(current => !current)
    }
    return (
        <>
            {sidemenu &&
                <ul className={classes.sidemenu}>
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
            <h3>Welcome to Dollars</h3>
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