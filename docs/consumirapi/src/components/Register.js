import React from 'react'//llamando a la libreria react
//CSS
import '../assetss/css/Login.css'
import '../assetss/css/footer.css'

//IMG
import Logo from '../assetss/img/favicon.ico'
//SERVICIOS
import { Apiurl } from '../services/apirest';
//LIBRERIAS
import axios from 'axios';
//TEMPLATE
import Header from '../template/Header'
import Footer from '../template/Footer'

class Register extends React.Component { //para heredar la clase de react.component
    
    constructor(props){
        super(props)
    }
    state = {
        form: {
            "userName": "",
            "password": "",
        },
        error: false,//cuando sea falso
        errorMsg: "Error al intentar logear"
    }
    //metodo
    btnSubmit = e => {
        e.preventDefault();
    }
    ingresoInput = async e => {
        console.log(e.target.value);
        //await: 'espera', espera una accion.
        await this.setState({//asignar un valor a una variable
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value//al evento que targetea, le asiga el valor en su input
            }
        });
    }
    btnRedireccion =()=>{

        let url = "http://104.236.219.24:4000/#/auth";
        console.log(this.state.form);
        axios.post(url, this.state.form)
        .then(response =>{
                console.log(response.config.data);
                this.props.history.push("/")
              
        })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {//retorna todos los elementos html, al elemento principal
        return (//siempre retorna un solo elemento, por eso debe ir todo dentro de un div
            <React.Fragment>
                <Header/>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={Logo} id="icon" alt="User Icon" />
                        </div>

                        <form onSubmit={this.btnSubmit}>
                            <input type="text" className="fadeIn second" name="userName" placeholder="userName"  onChange={this.ingresoInput}/>
                            <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.ingresoInput}/>
                            {/* <input type="password" className="fadeIn third" name="passwords" placeholder=" repeat password" onChange={this.ingresoInput}/> */}
                            <input type="submit" className="fadeIn fourth" value="registrarse" onClick={this.btnRedireccion}/>
                        </form>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Register;