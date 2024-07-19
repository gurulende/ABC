import Menu from "./Component/Menu";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Home from "./Component/home";
import Vehicle from "./Component/Vehicle";
import { Route, Routes } from "react-router-dom";

function App(){
   return (
  <>
 <Menu/>
 <Routes>
 <Route path="/" element = {<Home/>}/>
 <Route path="/about" element = {<About/>}/>
 <Route path = "/vehicle" element = {<Vehicle/>}/>
 </Routes>
 <Footer/>
</>
  )
}



export default App;