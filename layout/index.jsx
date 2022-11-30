import styled from "styled-components"

import NextHead from 'next/head'
import Footer from "../components/footer"
import Header from "../components/header"

const Layout = (props) => {

  const {
    children
  } = props 

  return (
    <>
      <NextHead>

      </NextHead>
      <Wrapper>
        <Header/>
        <ContainerMain>
          {children}
        </ContainerMain>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const ContainerMain = styled.main`
  box-shadow: 1px 11px 10px 5px rgba(0,0,0,0.7);
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 300px);
  font-family: Arial, Helvetica, sans-serif;
`
