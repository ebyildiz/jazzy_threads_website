import React from "react"
import { NavLink } from "react-router-dom"
import titleIcon from "../public/title-icon.png"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="header-main">
                <img className="title-icon" src={titleIcon} />
            </div>
            <div className="links">
                <NavLink className={({isActive})=> isActive? "nav-link active" : "nav-link"} to=".">Home</NavLink>
                <NavLink className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="about">About</NavLink>
                <NavLink className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="contact">Contact</NavLink>
            </div>
        </header >

    )
}