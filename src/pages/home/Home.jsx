import { useNavigate } from "react-router-dom"
import "./Home.css"

export default function Home(){
    const navigate = useNavigate()
    return(
        <>
            <div className="body">
                <div className="card" onClick={() => {navigate("/products")}}>
                    <img src="https://www.sketchappsources.com/resources/source-image/material-design-3-ui-kit-hxly.png" alt="material 3 example" />
                    <p>material ui 3 example</p>
                </div>
            </div>
        </>
    )
}