import React from 'react'

export default function MainContent(props){
    return(
        <div class="maincontent">
           <div class="childdata"> {props.children} </div>
        </div>      
    )
}