import React from "react"

import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Header pagetitle="Home"/>
      <MainContent>
        <h1>Home</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </MainContent>   
      <Footer></Footer>
    </div>
  )
}