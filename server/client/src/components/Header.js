import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * we use Link tag to route inside our application
 * we use a tag to redirect to other domains or tottaly different
 * HTML pages.
 */
import { Link } from 'react-router-dom';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <div class='lds-facebook'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        );
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div class='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
          >
            Emaily
          </Link>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

/* function mapStateToProps (state){
  return {
    auth: state.auth
  }
} */
// we use es6 to make it better
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
