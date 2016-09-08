import React, {Component, PropTypes} from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ListarRolesComponent extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		//Row select setting
		var selectRowProp = {
			mode: "checkbox", //checkbox for multi select, radio for single select.
			clickToSelect: true, //click row will trigger a selection on that row.
			bgColor: "rgb(238, 193, 213)" //selected row background color
		};

		const {tabla_datos} = this.props;

		// console.log('tabla datos: ', tabla_datos);

		return (
			<div>
				<section className="content-header">
					<h1>
						Dashboard
						<small>Roles</small>
					</h1>
					<ol className="breadcrumb">
						<li>
							<a href="#">
								<i className="fa fa-dashboard"></i>
								Dashboard</a>
						</li>
						<li>
							<a href="#">Rol</a>
						</li>
						<li className="active">Listar</li>
					</ol>
				</section>

				<section className="content">
					<div className="row">
						<div className="col-xs-12">
							<div className="box">
								<div className="box-header">
									<h3 className="box-title">Listado de roles</h3>

									<div className="box-body">
										<BootstrapTable data={tabla_datos} striped={true} hover={true} condensed={true} pagination={true} selectRow={selectRowProp} insertRow={false} deleteRow={false} columnFilter={true} searchPlaceholder="Buscar" search={true}>
											<TableHeaderColumn dataField="rol_idrol" isKey={true} dataAlign="right" dataSort={true}>ID</TableHeaderColumn>
											<TableHeaderColumn dataField="rol_nombrerol" dataSort={true}>Nombre</TableHeaderColumn>
										</BootstrapTable>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

ListarRolesComponent.propTypes = {
	tabla_datos: PropTypes.any.isRequired
};

export default ListarRolesComponent;
