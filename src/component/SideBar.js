import React from 'react'

export default function SideBar({theme}) {
  return (
    <div className={`box ${theme}`}>
      <h4>SideBar</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
