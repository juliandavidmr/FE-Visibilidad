import React, {Component, PropTypes} from 'react';

class InsertarSubpermisoComponent extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { onClickRegistrar, onChangeTextIcono, onChangeTextNombre, subpermisos_list } = this.props;

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
						
								<div className="dropdown">
									<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
										Permisos
										<span className="caret"></span>
									</button>
									<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
										{

										}
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li role="separator" className="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
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
	onChangeTextNombre: PropTypes.func.isRequired,
	onChangeTextIcono: PropTypes.func.isRequired,
	subpermisos_list: PropTypes.array.isRequired
};

export default InsertarSubpermisoComponent;
