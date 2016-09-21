import React, {Component, PropTypes} from 'react';

class InsertarSubpermisoComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this._onChange = this._onChange.bind(this);
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
			onSelectPermiso, // Funcion que detecta los cambios en la seleccion de un permiso
			permisos_list, // Listado de permisos a mostrar en el dropdown
			onClick // Componente del boton registrar
		} = this.props;

		return (
			<div className="row">
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
										<input name="nombre" type="text" ref="nombre" placeholder="" onChange={this._onChange} />
									</div>
								</div>

								<div className="form-group">
									<label>Icono</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="icono" type="text" ref="icono" placeholder="" onChange={this._onChange}/>
									</div>
								</div>

								<div className="form-group">
									<label>Url</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input name="url" type="text" ref="url" placeholder="" onChange={this._onChange}/>
									</div>
								</div>

								<div className="form-group">
									<label for="sel1">Permiso: </label>
									<select className="dropdown-menu" id="sel1" name="id_permiso" onChange={this._onChange}>
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
										{
											onClick
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

InsertarSubpermisoComponent.propTypes = {
	onChange: PropTypes.func.isRequired,
	permisos_list: PropTypes.array.isRequired,
	onClick: PropTypes.any.isRequired
};

export default InsertarSubpermisoComponent;
