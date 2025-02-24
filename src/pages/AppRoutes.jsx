import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Homes2 from "./Homes2";
import Homes3 from "./Homes3";



export default function AppRoutes() {
  return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/Homes2" element = {<Homes2/>}/>
    <Route path="/Homes3" element = {<Homes3/>}/>
</Routes>
</BrowserRouter>
</>

  );
}