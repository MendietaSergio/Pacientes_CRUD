import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="container-fluid navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/Dashboard">Lista de Pacientes</a>
                </div>
            </nav>
        )
    }
}
export default Header;