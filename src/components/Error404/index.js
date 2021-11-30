import React from 'react'
import  "./styles.css"
import img from "../images/error.png";
import { useTheme } from "../../context/ThemeContext";

function Error404() {
    const { theme } = useTheme()
    return (
        <div className="error" style={theme === 'dark' ? { backgroundColor: '#505050', color:'#9e9e9e'} : null}>
            <img src={img} />
            <div className="notfound-404">
                <h2>404 PAGE NOT FOUND</h2>
            </div>
            <div className="info" >
                <h3>Oops, the page you are looking for can't be found!</h3><a href="/"  > Return to Homepage</a>
            </div>
            
        </div>
    )
}

export default Error404
