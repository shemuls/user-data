import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small text-light pt-4 bg-primary">
            <div className="bg-primary">
                <ul className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                    <h5 className="mb-1">Register for free</h5>
                </li>
                <li className="list-inline-item ml-4">
                    <a href="#!" className="btn btn-outline-light btn-rounded">Sign up!</a>
                </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3 bg-dark">© 2020 Design by 
                <a href="https://facebook.com/wpshemul"> Shemul Islam</a>
            </div>

            </footer>
        </div>
    );
};

export default Footer;