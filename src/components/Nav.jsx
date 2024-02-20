import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Nav = () => {
  const [show, setShow] = useState('false')

  const listner = () => {
    if (window.scrollY > 50) {
      setShow('true')
    } else {
      setShow('false')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listner)
    return () => {
      window.removeEventListener('scroll', listner)
    }
  }, [])

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="logo"
          src="/images/apple-logo.png"
          onClick={() => (window.location.href = '/')}
        />
      </Logo>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0; // left도 같이 지정해야 합니다.
  height: 70px;
  background-color: ${(props) => (props.show === 'true' ? '#090b13' : 'black')};
`

const Logo = styled.div`
  padding: 0;
  width: 70px;
  font-size: 0;
  display: inline-block;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  img {
    display: block;
    width: 100%;
  }
`

export default Nav
