import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import './navbar.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          {state?.logged ? (
            <span>Welcome: {state.email}</span>
          ) : (
            <span>Welcome</span>
          )}
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
              <span className="optionsItem">Settings</span>
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
