import React, { Component } from 'react';
import { UserSession } from 'blockstack';
import { showBlockstackConnect } from '@blockstack/connect';
import { appConfig, authOptions } from './constants';
import './Landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.userSession = new UserSession({ appConfig });
  }

  signIn(e) {
    e.preventDefault();
    showBlockstackConnect(authOptions);
  }

  render() {
    return (
      <div className="Landing">
        <div className="form-signin">
          <h1 className="h1 mb-3 font-weight-normal">Animal Kingdom</h1>
          <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn.bind(this)}>
            Sign in with Blockstack
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
