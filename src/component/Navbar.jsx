import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import "./navbar.css"

export default function Navbar(){

    const navigate = useNavigate()

    return(
        <div className="navbar">
            <a onClick={() => {navigate("/")}} >Material UI</a>
            <a onClick={() => {navigate("/about")}}>about</a>
            <a onClick={() => {navigate("/products")}} >examples</a>
            <a onClick={() => {navigate("/users")}}>users</a>
        </div>
    )
}