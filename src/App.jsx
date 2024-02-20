import React from 'react'
import Nav from './components/Nav'
import './App.css'
import { styled } from 'styled-components'
import Banner from './components/Banner'

const App = () => {
  return (
    <Container>
      <Nav />
      <Banner />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw +5px);
`

export default App
