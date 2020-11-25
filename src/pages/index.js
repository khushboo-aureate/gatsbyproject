import React from "react"

import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';

import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  color:red;
`
const Excerpt = styled.p`
  margin: 0;
`
const ShowMe = styled.p`
color:green;
font-weight:bold;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
    <ShowMe>This is awesome</ShowMe>
  </UserWrapper>
)


export default function Home() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header pagetitle="Home"/>  <br></br>    
      <MainContent>
        <div>
          <h1>Home</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
        
      </MainContent> 
      <Container>
      <h1>About Styled Components using Styled Components library</h1>
      <p>Styled Components is cool</p>
      <User
        username="Jane Doe"
        avatar="https://source.unsplash.com/random/400x200"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://source.unsplash.com/random/400x200"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
      <Footer></Footer>
    </div>
  )
}