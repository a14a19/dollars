import classes from './App.module.scss';
import Home from './pages/home';
import Login from './pages/login';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import PageNotFound from './pages/pagenotfound';

import { useState } from 'react';
import CrudContext from './context/context';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const base_url1 = `https://crudcrud.com/api/e1ba30afb1714323903adbf4218391a0/posts`;
const base_url2 = `https://crudcrud.com/api/f08ef85f4a5b4449892a2d893abd1f99/posts`;
const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/

function App() {

  const [login, setLogin] = useState(true)
  const [sidemenu, setSidemenu] = useState(false)
  const [error, setError] = useState({})
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({ username: '' })

  return (
    <BrowserRouter>
      <CrudContext.Provider value={{ login, setLogin, sidemenu, setSidemenu, base_url1, error, setError, passRegex, base_url2, users, setUsers, user, setUser }}>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Navigate to="/home" />} />
            <Route exact path='/login' element={login ? <Login /> : <Navigate to='/home' />} />
            <Route exact path='/home' element={login ? <Login /> : <Home />} />
            <Route exact path='/about' element={login ? <Login /> : <About />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </CrudContext.Provider>
    </BrowserRouter>
  );
}

export default App;
