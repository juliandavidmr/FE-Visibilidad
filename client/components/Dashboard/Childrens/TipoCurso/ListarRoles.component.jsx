import React, {Component, PropTypes} from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ListarTipoCursoComponent extends Component {
	constructor(props) {
		super(props);

		this.handleClickRow = this.handleClickRow.bind(this);
	}

	handleClickRow(row) {
		console.log('Click en row ', row);
	}

	render() {
		//Row select setting
		const selectRowProp = {
			mode: "checkbox", //checkbox for multi select, radio for single select.
			clickToSelect: true, //click row will trigger a selection on that row.
			bgColor: "rgb(238, 193, 213)" //selected row background color
		};

		const {tabla_datos} = this.props;

		// console.log('tabla datos: ', tabla_datos);

		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="box">
						<div className="box-header">
							<h3 className="box-title">Listado de TipoCurso</h3>

							<div className="box-body">
								<BootstrapTable data={tabla_datos}
									striped={true}
									hover={true}
									condensed={true}
									pagination={true}
									selectRow={selectRowProp}
									insertRow={false}
									deleteRow={false}
									columnFilter={true}
									searchPlaceholder="Buscar"
									search={true}>

									<TableHeaderColumn
										dataField="ROL_IDROL"
										isKey={true}
										dataAlign="right"
										dataSort={true}>ID</TableHeaderColumn>

									<TableHeaderColumn dataField="ROL_NOMBREROL" dataSort={true}>Nombre</TableHeaderColumn>

								</BootstrapTable>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ListarTipoCursoComponent.propTypes = {
	tabla_datos: PropTypes.any.isRequired
};

export default ListarTipoCursoComponent;
