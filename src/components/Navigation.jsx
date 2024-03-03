import { useState } from "react"; 
import "./Navigation.css"
import iconMoonLight from "../assets/icon-moon-light.svg"
import iconMoonDark from "../assets/icon-moon-dark.svg"; 
import iconSunLight from "../assets/icon-sun-light.svg"; 
import iconSunDark from "../assets/icon-sun-dark.svg"; 

const Navigation = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false); 
    console.log(props.quizzes[props.index])
    
    let indexReceived = typeof(props.index) === "number"; 
    let imgStyle = {backgroundColor: "transparent"}; 

    if (indexReceived) {
        imgStyle = {
            backgroundColor: props.quizzes[props.index]?.iconBackground || "", 
            borderRadius: "10px"
        }
    }

    const toggleColorModeHandler = (event) => {
        if (event.type === "keydown" && event.key !== "Enter") {
            return 
        }
        if (isDarkMode) {
            setIsDarkMode(false); 
        } else {
            setIsDarkMode(true); 
        }
        props.onColorSchemeToggle(); 
    }

    return (
        <header className="navigation">
            <div className="navigation_quiz text"><div style={imgStyle}><img src={indexReceived ? props.quizzes[props.index].icon : ""} alt="" /></div> {indexReceived && props.quizzes[props.index].title} </div>
            <div className="navigation_button" role="button" tabIndex={0} onKeyDown={toggleColorModeHandler}>
                <div className="navigation_icons">
                    <img src={isDarkMode ? iconSunLight : iconSunDark} alt="Sun icon based on user choice of color mode"/>
                </div>
                <div onClick={toggleColorModeHandler} className={`navigation_toggle ${isDarkMode ? "navigation_toggle--toggled" : ""}`}>
                    <div className="navigation_ball"></div>
                </div>
                <div className="navigation_icons">
                    <img src={isDarkMode ? iconMoonLight : iconMoonDark} alt="Moon icon based on user choice of color mode" />
                </div>
            </div>
        </header>
    )
}

export default Navigation; 