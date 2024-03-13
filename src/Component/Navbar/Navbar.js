import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const NAVEBAR =()=>{
    return(
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">

		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar" >
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
		</button>

     <ul class="navbar-brand"><Link to="/">APPLEOFFICIAL WEBSITE</Link></ul>
    </div>
    <div class="collapse navbar-collapse" id="mynavbar">


    <ul class="nav navbar-nav">
      
     
      <li  id="e"><Link to="/Iphone">IPHONE</Link></li>
      <li id="e"><Link to="/WATHES">WATHES</Link></li>
      <li id="e"><Link to="/AIRPODS">AIRPODS</Link></li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
       
       <li id="e"><Link to="/ACCESSORIES">ACCESSORIES</Link></li>
      <li id="e"><Link to="/Sign "><span class="glyphicon glyphicon-user">SIGNIN </span></Link></li>

    </ul>
    </div>
  </div>
  
</nav>
    )
}
export default NAVEBAR;