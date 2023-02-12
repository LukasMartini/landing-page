//import { useState } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
//import {DropdownButton} from "react-bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavBar from "./cnb";
import Home from "./home.js";
import Projects from "./projects.js";

export default function lp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CustomNavBar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="working" element={<Projects/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<lp />);