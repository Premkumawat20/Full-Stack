import './App.css';
import Navbar from './Navbar';
import  Department from './Department';
import  Employee  from './Employee';
import  Home  from './Home';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
// import { Routes } from 'react-router';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route Route path='/home' exact element={<Home/>}/>
      <Route Route path='/employee' exact element={<Employee/>}/>
      <Route Route path='/department' exact element={<Department/>}/>
      <Route Route path='/dashboard' exact element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>


    // <Router>
    // <Navbar/>
    //   <Routes>
    //     <Route path='/home' exact element={<Home/>}/>
    //     <Route path='/department'  element={<Department/>} exact />
    //     <Route path='/employee'   element={<Employee/>} exact />
    //   </Routes>
    // </Router>
  );
}

export default App;
