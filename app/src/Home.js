import React, { Component } from 'react';
import logo from './react.svg';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  static async getInitialProps() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return { whatever: 'stuff' };
  }

  render() {
    this.props.prefetch('/about');
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to After.js</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> or{' '}
          <code>src/About.js</code>and save to reload.
        </p>
        <div>
          <span> Props: </span>
          {/* <code>{JSON.stringify(this.props, null, 2)}</code> */}
        </div>
        <Link to="/about">About -></Link>
      </div>
    );
  }
}

export default Home;
