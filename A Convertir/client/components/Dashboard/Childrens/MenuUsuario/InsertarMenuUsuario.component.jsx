import React, {Component, PropTypes} from 'react';
import Formous from 'formous';

class ErrorText extends Component {
  render() {
    return (
      <div style={{ color: '#f00' }}>
        {this.props.errorText}
      </div>
    );
  }
}

class InsertarMenuUsuarioComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._onChange = this._onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formStatus, fields) {
    if (!formStatus.touched) {
      alert('Debe llenar el formulario');
      return;
    }

    if (!formStatus.valid) {
      alert('Please address the errors in the form.');
      return;
    }

    // All good! Do something with fields.email.value and fields.password.value    
    // console.log(formStatus, fields);

    this.props.onClickRegistrar();
  }


	/**
	 * Detecta los cambios en el formulario y los almacena en el state del container
	 * 
	 * @param {any} e
	 * 
	 * @memberOf InsertarMenuUsuarioComponent
	 */
  _onChange(e) {
    var state = {};
    state[e.target.name] = e.target.value;
    this.props.onChange(state); // Cambia el estado del container
  }

  render() {
    const {
      roles_list, // Listado de roles a mostrar en el dropdown
      subpermisos_list, // Listado de Subpermisos a mostrar en el dropdown 
      onClick // Componente del boton registrar
    } = this.props;

    const {
      fields: {
        id_rol,
        id_subpermiso
      },
      formSubmit
    } = this.props;

    return (
      <form className="row" onSubmit={ formSubmit(this.handleSubmit) }>
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Listado de Menus de usuario</h3>

              <div className="box-body">

                <div className="form-group">
                  <label>Rol: </label>
                  <select className="select" id="sel1" name="id_rol" onChange={this._onChange}>
                    {
                      roles_list.map((item, i) => {
                        return (
                          <option key={i} value={ item.ROL_IDROL }>
                            { item.ROL_NOMBREROL }
                          </option>
                        );
                      })
                    }
                  </select>
                </div>

                <div className="form-group">
                  <label>Subpermiso: </label>
                  <select className="select" id="sel2" name="id_subpermiso" onChange={this._onChange}>
                    {
                      subpermisos_list.map((item, i) => {
                        return (
                          <option key={i} value={ item.SPMS_IDSUBPERMISO }>
                            { item.SPMS_NOMBRESUBPERMISO }
                          </option>
                        );
                      })
                    }
                  </select>
                </div>


                <div className="form-group">
                  <div className="input-group">
                    <button type="submit" className="btn btn-primary">
                      Regitrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}


const formousOptions = {
  fields: {
    nombre: {
      tests: [
        {
          critical: true,
          failProps: {
            errorText: 'El nombre es requerido.'
          },
          test(value) {
            return value !== '';
          }
        }
      ]
    },

    url: {
      tests: [
        {
          critical: true,
          failProps: {
            errorText: 'Debe ingresar una url.'
          },
          test(value) {
            return value !== '';
          }
        }
      ]
    },
  }
};

InsertarMenuUsuarioComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  roles_list: PropTypes.array.isRequired,
  subpermisos_list: PropTypes.array.isRequired,
  onClickRegistrar: PropTypes.func.isRequired
};

export default Formous(formousOptions)(InsertarMenuUsuarioComponent);