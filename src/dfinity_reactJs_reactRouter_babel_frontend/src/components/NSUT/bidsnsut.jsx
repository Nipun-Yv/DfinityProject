import React from "react"
import {useState,useEffect} from "react"
import {dfinity_reactJs_reactRouter_babel_backend} from "../../../../declarations/dfinity_reactJs_reactRouter_babel_backend"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "../../style/bidsnsut.css"
function BidsNSUT(){
  const location = useLocation();
  const obj = location.state||{};
  const [mainObj,setMainObj]=useState({});
  console.log(mainObj.bids);
  useEffect(function (){
    async function getSpecific(){
        var x=await dfinity_reactJs_reactRouter_babel_backend.sendSpecific(obj.wid-1);
        x.id=parseInt(x.id);
        setMainObj(x);
    }
    getSpecific();
  },[])
  if (!mainObj.bids || !Array.isArray(mainObj.bids)) {
    return <div>Loading...</div>;
  }

  return (
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
            <div className="bidder-info-1">{bid.contactinfo}</div>
            <div className="bidder-value-1">₹{parseInt(bid.bidplaced)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidsNSUT
