import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import './navbar.scss';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { state } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img
              className="logoNetflix"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <Link
            className="navbar-option"
            to="/home"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <span className="navbar-option">Homepage</span>
          </Link>
          <Link
            className="navbar-option"
            to="/movies/popular"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <span className="navbar-option">Popular</span>
          </Link>
          <Link
            className="navbar-option"
            to="/movies/top_rated"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <span className="navbar-option">Top Rated</span>
          </Link>
          <Link
            className="navbar-option"
            to="/movies/upcoming"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <span className="navbar-option">Upcoming</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span className="optionsItem" onClick={handleSignOut}>
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
