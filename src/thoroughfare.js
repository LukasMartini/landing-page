//import { useState } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
//import {DropdownButton} from "react-bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavBar from "./cnb";
import Home from "./home.js";
import About from "./about.js";
import ProjectsFunctional from "./projectsfunctional.js";
import ProjectsIP from "./projectsIP.js";
import UhOh from "./fourohfour.js";

export default function lp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<CustomNavBar/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"about"} element={<About/>}/>
                    <Route path={"projectsFunctional"} element={<ProjectsFunctional/>}/>
                    <Route path={"projectsInProgress"} element={<ProjectsIP/>}/>
                    <Route path={"*"} element={<UhOh/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<lp/>);