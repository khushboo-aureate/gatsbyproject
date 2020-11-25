import React from 'react'
import Header from "../components/header";
import Footer from '../components/footer';
import MainContent from '../components/MainContent';

export default function gallery(){
    return(
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }} className="gallery">
        <Header pagetitle="Gallery"/><br></br>  
        <MainContent>
            <h1>Gallery</h1>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </MainContent>   
        <Footer></Footer>
    </div>
  )
}