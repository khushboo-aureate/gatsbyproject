
import React from "react"

import Header from "../components/header"
import Footer from '../components/footer';
import MainContent from '../components/MainContent';

export default function Contact() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }} className="contact">
        <Header pagetitle="Contact Us"/><br></br>  
        <MainContent>
            <h1>Contact Us </h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </MainContent>   
      <Footer></Footer>
    </div>
  )
}