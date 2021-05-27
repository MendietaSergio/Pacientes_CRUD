import React from 'react'//llamando a la libreria react

class Edit extends React.Component{ //para heredar la clase de react.component
    render(){//retorna todos los elementos html, al elemento principal
        return(//siempre retorna un solo elemento, por eso debe ir todo dentro de un div
            <div> 
                Hola desde el Edit
            </div>
        );
    }
}
export default Edit;