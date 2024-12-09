import Footer from './Footer'
import './AppContext.css'
import ThemeContext, { themes } from './contexts/themeContext'
import userContext from './contexts/userContext' 
import { getToken,removeToken, setToken } from './tools/Utils'
import axios from 'axios'
import { BASE_URL,TOKEN_NAME } from './tools/Constants'
import request from './tools/Request'


export default function useAth(params){
    const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading,setIsLoading]=useState(true)
  

  useEffect(()=>{
    const token=getToken('token');
        if (token){
          getUser()
        }else{
          setIsLoading(false)
        }
  })
  function logon(data,issetToken=false){
    setUser(data)
    isLoggedIn(true)
    if(issetToken){
      setToken(data.email)
    }
  }
  function login() {
    request('/user/2')
      .then(data => {
        logon(data)
      })
  }
  function getUser(){
     request('/user21',)
    .then(data=>{
      logon(data)
    }).finally(()=>setIsLoading(false))
  }
  function logOut() {
    setUser({});
    removeToken(TOKEN_NAME)
    isLoggedIn(false)
  }
  
}
