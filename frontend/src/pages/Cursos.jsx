/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios'
/* import { BsCardImage, BsFillPencilFill, BsFillTrashFill, BsArrowCounterclockwise, BsSearch } from "react-icons/bs"; */
import Navbar from '../components/Navbar';
import './Cursos.css'
import {Link} from 'react-router-dom'

export default class Cursos extends React.Component {

  state = {
    productos: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/service/auth/products')
      .then(res => {
        const productos = res.data;
        this.setState({ productos });
      })
  }


  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="cursos">

          {/*  <div style={{
            width: "100%",
            margin: "auto",
            alignItems: "center",
            justifyContent: "space-around"
          }}>

            <div style={{
              display: "flex"

            }}>
              <div style={{
                width: "100%",
                height: "50px"
              }}>
                <div style={{
                  margin: "10px 10px"
                }}>
                  <input placeholder="Buscar" style={{
                    boxShadow: "none",
                    border: "none",
                    borderBottom: "2px solid gray",
                    inline: "none"
                  }} />

                  <button style={{
                    border: "none",
                    backgroundColor: "transparent",

                  }}><BsSearch style={{
                    fontFamily: "blod",
                    fontSize: "20px"
                  }} /> </button>
                </div>

              </div>


              <div style={{
                margin: "10px 10px 0 auto"
              }}>
                <button onClick={this.refreshPage} style={{
                  border: "none",
                  backgroundColor: "transparent",


                }}><BsArrowCounterclockwise style={{
                  fontFamily: "blod",
                  fontSize: "25px"
                }} /> </button>
              </div>

            </div>

          </div>
 */}

          <div className="cursos-container">
            {this.state.productos.map(datos => {
              return (
                <div key={datos} className="card">
                  <Link to={datos.name}  className="url">
                    <h2>{datos.name}</h2>
                    <p>{datos.description}</p>

                    <img src={datos.photo} alt="Imagen" ></img>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }

}