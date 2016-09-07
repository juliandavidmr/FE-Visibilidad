import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/Index/Header/Header.component.jsx';
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

        <HeaderComponent socials={[
          {
            class: 'fa fa-facebook',
            link: '/una direccion de facebook'
          }, {
            class: 'fa fa-twitter',
            link: '/una direccion de twitter'
          }, {
            class: 'fa fa-google-plus',
            link: '/una direccion de google plus'
          }, {
            class: 'fa fa-linkedin',
            link: '/una direccion de linkedin'
          }, {
            class: 'fa fa-youtube',
            link: '/una direccion de youtube'
          }
        ]}/>

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
