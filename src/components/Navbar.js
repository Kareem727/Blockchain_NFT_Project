import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'

class Navbar extends Component {

  render() {
    return (
      <nav style={{backgroundColor: '#5c1717bd', height:"100px", marginBottom: "50px",color: "white"}} className="navbar  fixed-top  flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
         
          target="_blank"
          rel="noopener noreferrer"
        >
            
        </a>
        <h1 style={{ position: 'absolute', top:'24px', left:'10%', fontFamily: '', fontSize:'29px' } } >Connect your Walet and upload Your Image</h1>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            {/* <small className="text-secondary">
              <small style={{color: 'black'}} id="account">{this.props.account}</small>
            </small> */}
            {/* { this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            } */}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;