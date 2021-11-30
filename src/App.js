import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Work from './pages/work';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
      </Routes>
      <Home />
    </Router>    
  );
}

export default App;
