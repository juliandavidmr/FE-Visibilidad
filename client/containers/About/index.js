
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IndexLink, NavLink } from 'react-router';
import AboutComponent from '../../components/About';

export default class About extends Component {
  render() {
    const { todos, actions, children } = this.props;
    
    return (
      <AboutComponent />
    );
  }
}