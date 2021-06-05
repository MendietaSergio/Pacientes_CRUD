import React from 'react';
import '../assetss/css/footer.css'
class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid page-footer font-small blue pt-4">

                <div className="container text-center text-md-left">

                    <div className="row">

                        <div className="col-md-12 mt-md-0 mt-3">

                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>

                        </div>

                    </div>
                    <div className="footer-copyright text-center py-3">
                        <p>© 2020 Copyright:</p>
                        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;