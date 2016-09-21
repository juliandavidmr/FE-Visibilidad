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

class InsertarSubpermisoComponent extends Component {
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
	 * @memberOf InsertarSubpermisoComponent
	 */
	_onChange(e) {
    var state = {};
    state[e.target.name] = e.target.value;
    this.props.onChange(state); // Cambia el estado del container
  }

	render() {
		const {
			permisos_list, // Listado de permisos a mostrar en el dropdown
			onClick // Componente del boton registrar
		} = this.props;

		const {
      fields: {
				nombre,
				icono,
				url,
				id_permiso
			},
      formSubmit,
    } = this.props;


		return (
			<form className="row" onSubmit={formSubmit(this.handleSubmit) }>
				<div className="col-xs-12">
					<div className="box">
						<div className="box-header">
							<h3 className="box-title">Listado de Subpermisos</h3>

							<div className="box-body">
								<div className="form-group">
									<label>Nombre del Subpermiso</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="nombre" type="text" ref="nombre" placeholder="" { ...nombre.events } onChange={this._onChange} />
									</div>
									<ErrorText { ...nombre.failProps } />
								</div>

								<div className="form-group">
									<label>Icono</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="icono" type="text" ref="icono" placeholder="" { ...icono.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...icono.failProps } />
								</div>

								<div className="form-group">
									<label>Url</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="url" type="text" ref="url" placeholder="" { ...url.events } onChange={this._onChange}/>
									</div>
									<ErrorText { ...url.failProps } />
								</div>

								<div className="form-group">
									<label>Permiso: </label>
									<select className="select" id="sel1" name="id_permiso" onChange={this._onChange}>
										{
											permisos_list.map((item, i) => {
												return (
													<option key={i} value={ item.PRMS_IDPERMISO }>
														{ item.PRMS_NOMBREPERMISO }
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

    icono: {
      tests: [
        {
          critical: true,
          failProps: {
            errorText: 'El icono no puede ser un numero.'
          },
          test(value) {

            return !(/^\d*$/.test(value));
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

InsertarSubpermisoComponent.propTypes = {
	onChange: PropTypes.func.isRequired,
	permisos_list: PropTypes.array.isRequired,
	onClickRegistrar: PropTypes.func.isRequired
};

export default Formous(formousOptions)(InsertarSubpermisoComponent);