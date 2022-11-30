import React from "react"
import styled from "styled-components"


const Footer = () => {
  return(
    <>
      <ContainerFooter>
        <WrapperLogo>
          <img src="./images/ropa-teran.png" />
        </WrapperLogo>
        <ContentText>
          <BlockText>
            <h1>INFORMACIÓN</h1>
            <h2>Hombres</h2>
            <h2>Mujeres</h2>
            <h2>Niños</h2>
            <h2>Accesorios</h2>
          </BlockText>
          <BlockText2>
            <h1>INFORMACIÓN DE CONTACTO</h1>
            <h3>
              <div>
                <img src="./images/location.png" alt="icon"/>
              </div>
              Jr Tarapaca 595, Cercado, Huanta
            </h3>
            <h3>
              <div>
                <img src="./images/location.png" alt="icon"/>
              </div>
              Jr Maria Montesori 150, Cercado
            </h3>
            <h3>
              <div>
                <img src="./images/mobile.png" alt="icon"/>
              </div>
              (+51) (66) 311905  
            </h3>
            <h3>
              <div>
                <img src="./images/mail.png" alt="icon"/>
              </div>
              teran@gmail.pe
            </h3>
          </BlockText2>
        </ContentText>

      </ContainerFooter>
      <Copyright>
        © 2022 Copyright - Todos los derechos reservados a Terán SAC
      </Copyright>
    </>
  )
}

export default Footer

const ContainerFooter = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: auto;
  padding-top: 20px;
  margin: 0 auto 0;
  padding-bottom: 20px;
  background-color: black;
  @media (max-width: 600px) {
    /* display: block; */
  }
`
const WrapperLogo = styled.div`
  height: 100%;
  max-width: 300px;
  width: 100%;
  /* margin: 0 auto; */
  padding-left: 40px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 537px){
    display: none;
  }
`
const ContentText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: calc(100% - 300px);
  height: 100%;
  padding: 0 50px;
  min-width: 480px;

  @media (max-width: 865px){
    padding: 0;
  }
  /* @media (max-width: 537px){
    display: block;
  } */
`
const BlockText = styled.div`
  text-align: center;
  color: white;
  h1{
    font-size: 20px;
    font-weight: bolder;

  }
  h2{
    font-size: 15px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 40px;

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h3{
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 40px;

    div{
      height: 20px;
      width: 20px;
      margin-top: 5px;

      img{
        width: 100%;
        height: 100%;
      }
    }

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
const BlockText2 = styled.div`
  text-align: center;
  color: white;
  h1{
    font-size: 20px;
    font-weight: bolder;

    @media (max-width: 537px){
      border-top: solid 1px white;
      padding-top: 20px;
    }
  }
  h2{
    font-size: 15px;
    line-height: 40px;

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h3{
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 40px;
    
    div{
      height: 20px;
      width: 20px;
      margin-top: 5px;

      img{
        width: 100%;
        height: 100%;
      }
    }

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
const Copyright = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 50px;
  color: white;
  margin: 0 auto;
  background-color:black ;
  border-top: 1px solid white;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
`