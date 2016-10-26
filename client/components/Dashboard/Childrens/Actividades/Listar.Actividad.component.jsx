import React, { Component, PropTypes } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ListarActividadesComponent extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    //Row select setting
    const selectRowProp = {
      mode: "checkbox", //checkbox for multi select, radio for single select.
      clickToSelect: true, //click row will trigger a selection on that row.
      bgColor: "rgb(238, 193, 213)" //selected row background color
    };

    const { tabla_datos } = this.props;

    // console.log('tabla datos: ', tabla_datos);

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Listado de Actividades</h3>

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
                    dataField="ACTV_DESCRIPCION"
                    isKey={true}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="ACTV_FECHAINICIO"
                    isKey={false}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="ACTV_FECHAFIN"
                    isKey={false}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="ACTV_LUGAR"
                    isKey={false}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="ACTV_ESTADO"
                    isKey={false}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="TACTV_IDACTIVIDAD"
                    isKey={false}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="EVTO_IDEVENTO"
                    isKey={false}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="ACTV_RUTAADJUNTO"
                    isKey={false}
                    dataAlign="right"
                    dataSort={true}>
                    ID
                  </TableHeaderColumn>

                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListarActividadesComponent.propTypes = {
  tabla_datos: PropTypes.array.isRequired
};

export default ListarActividadesComponent;