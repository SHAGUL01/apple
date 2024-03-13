import React from "react";
import "./Airpods.css";
import hgf from "../Assets/AirPods Pro.mp4";
import p1 from "../Assets/4.webp";
import p2 from "../Assets/8.webp";
import p3 from "../Assets/df.webp";
import p4 from "../Assets/io.jpg";
import p10 from "../Assets/lk.webp";
import p11 from "../Assets/fgg.jpg";
import p12 from "../Assets/33.webp";
import z1 from "../Assets/Page.jpg";
import z2 from "../Assets/kk.webp";
import z3 from "../Assets/poo.png";
import z8 from "../Assets/jjh.jpg";
import z9 from "../Assets/fd.jpg";
import z19 from "../Assets/fggg.jpg";


const Airpods =()=>{
    return(
        <div>

<br></br>
<br></br>
<br></br>

     <h4 id="p">Save ₹1000.00 instantly on AirPods Pro with HDFC Bank Credit Cards.+ Plus No Cost EMI from most leading banks.‡ Shop now</h4>


     <div className="opp">
    < video id="rds" src={hgf}  autoPlay  loop  muted/>

             <div className="ott">
                  <h3 id="ro">AirPods Pro </h3>
                  <h3 id="ri">2nd generation</h3>
                  <h3 id="rr">₹24900.00*</h3>
                  <button id="ll" className="btn">LEARN MORE</button><span> <button id="ll" className="btn">BUY</button></span>

            </div>
     </div>



     <div className="container-fluid" id="dfd">
    <div className="row">
        <div className="col-md-6">
            <img id="rtr" src={p3} alt="opps"/>
        </div>
        <div className="col-md-6">
            <img id="rte" src={p4} alt="opps" />
        </div>
    </div>
</div>

<img id="rtr" src={p10} alt="opps" />

<div className="container-fluid" id="dfd">
    <div className="row">
        <div className="col-md-6">
            <img id="rtr" src={p1} alt="opps"/>
        </div>
        <div className="col-md-6">
            <img id="rte" src={p2} alt="opps"/>
        </div>
    </div>
</div>

<div id="dfd">
<img id="rth" src={p11} alt="opps"/>
</div>


<div id="ddd">
   <img id="rrh" src={p12} alt="opps" /> 
        <div id="fdf">
            <h1 id="x1">AirPods</h1>
            <h1>3rd generation</h1>
            <h1>From ₹19900.00*</h1>
        </div>
</div>


<div className="container-fluid">
            <img id="rrd" src={z1} alt="opps" /> 
             <img id="rrd" src={z3} alt="opps" /> 
            <img id="rrdd" src={z2} alt="opps" />  
            <img id="rrdd" src={z8} alt="opps" />  
            <img id="rrdd" src={z9} alt="opps" />             
</div>


<div className="container-fluid">
    <div className="row">
        <div className="col-md-6">
        <img id="rrd" src={z19} alt="opps" />             
        </div>
        <div className="col-md-6" >
<h1 id="s2">An instant connection.</h1>
<h1 id="s3">Place AirPods near your iPhone or iPad and tap Connect to pair with every device in your iCloud account. If you're playing music on your Mac, you’ll be able to answer a call on your iPhone — without having to switch devices.4</h1>
<h1 id="s2">A great sense of detection. </h1>
<h1 id="s3">An enhanced skin-detect sensor knows the difference between your ear and other surfaces, so audio only plays when you’re wearing AirPods — and pauses when they’re in your pocket or on a table.</h1>
        </div>
    </div>
</div>



</div>)}
    export default Airpods;