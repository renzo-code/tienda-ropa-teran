import React from "react"
import Layout from "../../layout"
import styled from "styled-components"

const Hombres = () =>{
  return(
    <Layout>
    <WrapperSearch>
      <TxtBuscar>Buscar:</TxtBuscar>
        <Search placeholder="Escribe algo..."/>
        <IconSearch src="./images/search.png"/>
    </WrapperSearch>

      <HallOfFame>
        <Tittle>LO ÚLTIMO EN MODA PARA HOMBRES</Tittle>
        <WrapperContent>
          <BlockItem>
            <div>
              <img src="./images/hombres.avif" alt="items"/>
            </div>
            <h1>Polo Negro Ola</h1>
            <h2>S/. 79.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres2.avif" alt="items"/>
            </div>
            <h1>Short Negro Ocacional</h1>
            <h2>S/. 224.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres3.avif" alt="items"/>
            </div>
            <h1>Jeans semi moderno</h1>
            <h2>S/. 219.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres4.avif" alt="items"/>
            </div>
            <h1>Short plomo Ocacional</h1>
            <h2>S/. 224.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres5.avif" alt="items"/>
            </div>
            <h1>Polo simple Champions </h1>
            <h2>S/. 99.90</h2>
          </BlockItem>

          <BlockItem>
            <div>
              <img src="./images/hombres6.avif" alt="items"/>
            </div>
            <h1>polo DSCS shoe</h1>
            <h2>S/. 209.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres7.avif" alt="items"/>
            </div>
            <h1>Polo simple Champions verde</h1>
            <h2>S/. 99.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres8.avif" alt="items"/>
            </div>
            <h1>Conjuto deportivo x3</h1>
            <h2>S/. 349.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres9.avif" alt="items"/>
            </div>
            <h1>Conjunto informal x2</h1>
            <h2>S/. 274.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres10.avif" alt="items"/>
            </div>
            <h1>Camisa hojeada</h1>
            <h2>S/. 159.90</h2>
          </BlockItem>

          <BlockItem>
            <div>
              <img src="./images/hombres11.avif" alt="items"/>
            </div>
            <h1>Conjunto Addidas x2</h1>
            <h2>S/. 409.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres12.jpg" alt="items"/>
            </div>
            <h1>Zapatilla Addidas ADIFOM white</h1>
            <h2>S/. 429.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres13.jpg" alt="items"/>
            </div>
            <h1>Zapatillas Dragon blanco diseño</h1>
            <h2>S/. 427.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres14.jpg" alt="items"/>
            </div>
            <h1>Zapatillas Adidas OZWEEGO</h1>
            <h2>S/. 449.90</h2>
          </BlockItem>
          <BlockItem>
            <div>
              <img src="./images/hombres15.jpg" alt="items"/>
            </div>
            <h1>Adidas ADIFOM SLTN </h1>
            <h2>S/. 429.99</h2>
          </BlockItem>
        </WrapperContent>
      </HallOfFame>
    </Layout>
  )
}

export default Hombres

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
  color: #923635;
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
      color: #3AA2CB;
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
    border: solid 2px #3AA2CB;
  }
`