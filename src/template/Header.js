import React from 'react';
import Router from 'next/router'

class Header extends React.Component {
    render() {
        return (
            <nav className="container-fluid navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-brand" href="Pacientes_CRUD/#/Dashboard">Lista de Pacientes</div>
                    
                </div>
            </nav>
        )
    }
}
export default Header;