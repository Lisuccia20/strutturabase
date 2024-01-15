import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./navbar.css"

export default function Navbar(){

    const navigate = useNavigate()
    const [isActive, setIsActive] = useState()
    return(
        <div className="navbar">
            <button onClick={() => setIsActive(!isActive)}>᳃</button>
            <a onClick={() => {navigate("/")}} className = {isActive?"show":"hide"}>Material UI</a>
            <a onClick={() => {navigate("/about")}} className = {isActive?"show":"hide"}>about</a>
            <a onClick={() => {navigate("/products")}} className = {isActive?"show":"hide"}>examples</a>
            <a onClick={() => {navigate("/users")}} className = {isActive?"show":"hide"}>users</a>
        </div>
    )
}