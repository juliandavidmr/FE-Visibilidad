import React, {Component, PropTypes} from 'react';

class InsertarTipoCursoComponent extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChangeText(e);
	}

	render() {
		const { onClickRegistrar } = this.props;

		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="box">
						<div className="box-header">
							<h3 className="box-title">Listado de tipos de cursos</h3>

							<div className="box-body">
								<div className="form-group">
									<label>Nombre del tipo de curso</label>
									<div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-laptop"></i>
										</div>
										<input type="text" name="" placeholder="" onChange={this.handleChange}/>
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

InsertarTipoCursoComponent.propTypes = {
	onChangeText: PropTypes.func.isRequired
};

export default InsertarTipoCursoComponent;
