import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MenuComponent from '../../components/Index/Menu/Menu.component.jsx';
import * as SemilleroActions from '../../actions/semilleros';

class Index extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <a className="scrollToTop" href="#">
          <i className="fa fa-angle-up"></i>
        </a>

        <MenuComponent titulo="Visibilidad" />

        {
          this.props.children
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("mapStateToProps: ", state);
  return {
    semilleros: state.semilleros
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SemilleroActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
