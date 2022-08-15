import React from 'react'
import "./index.css"
import Header from './Header'
import Main from './Main'

function App() {
  const[darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
      }

  return (
    <>
        <Header darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>      
        <Main darkMode = {darkMode}/>
    </>
  );
}

export default App;
