import React, { useState } from 'react';
import './register.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from '../../hook/useForm';

export default function Register() {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const { email, password, name, phone, countryn, onInputChange, onResetForm } =
    useForm({
      email: '',
      password: '',
      name: '',
      phone: '',
      countryn: '',
    });

  const countries = [
    'Argentina',
    'Brazil',
    'Canada',
    'Germany',
    'Spain',
    'El Salvador',
  ];

  const onRegister = (e) => {
    e.preventDefault();
    navigate('/', {
      replace: true,
      state: {
        logged: true,
        email,
      },
    });

    onResetForm();
  };
  const handleFinish = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;

    if (email && password && name && country && phone) {
      navigate('/');
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <NavLink to="/netflix">
            <button className="loginButton">Sign In</button>
          </NavLink>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={onRegister} className="input">
          <div className="inputRow">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter an email address"
              required
              value={email}
              onChange={onInputChange}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onInputChange}
              placeholder="Enter a Password"
              required
              autoComplete="off"
            />
          </div>
          <div className="inputRow">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your complete name"
              value={name}
              onChange={onInputChange}
              autoComplete="off"
              required
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={onInputChange}
              autoComplete="off"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="inputRow">
            <select
              name="countryn"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
            >
              <option value="">Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="registerButton">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
