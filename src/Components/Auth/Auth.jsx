import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootswatch/dist/lumen/bootstrap.min.css';

function Auth() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { username, email, password, confirmPassword } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="card-title mb-0">Register</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="form-group mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="username"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={(e) => onChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => onChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => onChange(e)}
                                        minLength="6"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => onChange(e)}
                                        minLength="6"
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-4">
                                    <button className="btn btn-success btn-block" type="submit">
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div className="mt-3">
                                Already have an account? <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
