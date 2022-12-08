import classes from './App.module.scss';
import Home from './pages/home';
import Login from './pages/login';
import Header from './components/header';
import Footer from './components/footer';

import { useState } from 'react';
import CrudContext from './context/context';

const base_url1 = `https://crudcrud.com/api/9839dd863de04e8c82dcbbc66ee16aeb/posts`; 
const base_url2 = `https://crudcrud.com/api/d63d941f81aa42b9a7b2d8415cbf8c53/posts`;
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
