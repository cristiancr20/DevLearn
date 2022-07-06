import React from 'react'
import img_home from '../image/profesor.svg';
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_description">
            <h1 className='title'>DevLearn</h1>
            <p>Bienvenido a DevLearn, tu sitio ideal para aprender de manera facil y sencilla.</p>
            <p>El conocimiento es poder, así que conocenos.</p>
            <div className="botones">
              <Link to='/signin' className='boton'>
                <button>Iniciar Sesion</button>
              </Link>
              <Link to='/signup' className='boton'>
                <button>Registrarse</button>
              </Link>
            </div>
        </div>

        <div className="img">
          <img src={img_home} alt="Imagen de Home" />
        </div>
      </div>
    </>
  )
}

export default Home