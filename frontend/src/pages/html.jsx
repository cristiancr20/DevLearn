import React from 'react'
import Editor from '../components/Editor';
import './html.css';

function HTML() {
  return (
    <>
      <div className="html">
        <h1>Todo sobre HTML</h1>
        <h2 className='titulo'>Etiquetas para titulos</h2>

        {/* <div className="botones">
          <button className='boton-link' >
            <Link to='/' className='boton-past'>
              Anterior
            </Link>
          </button>
          <button className='boton-link'>
            <Link to='/' className='boton-next'>
              Siguiente
            </Link>
          </button>
        </div> */}

        <div className="descripcion">
          <p>El H1 es una etiqueta que se utiliza para identificar los titulos principales de un contenido de una página web.</p>

          <p>El H2 es una etiqueta que se utiliza para identificar los subtitulos.</p>

          <p>Las etiquetas H3, H4, H5 y H6 representan los subitutlos que se encuentran presentes dentro de H2.</p>
        </div>

        <Editor contenido=' <h1>Es una etiqueta h1</h1>
        <h2>Es una etiqueta h2</h2>
        <h3>Es una etiqueta h3</h3>
        <h4>Es una etiqueta h4</h4>
        <h5>Es una etiqueta h5</h1>
        <h6>Es una etiqueta h6</h6> '
        ></Editor>
      </div>


    </>

  )
}

export default HTML;