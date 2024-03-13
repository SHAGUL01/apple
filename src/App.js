import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Wathes from './Component/Wathes/Wathes';
import Home from './Component/Home/Home';
import Iphone from './Component/Iphone/Iphone';
import Accessories from "./Component/ACCESSORIES/Kids"
import Airpods from './Component/Airpods/Airpods';
import Sign_in from './Component/Sign_in/Sign_in';
import Footer from './Component/Footer/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/><Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Wathes' element={<Wathes/>}/>
     <Route path='/Iphone' element={<Iphone/>}/>
     <Route path='/Accessories' element={<Accessories/>}/>
     <Route path='/Airpods' element={<Airpods/>}/>
     <Route path='/Sign' element={<Sign_in/>}/>
    
     </Routes><Footer/>
     </BrowserRouter>

        
    </div>
  );
}

export default App;
