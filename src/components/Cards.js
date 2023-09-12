import React from "react";
//import Katie from  "../images/katie.png";
import Star from "../images/Star.png";

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
             {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} alt="katie" className="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}