import logo from './logo.svg';
import './App.css';
import Feedback from './Feedback';
import Home from './Home';
import Error from './Error';
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/feedback'>Feedback</Link>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/feedback' element={ <Feedback />}></Route>
          <Route path='*' element={ <Error />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
