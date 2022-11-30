/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"
import Layout from "../layout"
import CarouselNotices from "../components/CarouselPortada/default"
import styled from "styled-components"

const Home = () => {
  return (
    <Layout>
      <CarouselNotices/>
      <WrapperGenero>
        <h1>¿PARA QUIÉN COMPRAS?</h1>
        <ContentGenero>
          <Genero>
            <a href="/hombres">
              <img src="./images/hombres.jpg" />
            </a>
            <h1>Hombres</h1>
          </Genero>
          <Genero>
            <a href="/mujeres">
              <img src="./images/mujeres.jpg" />
            </a>
            <h1>Mujeres</h1>
          </Genero>
          <Genero>
            <a href="/ninos">
              <img src="./images/ninos.jpg" />
            </a>
            <h1>Niños</h1>
          </Genero>
          <Genero>
            <a href="/accesorios">
              <img src="./images/accesorios.jpg" />
            </a>
            <h1>Accesorios</h1>
          </Genero>
        </ContentGenero>
      </WrapperGenero>

      <HallOfFame>
        <h1>LO MÁS VENDIDO</h1>
        <WrapperContent>
          <BlockItem>
            <div>
              <img src="./images/mas-vendido1.jpg" alt="items"/>
            </div>
            <h1>Sweatshirt</h1>
            <h2>S/. 209.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mas-vendido2.jpg" alt="items"/>
            </div>
            <h1>Camisa flanela</h1>
            <h2>S/. 229.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mas-vendido3.jpg" alt="items"/>
            </div>
            <h1>Mochila acolchada Cassius</h1>
            <h2>S/. 289.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mas-vendido4.jpg" alt="items"/>
            </div>
            <h1>Chullo tejido</h1>
            <h2>S/. 109.90</h2>
          </BlockItem>
        </WrapperContent>
      </HallOfFame>

      <HallOfFame>
        <h1>OFERTAS DE LA SEMANA</h1>
        <WrapperContent>
          <BlockItem>
            <div>
              <img src="./images/oferta-semana1.jpg" alt="items"/>
            </div>
            <h1>Crop Hoodie Malla</h1>
            <h2>S/. 189.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/oferta-semana2.jpg" alt="items"/>
            </div>
            <h1>Casaca Bomber</h1>
            <h2>S/. 109.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/oferta-semana3.jpg" alt="items"/>
            </div>
            <h1>Polo estampado</h1>
            <h2>S/. 89.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/oferta-semana4.jpg" alt="items"/>
            </div>
            <h1>Sudadera escudo Perú</h1>
            <h2>S/. 109.90</h2>
          </BlockItem>
        </WrapperContent>
      </HallOfFame>

      <HallOfFame>
        <h1>DESTACADOS</h1>
        <WrapperContent>
          <BlockItem>
            <div>
              <img src="./images/destacados1.avif" alt="items"/>
            </div>
            <h1>POLERA QUIKSILVER CREW NECK</h1>
            <h2>S/. 309.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/destacados2.webp" alt="items"/>
            </div>
            <h1>Conjunto Géminis Mujer</h1>
            <h2>S/. 179.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/destacados3.webp" alt="items"/>
            </div>
            <h1>Conjuto Cartera & correa Mujer</h1>
            <h2>S/. 117.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/destacados4.avif" alt="items"/>
            </div>
            <h1>Polo simple C </h1>
            <h2>S/. 124.90</h2>
          </BlockItem>
        </WrapperContent>
      </HallOfFame>

      <HallOfFame>
        <h1>¿QUÉ BUSCAS?</h1>
        <WrapperContent>
          <BlockItem>
            <div>
              <img src="./images/que-buscas1.jpg" alt="items"/>
            </div>
            <h1>ZAPATILLAS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/que-buscas2.jpg" alt="items"/>
            </div>
            <h1>POLOS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/que-buscas3.jpg" alt="items"/>
            </div>
            <h1>POLERAS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/que-buscas4.jpg" alt="items"/>
            </div>
            <h1>GORRAS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>

          <BlockItem>
            <div>
              <img src="./images/que-buscas5.jpg" alt="items"/>
            </div>
            <h1>JOGGERS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/que-buscas6.jpg" alt="items"/>
            </div>
            <h1>ZANDALIAS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/que-buscas7.jpg" alt="items"/>
            </div>
            <h1>MOCHILAS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/que-buscas8.jpg" alt="items"/>
            </div>
            <h1>CANGUROS</h1>
            <h2>IR A COMPRAR</h2>
          </BlockItem>
        </WrapperContent>
      </HallOfFame>
    </Layout>
  )
}

export default Home

const WrapperGenero = styled.div`
  height: auto;
  padding: 20px 0 80px;
  width: 100%;
  /* background-color: blue; */
  margin: 0 auto;
  font-style: oblique;
  h1{
    font-size: 30px;
    text-align: center;
    padding-top: 20px;
    
  }
`
const ContentGenero = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 25px;
  height: auto ;
  
  h1{
    margin-bottom: 10px;
  }
  `
const Genero = styled.div`
  height: 350px;
  width: 280px;
  cursor: pointer;
  margin: 40px;
  
  &:hover{
    transition: 0.4s;
    opacity: 0.7;
    padding: 5px;
  }

  a {
    text-decoration: none;

    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`
const HallOfFame = styled.div`
  width: 100%;
  /* background-color: peru; */
  height: auto;
  h1{
    font-size: 30px;
    text-align: center;
    padding-top: 20px;
    font-style: oblique;
  }
`
const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0 30px;
  height: auto;
`
const BlockItem = styled.div`
  width: 300px;
  height: 400px;
  /* background-color: blue; */
  margin: 30px;
  border-radius: 10px;
  text-align: center;
  
  h1{
    font-size: 20px;
    
  }
  h2{
    padding-top: 10px;
    font-size: 18px;
    color: red;

    &:hover{
      color: #0DC143;
    }
  }

  div{
    height: 300px;
    width: 100%;

    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &:hover{
    cursor: pointer;
    transition: 0.4s;
    opacity: 0.8;
    border: solid 1px #2F7C47;
  }
`