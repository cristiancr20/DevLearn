import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import img_registro from '../image/registro.svg';


/* import "./Signup.css" */
import { signup } from './apiCore';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const { name, email, password, success, error } = values

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ name, email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    })
  }

  const signUpForm = () => (
    <div className="log">
      <div className="img">
        <img src={img_registro} alt="Foto del registro de personas" />
      </div>
      <form className="sign-box">
        <div className='form-group'>
          <label className='text-muted'>Name</label>
          <input
            onChange={handleChange('name')}
            value={name}
            type='text'
            className='form-control' />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Email</label>
          <input
            onChange={handleChange('email')}
            type='email'
            value={email}
            className='form-control' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            onChange={handleChange('password')}
            value={password}
            type='password'
            className='form-control' />
        </div>
        <div className="boton">
          <button onClick={clickSubmit} className='btn btn-primary'>
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-info' style={{ display: success ? '' : 'none' }}>  New Account Successfully Created You can now
      <Link to='/signin'>Iniciar Sesion</Link>
    </div>
  )

  return (
    <>

      <div className="mt-5">
        <h1 className="text-center mb-5">Registrarse</h1>
        {showError()}
        {showSuccess()}
        {signUpForm()}
      </div>
    </>
  )
}

export default Signup;