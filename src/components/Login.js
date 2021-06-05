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

class Login extends React.Component { //para heredar la clase de react.component
    //para que podamos usar props en todas las clases
    constructor(props){
        super(props)
    }

    state = {
        form: {
            "usuario": "",
            "password": "",
        },
        error: false,//cuando sea falso
        errorMsg: "Error al intentar logear"
    }
    //metodo
    btnSubmit = e => {
        e.preventDefault();
    }
    //async => para que la pagina no recargue, lo hace de inmediato.
    ingresoInput = async e => {
        //await: 'espera', espera una accion.
        await this.setState({//asignar un valor a una variable
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value//al evento que targetea, le asiga el valor en su input
            }
        });
    }
    btnRedireccion = () => {
        let url = Apiurl + "auth";
        axios.post(url, this.state.form)//retorna una promesa
            .then(response => {
                if(response.data.status === "ok"){
                    localStorage.setItem("token",response.data.result.token);
                    this.props.history.push("/Dashboard")
                }else{
                    //setState => cambia o setea los valores del state, de las variables asignadas.
                    this.setState({
                        error:true,
                        errorMsg: response.data.result.error_msg
                    })
                };
            })
            //en caso de que pase algo con la API, aparece este error
            .catch(error =>{
                console.log(error);
                this.setState({
                    error: true,
                    errorMsg: "Error al conectar con la API"
                })
            })
    }

    render() {//retorna todos los elementos html, al elemento principal
        return (//siempre retorna un solo elemento, por eso debe ir todo dentro de un div
            <React.Fragment>
                <Header></Header>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={Logo} id="icon" alt="User Icon" />
                        </div>

                        <form onSubmit={this.btnSubmit}>
                            <input type="text" className="fadeIn second" name="usuario" placeholder="login" onChange={this.ingresoInput} />
                            <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.ingresoInput} />
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.btnRedireccion} />
                            <a type="button" href="/Register">Registrarse</a>
                        </form>
                        {//renderizado tradicional
                        this.state.error === true && //, si es igual a true => hace tal cosa
                            <div className="alert alert-danger" role="alert">
                                {this.state.errorMsg}
                        </div>
                        }


                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
export default Login;