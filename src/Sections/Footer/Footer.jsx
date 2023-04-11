import React from 'react';

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start position-absolute bottom-0 w-100">
            <div className="container py-4">
                <div className="text-center">
                    <h3 className="text-muted">Graphictoria</h3>
                    <div className=''>
                        &copy; {new Date().getFullYear()} Graphictoria
                        <br />
                        <a href="/terms" className="text-primary text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
