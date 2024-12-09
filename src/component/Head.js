import React, { useContext } from 'react'
import ThemeContext from './contexts/themeContext'
// import SampleContext from './SampleContext'
import userContext from './contexts/userContext'

export default function Head() {

  const theme = useContext(ThemeContext)
   const [user , isLoggedIn,login,logOut]=useContext(userContext)
  
  return (
    <div>
      <header className={`box ${theme}`}>
        <h2>Header</h2>
        {isLoggedIn && <span>{user.name}</span> }
        {
          isLoggedIn ? <span onClick={logOut}>Logount</span>
          : <span onClick={login} className='action'>
            Login
            </span>
        }
       
      </header>
    </div>
  )
}

// export default class Head extends React.Component {
//   render() {
//     return (
//       <SampleContext.Consumer>
//         {
//           () => {
//             <ThemeContext.Consumer>
//               {
//                 theme => {
//                   <header className={`box ${theme}`}>
//                     GHead
//                   </header>
//                 }
//               }
//             </ThemeContext.Consumer>
//           }
//         }
//       </SampleContext.Consumer>
//     )
//   }
// }
