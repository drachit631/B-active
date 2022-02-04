import React from 'react'
import {Routes, Route} from "react-router-dom"
import Userprofile from './Userprofile'
import Homepage from './Homepage'
import Header from './Header'
import Footer from './Footer'
function Mainrouter() {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Homepage/>}/>
                <Route path="/userprofile" element={<Userprofile/>}/>
                <Route path="/header" element={<Header/>}/>
                <Route path="/footer" element={<Footer/>}/>
            </Routes>
        </div>
    );
}

export default Mainrouter;
