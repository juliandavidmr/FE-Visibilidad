import React, { Component, PropTypes } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ListarProgramaComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    //Row select setting
    const selectRowProp = {
      mode: "checkbox", //checkbox for multi select, radio for single select.
      clickToSelect: true, //click row will trigger a selection on that row.
      bgColor: "rgb(238, 193, 213)", //selected row background color
      onSelect: () => {
        console.log('Click');
      }
    };

    const { tabla_datos } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Listado de programas</h3>

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
                    hidden={false}
                    dataSort={true}>ID</TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="ROL_NOMBREROL"
                    dataSort={true}>Nombre</TableHeaderColumn>

                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}