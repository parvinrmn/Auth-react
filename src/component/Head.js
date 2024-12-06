import React, { useContext } from 'react'
import ThemeContext from './themeContext'
// import SampleContext from './SampleContext'

export default function Head() {

  const theme = useContext(ThemeContext.Consumer)
  return (
    <div>
      <header className={`box ${theme}`}>
        head
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
