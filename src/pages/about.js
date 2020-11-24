import React from "react"
import Header from "../components/header";

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headertext="This is about header" arbitraryPhrase="is arbitrary"></Header>
      <p>Such wow. Very React.</p>
    </div>
  )
}