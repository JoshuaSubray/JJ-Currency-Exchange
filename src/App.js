// import logo from './logo.svg';
import './App.css';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Converter from './components/Converter';
import SignIn from './components/SignIn';
import UserHome from './components/UserHome';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <h1><b><u>CURRENCY CONVERTER</u></b></h1><br/>
            <nav>
              <Link to='/'>Home </Link>
              {/* <Link to='/converter'>Converter </Link> */}
              <Link to='/contact'>Contact </Link>
              <Link to='/feedback'>Feedback </Link>
              <Link to='/signin'>Sign in </Link>
              <Link to='/signup'>Sign up </Link>
            </nav>
        </div>
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/feedback' element={ <Feedback />}></Route>
          {/* <Route path='/converter' element={ <Converter />}></Route> */}
          <Route path='/signin' element={ <SignIn />}></Route>
          <Route path='/user/:User' element={ <UserHome />}></Route>
          <Route path='/signup' element={ <SignUp />}></Route>
          <Route path='/contact' element={ <Contact />}></Route>
          <Route path='*' element={ <Error />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
