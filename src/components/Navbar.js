import React from "react";
import Airbnb from "../images/airbnb-logo.png";


export default function Navbar() {
    return(
        <nav>
        <img src={Airbnb} alt="Airbnb logo"  className="nav--logo" />
        </nav>
    
    );
}