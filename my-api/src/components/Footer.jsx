import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-white">Link 1</a></li>
                            <li><a href="#!" className="text-white">Link 2</a></li>
                            <li><a href="#!" className="text-white">Link 3</a></li>
                            <li><a href="#!" className="text-white">Link 4</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-white">Link 1</a></li>
                            <li><a href="#!" className="text-white">Link 2</a></li>
                            <li><a href="#!" className="text-white">Link 3</a></li>
                            <li><a href="#!" className="text-white">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3">
                © {new Date().getFullYear()} Copyright:
                <a className="text-white" href="https://yourwebsite.com/"> YourWebsite.com</a>
            </div>
        </footer>
    );
}

export default Footer;


