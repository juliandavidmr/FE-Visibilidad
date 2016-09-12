import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IndexComponent from '../../components/Index';
import * as SemilleroActions from '../../actions/semilleros';
import './style.css';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list_semilleros: []
    };
  }


  componentWillMount() {
    const { actions } = this.props;
    
    actions.listar().then(() => {
      var l = this.props.semilleros.semillero.toJS();

      if (l.data_list_semilleros) {
        console.log('fetchSemilleros=>', l.data_list_semilleros);

        this.setState({
          list_semilleros: this.props.semilleros.semillero.toJS()
        });
      }
    });
  }

  render() {
    return <IndexComponent />;
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
