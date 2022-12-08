import classes from './App.module.scss';
import Home from './pages/home';
import Login from './pages/login';
import Header from './components/header';
import Footer from './components/footer';

import { useState } from 'react';
import CrudContext from './context/context';

const base_url1 = `https://crudcrud.com/api/9839dd863de04e8c82dcbbc66ee16aeb/posts`;
const base_url2 = `https://crudcrud.com/api/48de85e7194b4f23a2e1f04cd4f64a16/posts`;
const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/

function App() {

  const [login, setLogin] = useState(true)
  const [sidemenu, setSidemenu] = useState(false)
  const [error, setError] = useState({})
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({ username: '' })

  return (
    <CrudContext.Provider value={{ login, setLogin, sidemenu, setSidemenu, base_url1, error, setError, passRegex, base_url2, users, setUsers, user, setUser }}>
      <div className={classes.App}>
        <Header />
        {login ? <Login /> : <Home />}
        <Footer />
      </div>
    </CrudContext.Provider>
  );
}

export default App;
