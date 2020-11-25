import React,{ useEffect } from 'react'
import {Link} from 'gatsby';


export default function Header(props){
    useEffect(()=>{
        document.title = props.pagetitle;
    });
    return<div className="header" style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>GatsBy</h3>
        </Link>
        <ul className="menu-list" style={{ listStyle: `none`, float: `right` }}>
            <li className="menu-list-item"><Link to="/">Home</Link></li>
            <li className="menu-list-item"><Link to="/contact/">Contact</Link></li>
            <li className="menu-list-item"><Link to="/gallery/">Gallery</Link></li>
            <li className="menu-list-item"><Link to="/about/">About Us</Link></li>
        </ul>
    </div>
}