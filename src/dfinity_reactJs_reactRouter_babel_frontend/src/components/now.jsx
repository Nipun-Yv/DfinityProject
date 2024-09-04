import React from "react"
import {dfinity_reactJs_reactRouter_babel_backend} from "../../../declarations/dfinity_reactJs_reactRouter_babel_backend"
import { useNavigate } from 'react-router-dom';
function Now(){
    return (<div>
        <GoToProfile/>
    </div>)
}
//button external links
const GoToProfile = () => {
  const navigate = useNavigate();
  async function handleClick (){
    const y=await dfinity_reactJs_reactRouter_babel_backend.sendItAll();
    console.log('Processing data...'+y[0].bids[0].organisation);
    navigate('/greeting');
  };
  return (
    <div>
      <button onClick={handleClick}>
        GoToProfile
      </button>
    </div>
  );
};

export default Now;