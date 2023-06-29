import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
