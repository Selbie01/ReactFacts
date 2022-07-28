import React from 'react'
import reactLogo from './react_logo.png'

export default function Header(){
    return (
      <header>
              <img className = "header-logo" src = {reactLogo} alt = "logo"/>
              <h1 className ="p_title">ReactFacts</h1>
              <h4 className = "p_subtitle">React Course - Project 1</h4>
            </header> 
    );
  
  }