import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// we use connect to give certain components the ability of call action creators.
import { connect } from 'react-redux';
import * as actions from '../actions';

//const Header = () => <h1>Header</h1>;
import Header from '../components/Header';
import Landing from '../components/Landing';
const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>Survey New</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Landing} />
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
