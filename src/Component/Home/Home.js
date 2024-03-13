import React from "react";
import "./Home.css";
import ip from "../Assets/ved.mp4";
import iu from "../Assets/hero_endframe.jpg";
import iv from "../Assets/Apple Watch Series 9.mp4";
import ie from "../Assets/re.jpg";
import ir from "../Assets/gps.png";
import le from "../Assets/macbook.png";
import re from "../Assets/firstnet.png";
import lee from "../Assets/15.png";
import ree from "../Assets/finewoven.webp";
import AQAQ from "../Assets/FDFD.png";


const Home =()=>{
    return(
        <div>
            
        <h5 id="a">Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks</h5>


        
<div className="bgcontainer">
    <  video id="ds" src={ip}  autoPlay loop muted/>
             <div className="rdcontainer">
                  <h3 className="wlc">IPHONE 15 PRO</h3>
                  <h3 id="title">TITANIUM.SO STRONG.SOLIGHT.SO PRO, </h3>
                  <button id="re" className="btn">LERN MORE</button>
            </div>
</div>


            <div>
                <div id="aon">
                  <h1 id="con">IPHONE 15</h1>
                  <h2 >NEW CAMERA.NEW DESIGN.NEWPHORIA</h2>
                   <button id="fe" className="btn">LERN MORE</button><span> <button id="fe" className="btn">BUY</button></span>
                   </div>
                  < img id="don" src={iu} alt="IPHONE 15" />                
           </div>

    <div className="vbgcontainer">
    < video id="vds" src={iv}  autoPlay loop muted/>
             <div className="vcontainer">
                  <h3 className="vwlc">WATCH</h3>
                  <h3 id="vtitle">Apple Watch Series 9 </h3>
                  <button id="vre" className="btn">BLACK UNITY SPORTS BRAND</button>
            </div>
    </div>



 
<div className="container-fluid">
    <div className="row">
        <div className="col-md-6">
            <div className="tvbgcontainer">
                <img id="tvds" src={ie} alt="opps" />
                    <div className="tvcontainer">
                        <h3 className="tvwlc">WATCH</h3>
                            <h3 className="xtvwlc">SERIES 9</h3>
                                <h3 id="tvtitle">smarter.brighter.mightier. </h3>
                                    <button id="tvre" className="btn">LEARN MORE</button><span><button id="tvre" className="btn">BUY</button></span>
                                        </div>
                                            </div>    
                                                </div>
 
                                                 <div className="col-md-6">
                                             <div className="ttvbgcontainer">
                                        < img id="ttvds" src={ir} alt="opps" />
                                    <div className="ttvcontainer">
                               <h3 className="ttvwlc">WATCH</h3>
                            <h3 className="xttvwlc">ULTRA 2</h3>
                        <h3 id="ttvtitle">Next-Level adventure. </h3>
                    <button id="ttvre" className="btn">LEARN MORE</button><span><button id="ev" className="btn">BUY</button></span>
                </div>
            </div>
       </div>
    </div>
</div>
          
<div className="container-fluid">
    <div className="row">
        <div className="col-md-6">
            <div className="attvbgcontainer">
                < img id="attvds" src={le} alt="opps" />
                    <div className="attvcontainer">
                        <h3 className="attvwlc">MacBook Pro</h3>
                            
                                <h3 id="attvtitle">Mind-blowing.Head-turning. </h3>
                                    <button id="attvre" className="btn">LEARN MORE</button><span><button id="fe" className="btn">BUY</button></span>
                                        </div>
                                            </div>    
                                                </div>
 
                                                 <div className="col-md-6">
                                             <div className="bttvbgcontainer">
                                        < img id="bttvds" src={re} alt="opps" />
                                    <div className="bttvcontainer">
                               <h3 className="bttvwlc">ipad</h3>
                           
                        <h3 id="bttvtitle">Lovable.Drawable.Mgical. </h3>
                    <button id="bttvre" className="btn">LEARN MORE</button><span><button id="fe" className="btn">BUY</button></span>
                </div>
            </div>
       </div>
    </div>
</div>


<div className="container-fluid">
    <div className="row">
        <div className="col-md-6">
            <div className="wattvbgcontainer">
                < img id="wattvds" src={lee} alt="opps"/>
                    <div className="wattvcontainer">
                        <h3 className="wattvwlc">Airpods Pro</h3>
                            
                                <h3 id="wattvtitle">Adaptive Audio.Now playing </h3>
                                    <button id="wattvre" className="btn">LEARN MORE</button><span><button id="fe" className="btn">BUY</button></span>
                                        </div>
                                            </div>    
                                                </div>
 
                                                 <div className="col-md-6">
                                             <div className="ebttvbgcontainer">
                                        < img id="ebttvds" src={ree} alt="opps" />
                                    <div className="ebttvcontainer">
                               <h3 className="ebttvwlc">Trade in</h3>
                           
                        <h3 id="ebttvtitle">Upgrade and save.it's that easy </h3>
                    <button id="ebttvre" className="btn">see what your device  is worth</button>
                </div>
            </div>
       </div>
    </div>
</div>

<div>
< img id="AQAQ" src={AQAQ} alt="opps" />

</div>


 </div>  )
}
export default Home;