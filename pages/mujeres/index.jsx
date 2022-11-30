import React from "react"
import Layout from "../../layout"
import styled from "styled-components"

const Mujeres = () => {
  return (
    <Layout>
      <WrapperSearch>
        <TxtBuscar>Buscar:</TxtBuscar>
        <Search placeholder="Escribe algo..." />
        <IconSearch src="./images/search.png" />
      </WrapperSearch>

      <HallOfFame>
        <Tittle>LO ÚLTIMO EN MODA PARA MUJERES</Tittle>
        <WrapperContent>
          <BlockItem>
            <div>
              <img src="./images/mujeres.webp" alt="items" />
            </div>
            <h1>Polo Negro Ola</h1>
            <h2>S/. 79.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres2.webp" alt="items" />
            </div>
            <h1>Short Negro Ocacional</h1>
            <h2>S/. 224.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres3.webp" alt="items" />
            </div>
            <h1>Jeans semi moderno</h1>
            <h2>S/. 219.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres4.webp" alt="items" />
            </div>
            <h1>Short plomo Ocacional</h1>
            <h2>S/. 224.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres5.webp" alt="items" />
            </div>
            <h1>Polo simple Champions </h1>
            <h2>S/. 99.90</h2>
          </BlockItem>

          <BlockItem>
            <div>
              <img src="./images/mujeres6.webp" alt="items" />
            </div>
            <h1>polo DSCS shoe</h1>
            <h2>S/. 209.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres7.webp" alt="items" />
            </div>
            <h1>Polo simple Champions verde</h1>
            <h2>S/. 99.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres8.webp" alt="items" />
            </div>
            <h1>Conjuto deportivo x3</h1>
            <h2>S/. 349.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres9.webp" alt="items" />
            </div>
            <h1>Conjunto informal x2</h1>
            <h2>S/. 274.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres10.webp" alt="items" />
            </div>
            <h1>Camisa hojeada</h1>
            <h2>S/. 159.90</h2>
          </BlockItem>

          <BlockItem>
            <div>
              <img src="./images/mujeres11.webp" alt="items" />
            </div>
            <h1>Conjunto Addidas x2</h1>
            <h2>S/. 409.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres12.webp" alt="items" />
            </div>
            <h1>Zapatilla Addidas ADIFOM white</h1>
            <h2>S/. 429.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres13.jpg" alt="items" />
            </div>
            <h1>Zapatillas Dragon blanco diseño</h1>
            <h2>S/. 427.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres14.webp" alt="items" />
            </div>
            <h1>Zapatillas Adidas OZWEEGO</h1>
            <h2>S/. 449.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres15.webp" alt="items" />
            </div>
            <h1>Adidas ADIFOM SLTN </h1>
            <h2>S/. 429.99</h2>
          </BlockItem>

          <BlockItem>
            <div>
              <img src="./images/mujeres16.webp" alt="items" />
            </div>
            <h1>Conjunto Addidas x2</h1>
            <h2>S/. 409.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres17.webp" alt="items" />
            </div>
            <h1>Zapatilla Addidas ADIFOM white</h1>
            <h2>S/. 429.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres18.webp" alt="items" />
            </div>
            <h1>Zapatillas Dragon blanco diseño</h1>
            <h2>S/. 427.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres19.webp" alt="items" />
            </div>
            <h1>Zapatillas Adidas OZWEEGO</h1>
            <h2>S/. 449.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/mujeres20.webp" alt="items" />
            </div>
            <h1>Adidas ADIFOM SLTN </h1>
            <h2>S/. 429.99</h2>
          </BlockItem>
        </WrapperContent>
      </HallOfFame>
    </Layout>
  )
}

export default Mujeres

const WrapperSearch = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  position: absolute;
  margin-top: 50px;
  margin-left: 50px;
`
const TxtBuscar = styled.h1`
  font-size: 15px;
  padding-top: 3px;
  margin-right: 10px;
`
const IconSearch = styled.img`
  position: relative;
  height: 18px;
  left: -345px;
  margin-top: 3px;
`
const Search = styled.input`
  height: 25px;
  width: 350px;
  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 3px;
  padding-left: 28px;
  &:focus{
    border: solid 1px #0DC143;
    transition: 0.6s;
  }
`
const HallOfFame = styled.div`
  width: 100%;
  /* background-color: peru; */
  height: auto;
  `
const Tittle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
  color: violet;
  font-style: oblique;
`
const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0 30px;
  height: auto;
  margin-top: 50px;
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
    margin-top: 20px;
    &:hover{
      color: peru;
    }
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
    padding-top: 10px;
    
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
    border: solid 2px pink;
  }
`