import React from "react"
import {useState,useEffect} from "react"
import {dfinity_reactJs_reactRouter_babel_backend} from "../../../../declarations/dfinity_reactJs_reactRouter_babel_backend"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "../../style/bidsnsut.css"
function BidsBidder(){
  const location = useLocation();
  const obj = location.state||{};
  const [mainObj,setMainObj]=useState({});
  const [trigger,updateTrigger]=useState(1);
  console.log(mainObj)
  useEffect(function (){
    async function getSpecific(){
        var x=await dfinity_reactJs_reactRouter_babel_backend.sendSpecific(obj.wid-1);
        x.id=parseInt(x.id);
        setMainObj(x);
    }
    getSpecific();
  },[trigger])
  if (!mainObj.bids || !Array.isArray(mainObj.bids)) {
    return <div>Loading...</div>;
  }
  function addBid(event){
    var or=event.target.parentElement.querySelector(".organisation>textarea").value;
    var ci=event.target.parentElement.querySelector(".contact-info>textarea").value;
    var bi=event.target.parentElement.querySelector(".bid-value>textarea").value;
    async function waitAdd(){
      await dfinity_reactJs_reactRouter_babel_backend.addBid(parseInt(obj.wid)-1,or,parseInt(bi),ci);
    }
    waitAdd();
    updateTrigger(trigger+1);
  }
  return (
    <div>
     <div className="container-1">
      <div className="category-1">
        <h1>Category: {mainObj.category}</h1>
      </div>
      <div className="description-1">
        <p>Description: {mainObj.content}</p>
      </div>
      <div className="bids-1">
        {mainObj.bids.map((bid, index) => (
          <div key={index} className="bid-1">
            <div className="bidder-name-1">{bid.organisation}</div>
            <div className="bidder-value-1">₹{parseInt(bid.bidplaced)}</div>
          </div>
        ))}
      </div>
     </div>
     <div class="submit-bid">
      <h1>SUBMIT YOUR BID</h1>
      <div class="organisation"><textarea placeholder="Organisation Name"></textarea></div>
      <div class="contact-info"><textarea placeholder="Contact Information"></textarea></div>
      <div class="bid-value"><textarea placeholder="Bid Value"></textarea></div>
      <button onClick={addBid}>Submit</button>
     </div>
    </div>
  );
};

export default BidsBidder
