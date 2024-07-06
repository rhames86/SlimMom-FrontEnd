import React from 'react';
import './Sign-In.css';

const SignIn = () => {
  return (
    <div className="Register">
      <h3 className="formTitle">CREAR UNA CUENTA</h3>
      <form className="signInForm">
        <div className="signInLabel">
          <input
            className="signInInput"
            type="text"
            name="name"
            placeholder=""
            required
          />
          <span className="inputName">Nombre *</span>
        </div>
        <div className="signInLabel">
          <input
            className="signInInput"
            type="email"
            name="email"
            placeholder=""
            required
          />
          <span className="inputName">Email *</span>
        </div>
        <div className="signInLabel">
          <input
            className="signInInput"
            type="password"
            name="password"
            placeholder=""
            required
          />
          <span className="inputName">Contraseña *</span>
        </div>
        <div className="startButton">CREAR UNA CUENTA</div>
      </form>
    </div>
  );
};

export default SignIn;
