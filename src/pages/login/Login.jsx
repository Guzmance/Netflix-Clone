import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.scss';
import { useForm } from '../../hook/useForm';

export default function Login() {
  const navigate = useNavigate();
  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: '',
  });

  const onLogin = (e) => {
    e.preventDefault();

    navigate('/netflix', {
      replace: true,
      state: {
        logged: true,
        email,
      },
    });

    onResetForm();
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={onLogin}>
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            placeholder="Email or phone number"
            autoComplete="off"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            placeholder="Password"
            autoComplete="off"
            required
          />
          <button type="submit" className="loginButton">
            Sign In
          </button>
          <span>
            New to Netflix?
            <NavLink to="/register">
              <b>Sign up now.</b>
            </NavLink>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
