import React,{ useEffect } from 'react'
import {Link} from 'gatsby';


export default function Header(props){
    useEffect(()=>{
        document.title = props.pagetitle;
    });
    return <div class="header">
        <ul class="menu-list">
            <li class="menu-list-item"><Link to="/">Home</Link></li>
            <li class="menu-list-item"><Link to="/contact/">Contact</Link></li>
            <li class="menu-list-item"><Link to="/gallery/">Gallery</Link></li>
            <li class="menu-list-item"><Link to="/about/">About Us</Link></li>
        </ul>
    </div>
}