import React from 'react'
import reactLogo from './react_logo.png'
export default function Main(){
    return(
      <main>
        <h1>Fun facts about React</h1>
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        <img src = {reactLogo} alt = "logo" class = "logo"></img>
    </main>
    );
  }