import React, {Component, PropTypes} from 'react';

class ListarRolesComponent extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const { tabla } = this.props;

    return (
      <div className="content-wrapper">
        <div className="container">
          <h2>Bordered Table List roles</h2>
          <p>The.table-bordered className adds borders to a table: </p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john @example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary @example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july @example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ListarRolesComponent.propTypes = {
  tabla: PropTypes.array.isRequired
};

export default ListarRolesComponent;