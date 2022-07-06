import React, { useRef } from 'react'
import './Editor.css';

import MonacoEditor from '@monaco-editor/react';

function Editor(props) {
    /* const [contentMarkdown, setContentMarkadown] = useState({contenido}); */
    const editorRef = useRef(null);

    const handleEditor = (editor, monaco) => {
        editorRef.current = editor;
    }

    const handleSave = () => {
        console.log(editorRef.current.getValue());
        const editar = document.getElementById("resultado");
        editar.srcdoc = editorRef.current.getValue();
    }

    return (
        <>
            <div className="Editor-contenido">
                <div className="boton">
                    <button onClick={handleSave}>Ejecutar</button>
                </div>

                <div className="editor">

                    <MonacoEditor
                        id='texto'
                        height='200px'
                        theme='vs-dark'
                        defaultLanguage='html'
                        value={props.contenido}
                        /* onChange={(value) => setContentMarkadown(value)} */
                        onMount={handleEditor} />

                    <iframe className='resultadoEditor' id="resultado" srcdoc='Resultado Final' title='Result'
                    height="200" width="610" 
                    // eslint-disable-next-line react/style-prop-object
                    ></iframe>

                </div>
            </div>

        </>
    )
}

export default Editor