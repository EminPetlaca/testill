import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Homes2 from "./Homes2"

export default function AppRoutes() {
  return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="Homes/" element = {<Homes2/>}/>
</Routes>
</BrowserRouter>
</>

  );
}