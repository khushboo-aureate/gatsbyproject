import React from 'react'
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`
export default function MainContent(props){
    return(
        
        <div className="maincontent" style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <GlobalStyle theme="purple" />
           <div className="childdata"> {props.children} </div>
        </div>      
    )
}