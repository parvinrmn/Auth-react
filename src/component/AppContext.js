import React, { useState } from 'react'
import Head from './Head'
import SideBar from './SideBar'
import Home from './Home'
import Footer from './Footer'
import './AppContext.css'
import {themes} from './themeContext'



export default function AppContext() {
  const [theme, setTheme] = useState(themes.dark)

  return (
    <div>
      <button onClick={()=>setTheme(theme=== themes.light ? themes.dark : themes.light)}>
        {theme === themes.dark? "dark":"light"}</button>
      <Head theme={theme}/>
      <section className='main'>
        <SideBar theme={theme}/>
        <Home theme={theme}/>
      </section>
      <Footer theme={theme}/>
    </div>
  )
}
