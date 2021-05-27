import React from 'react'//llamando a la libreria react
import Header from '../template/Header'
import { Apiurl } from '../services/apirest'
import axios from 'axios'
import Footer from '../template/Footer'

class Dashboard extends React.Component { //para heredar la clase de react.component

    state = {
        pacientes: []
    }
    //funcion para mostrar id seleccionado
    clickPaciente(id){
        this.props.history.push("/edit/"+id);
    }
    //para mostrar todo lo que esta cargado
    componentDidMount() {
        let url = Apiurl + "pacientes?page=1"
        axios.get(url)
            .then(response => {

                this.setState({
                    pacientes: response.data
                })
            })
    }
    render() {//retorna todos los elementos html, al elemento principal
        return (//siempre retorna un solo elemento, por eso debe ir todo dentro de un div
            <React.Fragment>
                <Header></Header>
                <div className="container ">
                 <br></br>
                 <br></br>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pacientes.map((value, index) => {
                                return (
                                    // cuando haga click en la fila }, muestra el id del paciente.
                                    <tr key={index} onClick={()=>this.clickPaciente(value.PacienteId)}>
                                        <td>{value.PacienteId}</td>
                                        <td>{value.DNI}</td>
                                        <td>{value.Nombre}</td>
                                        <td>{value.Telefono}</td>
                                        <td>{value.Correo}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
export default Dashboard;