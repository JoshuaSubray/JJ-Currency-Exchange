// import logo from './logo.svg';
import './App.css';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Error from './components/Error';
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Converter from './components/Converter';
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <Link to='/'>Home </Link>
            <Link to='/feedback'>Feedback </Link>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/feedback' element={ <Feedback />}></Route>
          <Route path='*' element={ <Error />}></Route>
        </Routes>
        <Converter/>
      </Router>
    </div>
  )
}

export default App;
