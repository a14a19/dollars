import classes from './App.module.scss';
import Home from './pages/home';
import Login from './pages/login';
import Header from './components/header';
import Footer from './components/footer';

import { useState } from 'react';
import CrudContext from './context/context';

const base_url1 = `https://crudcrud.com/api/9f83b6bb6d07447e851e9cd2d05ae588/posts`; 
const base_url2 = `https://crudcrud.com/api/e1c89db027c24088b62b38ed4e28332d/posts`;
const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/

function App() {

  const [login, setLogin] = useState(true)
  const [sidemenu, setSidemenu] = useState(false)
  const [error, setError] = useState({})

  return (
    <CrudContext.Provider value={{ login, setLogin, sidemenu, setSidemenu, base_url1, error, setError, passRegex, base_url2 }}>
      <div className={classes.App}>
        <Header />
        {login ? <Login /> : <Home />}
        <Footer />
      </div>
    </CrudContext.Provider>
  );
}

export default App;
