import React from "react"
import {useState,useEffect} from "react"
import {dfinity_reactJs_reactRouter_babel_backend} from "../../../../declarations/dfinity_reactJs_reactRouter_babel_backend"
import { useNavigate } from 'react-router-dom';
import WorkOrder from './workorder'
import "../../style/homepagensut.css"
function HomePageNSUT(){
    const [workorders,setWorkOrderList]=useState([]);
    const [isUpdated,changeUpdate]=useState(1);
    useEffect(function(){
        async function fetchWorkOrders(){
            var y=await dfinity_reactJs_reactRouter_babel_backend.sendItAll()
            setWorkOrderList(y);
        }
        fetchWorkOrders();
    },[isUpdated])
    function addWorkOrder(event){
        var con=event.target.parentElement.parentElement.querySelector(".content>textarea").value
        event.target.parentElement.parentElement.querySelector(".content>textarea").value=""
        var cat=event.target.parentElement.parentElement.querySelector(".category>textarea").value
        event.target.parentElement.parentElement.querySelector(".category>textarea").value=""
        var sbid=event.target.parentElement.parentElement.querySelector(".starting-bid>textarea").value
        event.target.parentElement.parentElement.querySelector(".starting-bid>textarea").value=""
        async function goAdd(){
            await dfinity_reactJs_reactRouter_babel_backend.addWorkOrder(cat,con,parseInt(sbid));
        }
        goAdd();
        changeUpdate(isUpdated+1);
    }
    //-----------------------------
    function retrieveSmall(element){
        if(!element.length){
            return "none";
        }
        else{
            var x=element[0].bidplaced;
            for(var i=0;i<element.length;i++){
                if(element[i].bidplaced<x){
                    x=element[i].bidplaced;
                }
            }
            x=parseInt(x);
            return "₹"+x;
        }
    }
    //------------------------------
    // if(!workorders.length){
    //     return (<div>Loading...</div>)
    // }
    return (
        <>
        <h1>Work Orders</h1>
        <div class="flex-container">
        <div class="inner-container item-category">Category</div>
        <div class="inner-container item-content">Content</div>
        <div class="inner-container item-bid">Starting Bid / Lowest Bid</div>
    </div>
        <div class="outer-container">
         {workorders.map((ele)=>{
            return (<WorkOrder wid={parseInt(ele.id)} content={ele.content}
            category={ele.category} 
            lowbid={retrieveSmall(ele.bids)}
            startingbid={parseInt(ele.startingbid)}
            />)
        })}
           <div class="new-work-order">
            <div class="category"><textarea placeholder="Add Category"></textarea></div>
            <div class="content"><textarea placeholder="Add Content"></textarea></div>
            <div class="starting-bid"><textarea placeholder="Starting Bid"></textarea></div>
            <div class="add"><button onClick={addWorkOrder}>Add Work Order</button></div>
           </div>
        </div>
        </>
    )
}
export default HomePageNSUT;