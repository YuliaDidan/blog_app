import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
   // Programmatic Redirect
  // setTimeout(()=> {
  //   props.history.push('/home');
  // }, 2000);
  return <div className="ui container">
            <div className="ui secondary pointing menu">
              <a className="ui item">Blog</a>
              <div className="right menu">                          
                <NavLink to="/" className="item">Home</NavLink>
                <NavLink to="/about" className="item">About</NavLink>
                <NavLink to="/contact" className="item">Contact</NavLink>
                <NavLink to="/portpholio" className="item">Portpholio</NavLink>
              </div>        
          </div>
        </div>   
}

export default withRouter(Navbar);