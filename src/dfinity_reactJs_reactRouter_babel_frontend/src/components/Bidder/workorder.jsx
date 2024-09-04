import React from "react"
import {useState} from "react"
import {dfinity_reactJs_reactRouter_babel_backend} from "../../../../declarations/dfinity_reactJs_reactRouter_babel_backend"
import { useNavigate } from 'react-router-dom';
import "../../style/workorder.css"
function WorkOrder(props){
    const navigate=useNavigate();
    function call(){
        console.log(props)
        navigate('/bidsbidder',{state:{wid:props.wid}});
    }
    return (
        <div onClick={call} className="workorder">
            <div className="category">
                <h2> {props.category}</h2>
            </div>
            <div className="content">
                <p>
                    {props.content}
                </p>
            </div>
            <div className="lowbid">
                <div>
                <p>
                {props.lowbid}
                </p>
                </div>
                <div>
                    <p>₹{props.startingbid}</p>
                </div>
            </div>
        </div>
    )
}
export default WorkOrder;