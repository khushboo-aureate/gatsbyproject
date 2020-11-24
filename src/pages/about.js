import React from "react"
import Header from "../components/header";
import Footer from '../components/footer';
import MainContent from '../components/MainContent';

export default function About() {
  return (    
    <div style={{ color: `green` }} class="about">
      <Header pagetitle="About Us"/>
      <MainContent>
        <h1>About Us</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </MainContent>   
      <Footer></Footer>
    </div>
  )
}