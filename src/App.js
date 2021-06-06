import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'//importo desde react-router-dom y cambio BrowserRouter por Router
import React from 'react';
import Dashboard from './components/Dashboard';
import New from './components/New';
import Edit from './components/Edit'
import Register from './components/Register'

// props : pasar propiedades entre componentes
function App() {
  return (
    <React.Fragment>{/*etiqueda de react*/}
      <Router>
        <Switch>
          {/* //Rutas */}
          <Route path="/" exact render={props => (<Login {...props} />)}>{/*path="/"==> direccion origen exact=>>> para que coincidan exactamente.*/}</Route>          
          <Route path="/Dashboard" exact render={props => (<Dashboard {...props} />)}>{/*path="/"==> direccion origen exact=>>> para que coincidan exactamente.*/}</Route>
          <Route path="/New" exact render={props => (<New {...props} />)}>{/*path="/"==> direccion origen exact=>>> para que coincidan exactamente.*/}</Route>
          <Route path="/Edit/:id" exact render={props => (<Edit {...props} />)}>{/*path="/"==> direccion origen exact=>>> para que coincidan exactamente.*/}</Route>         
          <Route path="/Register" exact render={props =>(<Register {...props}/>)}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
