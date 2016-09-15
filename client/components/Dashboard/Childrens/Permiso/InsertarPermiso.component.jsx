import React, {Component, PropTypes} from 'react';

class InsertarPermisoComponent extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { onClickRegistrar, onChangeTextIcono, onChangeTextNombre } = this.props;

		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="box">
						<div className="box-header">
							<h3 className="box-title">Listado de permisos</h3>

							<div className="box-body">
								<div className="form-group">
									<label>Nombre del permiso</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input type="text" name="" placeholder="" onChange={onChangeTextNombre}/>
									</div>
								</div>

								<div className="form-group">
									<label>Icono</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input type="text" name="" placeholder="" onChange={onChangeTextIcono}/>
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

InsertarPermisoComponent.propTypes = {
	onChangeTextNombre: PropTypes.func.isRequired,
	onChangeTextIcono: PropTypes.func.isRequired
};

export default InsertarPermisoComponent;
