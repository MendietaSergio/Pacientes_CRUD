import axios from 'axios';
import React from 'react'//llamando a la libreria react
//libreria
import { Apiurl } from '../services/apirest';
//template
import Header from '../template/Header'
import Footer from '../template/Footer'
//CSS
import '../assetss/css/Edit.css'
class Edit extends React.Component { //para heredar la clase de react.component

    state = {
        form: {
            "nombre": "",
            "direccion": "",
            "dni": "",
            "correo": "",
            "codigoPostal": "",
            "genero": "",
            "telefono": "",
            "fechaNacimiento": "",
            "token": "",
            "pacienteId":""
        },
        error: false,
        errorMsg: ""
    }
    //para actualizar los datos
    update = ()=>{
        //agrego a url la direccion de la API + 'paciente' que es donde se edita
        let url = Apiurl +'pacientes';
        console.log("Editado...");
        //envío por PUT la url, y los datos que tiene form
        axios.put(url,this.state.form)
        .then(response =>{
            console.log(response);
        })
    }
    delete = () =>{
        let url = Apiurl + "pacientes";
        let pacienteId = this.props.match.params.id;//obtengo el id que nos pasa por parámetros.
        let datos = {
            "token": localStorage.getItem("token"),
            "pacienteId": pacienteId 
        }
        console.log(datos);
        
        axios.delete(url,{headers:datos})
        .then(response =>{
            this.props.history.push("/Dashboard")
        })
        .catch(error =>{
            console.log(error);
        })
    }
    btnSubmit = e =>{
        e.preventDefault();
    }
    editInput = async e => {
        //await: 'espera', espera una accion.
        await this.setState({//asignar un valor a una variable
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value//al evento que targetea, le asiga el valor en su input
            }
        });
    }


    componentDidMount() {
        let pacienteId = this.props.match.params.id;//obtengo el id que nos pasa por parámetros.
        let url = Apiurl + "pacientes?id=" + pacienteId;
        axios.get(url)
            .then(response => {
                this.setState({
                    form: {
                        nombre: response.data[0].Nombre,
                        direccion: response.data[0].Direccion,
                        dni: response.data[0].DNI,
                        correo: response.data[0].Correo,
                        codigoPostal: response.data[0].CodigoPostal,
                        genero: response.data[0].Genero,
                        telefono: response.data[0].Telefono,
                        fechaNacimiento: response.data[0].FechaNacimiento,
                        token: localStorage.getItem("token"),
                        pacienteId: pacienteId
                    }
                })
            })
    }

    render() {//retorna todos los elementos html, al elemento principal
        return (//siempre retorna un solo elemento, por eso debe ir todo dentro de un div
            <React.Fragment>
                <Header />
                
                <div className="container">
                    <h3 className="m-5">Editar paciente</h3>
                
                    <form className="form-horizontal" onSubmit={this.btnSubmit}>
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="col-md-2 control-label">Nombre</label>
                                <div className="col-md-10">
                                    <input className="form-control" name="nombre" placeholder="Nombre" type="text" value={this.state.form.nombre}  onChange={this.editInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="col-md-2 control-label">Direccion</label>
                                <div className="col-md-10">
                                    <input className="form-control" name="direccion" placeholder="Direccion" type="text" value={this.state.form.direccion} onChange={this.editInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">DNI</label>
                                <div className="col-md-8">
                                    <input className="form-control" name="dni" placeholder="DNI" type="text" value={this.state.form.dni} onChange={this.editInput}/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Telefono</label>
                                <div className="col-md-8">
                                    <input className="form-control" name="telefono" placeholder="Telefono" type="text" value={this.state.form.telefono} onChange={this.editInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Código postal</label>
                                <div className="col-md-8">
                                    <input className="form-control" name="codigoPostal" placeholder="Código postal" type="text" value={this.state.form.codigoPostal} onChange={this.editInput}/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Fecha de nacimiento</label>
                                <div className="col-md-8">
                                    <input className="form-control" name="fechaNacimiento" placeholder="Fecha de nacimiento" type="text" value={this.state.form.fechaNacimiento} onChange={this.editInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Genero</label>
                                <div className="col-md-8">
                                    <input className="form-control" name="genero" placeholder="Genero" type="text" value={this.state.form.genero} onChange={this.editInput}/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="col-md-2 control-label">Correo</label>
                                <div className="col-md-8">
                                    <input className="form-control" name="correo" placeholder="Correo" type="text" value={this.state.form.correo} onChange={this.editInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="botones">
                            <button type="submit" className="btn btn-primary" onClick={()=>this.update()}>Editar</button>
                            <button type="submit" className="btn btn-danger" onClick={()=>this.delete()}>Eliminar</button>
                            <a className="btn btn-dark" href="/Dashboard">Salir</a>
                        </div>
                    </form>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Edit;