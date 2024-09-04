import React from "react"
import {useState} from "react"
import {dfinity_reactJs_reactRouter_babel_backend} from "../../../declarations/dfinity_reactJs_reactRouter_babel_backend"
import { useNavigate } from 'react-router-dom';
import "../style/choose.css"
function Choose(){
    const navigate = useNavigate();
    function goToBidder(){
        navigate("/homepagebidder")
    }
    function goToNSUT(){
        navigate("/homepagensut")
    }
    return(<>
    <h1>NSUT Campus Work Orders</h1>
    <div className="portal">
        <div onClick={goToNSUT}>
            <h2>NSUT Work Order Portal</h2>
            <p>Click if you're an NSUT Faculty Staff Member to create new work orders and view</p>
        </div>
        <div onClick={goToBidder}>
            <h2>Independent Contractor Portal</h2>
            <p>Click if you're an Independent Contractor to view available work orders and place your bid</p>
        </div>
    </div>
    </>)
}
export default Choose;