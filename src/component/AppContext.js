import React, { useState } from 'react'
import Head from './Head'
import SideBar from './SideBar'
import Home from './Home'
import Footer from './Footer'
import './AppContext.css'
import ThemeContext,{themes} from './themeContext'


export default function AppContext() {
  const [theme, setTheme] = useState(themes.dark)

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={()=>setTheme(theme=== themes.light ? themes.dark : themes.light)}>
        {theme === themes.dark? "dark":"light"}</button>
      <Head/>
      <section className='main'>
        <SideBar theme={theme}/>
        <Home theme={theme}/>
      </section>
      <Footer theme={theme}/>
    </ThemeContext.Provider>
  )
}
