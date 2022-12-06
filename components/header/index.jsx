/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"

import styled from "styled-components"

const Header = () => {
  return(
    <Content> 
      <Redirect href="/">
        <WrapperLogo>
          <img src="./images/ropa-teran.png" />
        </WrapperLogo>
      </Redirect>
      <WrapperSections>
        <a href="/hombres">
          <h1>Hombres</h1>
        </a>
        <a href="/mujeres">
          <h1>Mujeres</h1>
        </a>
        <a href="/ninos">
          <h1>Niños</h1>
        </a>
        <a href="/accesorios">
          <h1>Acessorios</h1>
        </a>
        <a href="/atencion-cliente">
          <h1>Atención al Cliente</h1>
        </a>

      </WrapperSections>
    </Content>
  )
}

export default Header

const Content = styled.div`
  display: flex;
  box-shadow: 1px 1px 9px 5px rgba(0,0,0,0.7);
  max-width: 1440px;
  width: 100%;
  /* background-color: peru; */
  margin: 0 auto;
  height: 100px;
`
const Redirect = styled.a`
  text-decoration: none;
`
const WrapperLogo = styled.div`
  height: 100px;
  width: auto;
  margin: 0 auto;
  img{
    height: 100%;
    width: 104%;
    object-fit: cover;
    padding-left: 40px;
    
    @media (max-width: 800px){
      padding-left: 0;
    }
  }
  
  `
const WrapperSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100px;
  width: calc(100% - 100px);
  /* background-color: red; */
  line-height: 100px;
  
  a{
    font-style: none;
    color: black;
    font-size: 16px;
    &:hover{
      transition: 0.4s;
      opacity: 0.5;
    }

    h1{
      color: #0d6efd;
    }
  }
  
`