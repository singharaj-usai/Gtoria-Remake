import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start position-absolute bottom-0 w-100">
            <div className="container py-3">
                <div className="text-center">
                    <h3 className="text-muted">Graphictoria</h3>
                    <div className=''>
                        &copy; {new Date().getFullYear()} Graphictoria
                        <br />
                        <Link to="/terms" className="text-primary text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
