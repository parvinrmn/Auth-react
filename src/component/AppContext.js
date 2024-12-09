import React, { useEffect, useState } from 'react'
import Head from './Head'
import SideBar from './SideBar'
import Home from './Home'
import Footer from './Footer'
import './AppContext.css'
import ThemeContext, { themes } from './contexts/themeContext'
import { getToken,removeToken, setToken } from '../tools/Utils'
import axios from 'axios'
import { BASE_URL,TOKEN_NAME } from './tools/Constants'
import request from './tools/Request'
import userContext from './contexts/userContext' 



export default function AppContext() {
  const [theme, setTheme] = useState(themes.dark)
  
  return (
    <ThemeContext.Provider value={theme}>
      <userContext.Provider value={{ user, isLoggedIn , isLoading, login, logOut }}>
        <button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
          {theme === themes.dark ? "dark" : "light"}</button>
        <Head />
        <section className='main'>
          <SideBar theme={theme} />
          <Home theme={theme} />
        </section>
        <Footer theme={theme} />
      </userContext.Provider>
    </ThemeContext.Provider>
  )
}
