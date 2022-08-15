import React from 'react'
import reactLogo from './react_logo.png'

export default function Header(props){
    return (
      <header className={props.darkMode ? "dark" : ""}>
              <img className = "header-logo" src = {reactLogo} alt = "logo"/>
              <h1 className ="p_title">ReactFacts</h1>
              <div 
                className="toggler" 
            >
                <p className="toggler-light">Light</p>
                <div 
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
            </header> 
    );
  
  }