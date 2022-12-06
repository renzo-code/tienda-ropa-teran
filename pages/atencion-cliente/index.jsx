import React from "react"
import Layout from "../../layout"
import styled from "styled-components"

const AtencionCliente = () =>{
  return(
    <>
      <Layout>
        <Title>
          INTERACTÚA CON NOSOTROS
        </Title>
        <Bajada>
          Si tienes algún inconveniente con tu compra, quieres que tu marca trabaje con nosotros o 
          hacernos llegar algún reclamo u objeción, llena este formulario y comunicates con nosotros.
        </Bajada>
        <WrapperForm>
          <DataInput placeholder="Nombres y Apellidos" />
          <DataInput placeholder="Correo electrónico" />
          <DataInput placeholder="Número de contacto" />
          <DataInput placeholder="Motivo" />
          <h2 className="details">Inserte una imagen o archivo (Opcional)</h2>
          <DataInput type="file" />
          <textarea className="txtAreaDescription" placeholder="Detalla tu mensaje..." />
          <div className="wrapper-btn">
            <button className="btn-send">Enviar</button>
          </div>
        </WrapperForm>
      </Layout>
      <style jsx="true">{`
        .details{
          font-size: 15px;
          font-weight: 500;
          padding-top: 20px;
        }
        .txtAreaDescription{
          width: 100%;
          min-height: 150px;
          margin: 0 auto;
          border-radius: 5px;
          outline: none;
          border: none;
          padding: 10px;
          font-size: 15px;
        }
        .txtAreaDescription:focus{
          border: solid 2px #00B33D;
          transition: 0.5s;
        }
        .wrapper-btn{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 0 auto;
        }
        .btn-send{
          width: 70px;
          height: 30px;
          font-size: 13px;
          margin-top: 20px;
          cursor: pointer;
          outline: none;
        } 
        .btn-send:hover{
          background-color: #00B33D;
          color: white;
          transition: 0.7s;
          opacity: 0.8;
          border: solid 1px black;
        }
      `}</style>
    </>
  )
}

export default AtencionCliente

const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  color: #66BD57;
  padding-top: 20px;
`
const Bajada = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 22px;
`
const WrapperForm = styled.div`
  width: 50%;
  margin: 0 auto;
`
const DataInput = styled.input`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  outline: none;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  padding-left: 10px;
  margin-top: 20px;

  &:focus {
    border: solid 2px #00B33D;
    transition: 0.5s;
  }
`