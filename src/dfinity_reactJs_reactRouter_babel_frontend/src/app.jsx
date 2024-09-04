import React from "react";
import Now from "./components/now"
import Choose from "./components/choose"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePageNSUT from "./components/NSUT/homepagensut";
import HomePageBidder from "./components/Bidder/homepagebidder"
import BidsNSUT from "./components/NSUT/bidsnsut"
import BidsBidder from "./components/Bidder/bidsbidder"
import "./style/main.css"
function App() {

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home name="Base Dfinity + ReactJs: "/>}/> */}
        <Route path="/" element={<Choose/>}/>
        <Route path="/now" element={<Now/>}/>
        <Route path="/homepagensut" element={<HomePageNSUT/>}/>
        <Route path="/homepagebidder" element={<HomePageBidder/>}/>
        <Route path="/bidsnsut" element={<BidsNSUT/>}/>
        <Route path="/bidsbidder" element={<BidsBidder/>}/>
      </Routes>
    </Router>
    );
}

export default App;