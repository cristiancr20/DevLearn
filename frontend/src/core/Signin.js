import React, { useState } from 'react';
import './Login.css'

import { signin, authenticate, isAuthenticated } from './apiCore';
import { Link } from 'react-router-dom'
import img_sesion from '../image/sigin.svg';

const Signin = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    authenticate(
                        data, () => {
                            setValues({
                                ...values,
                                redirectToReferrer: true
                            })
                        }
                    )
                }
            })
    }


    const signInForm = () => (
        <div className="log">
            <div className="img">
                    <img src={img_sesion} alt="Foto del inicio sesion de personas" />
            </div>

            <form className="sign-box">
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        value={password}
                    />
                </div>
                <div className="boton">
                    <button onClick={clickSubmit} className="s-btn btn btn-primary">
                        Log In
                    </button>
                </div>
            </form>
        </div>

    )

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Link to="/inicio" />
            } else {
                return <Link to="/" />
            }
        }
        if (isAuthenticated()) {
            return <Link to="/" />
        }
    }

    const showError = () => (
        <div className="alert alert-danget" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showLoading = () => (
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        )
    )

    return (
        <>

            <div className="mt-5">
                <h1 className="text-center mb-5">Log In</h1>
                {showError()}
                {showLoading()}
                {signInForm()}
                {redirectUser()}
            </div>
        </>
    )
}

export default Signin;