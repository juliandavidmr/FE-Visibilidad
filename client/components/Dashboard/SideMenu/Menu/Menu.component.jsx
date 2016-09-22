/**
 *
 */

import React, {Component, PropTypes} from 'react';

import ItemMenu from '../ItemMenu/ItemMenu.component.jsx';

class Menu extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <ul className="sidebar-menu">
          <li className="header">MAIN NAVIGATION</li>

          <ItemMenu title="Dashboard" tree={
            [
              {
                text: 'Menu 1',
                href: 'una url 1',
                icon: 'fa fa-circle-o',
                active: 'active'
              }, {
                text: 'Menu 2',
                href: 'una url 2',
                icon: 'fa fa-circle-o',
                active: 'active'
              }
            ]
          } />

          <ItemMenu title="Rol" tree={
            [
              {
                text: 'Ver listado',
                href: '/dashboard/rol/listar',
                icon: 'fa fa-circle-o'
              }, {
                text: 'Registrar',
                href: '/dashboard/rol/insertar',
                icon: 'fa fa-circle-o'
              }
            ]
          } />

          <ItemMenu title="Nivel" tree={
            [
              {
                text: 'Ver niveles',
                href: '/dashboard/nivel/listar',
                icon: 'fa fa-circle-o'
              }, {
                text: 'Registrar',
                href: '/dashboard/nivel/insertar',
                icon: 'fa fa-circle-o'
              }
            ]
          } />

          <ItemMenu title="Tipos de curso" tree={
            [
              {
                text: 'Listar tipos de curso',
                href: '/dashboard/tipocurso/listar',
                icon: 'fa fa-circle-o'
              }, {
                text: 'Registrar',
                href: '/dashboard/tipocurso/insertar',
                icon: 'fa fa-circle-o'
              }
            ]
          } />

          <ItemMenu title="Actividades" tree={
            [
              {
                text: 'Listar tipos de actividades',
                href: '/dashboard/actividad/insertartipo',
                icon: 'fa fa-circle-o'
              }, {
                text: 'Registrar tipo de actividad',
                href: '/dashboard/actividad/listartipo',
                icon: 'fa fa-circle-o'
              }
            ]
          } />

          <ItemMenu title="Permisos" icon="fa fa-files-o" tree={
            [
              {
                text: 'Listar permisos',
                href: '/dashboard/permiso/listar',
                icon: 'fa fa-circle-o'
              }, {
                text: 'Registrar permiso',
                href: '/dashboard/permiso/insertar',
                icon: 'fa fa-circle-o'
              }, {
                text: 'Listar subpermisos',
                href: '/dashboard/subpermiso/listar',
                icon: 'fa fa-circle-o'
              }, {
                text: 'Registrar subpermisos',
                href: '/dashboard/subpermiso/insertar',
                icon: 'fa fa-circle-o'
              }
            ]
          } />


          <ItemMenu title="Layout Options" icon="fa fa-files-o" tree={
            [
              {
                text: 'Top Navigation',
                href: 'una url 1',
                icon: 'fa fa-circle-o',
                active: 'active'
              }, {
                text: 'Menu 2',
                href: 'una url 2',
                icon: 'fa fa-circle-o',
                active: 'Boxed'
              }, {
                text: 'Menu 3',
                href: 'una url 2',
                icon: 'fa fa-circle-o',
                active: 'Boxed'
              }, {
                text: 'Menu 4',
                href: 'una url 2',
                icon: 'fa fa-circle-o',
                active: 'Boxed'
              }
            ]
          } span={{ text: '4', className: 'label label-primary pull-right' }} />

          <ItemMenu title="Widgets" icon="fa fa-th" span={{ text: 'new', className: 'label pull-right bg-green' }} />

          <li className="treeview">
            <a href="#">
              <i className="fa fa-pie-chart"></i>
              <span>Charts</span>
              <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="pages/charts/chartjs.html">
                  <i className="fa fa-circle-o"></i>
                  ChartJS</a>
              </li>
              <li>
                <a href="pages/charts/morris.html">
                  <i className="fa fa-circle-o"></i>
                  Morris</a>
              </li>
              <li>
                <a href="pages/charts/flot.html">
                  <i className="fa fa-circle-o"></i>
                  Flot</a>
              </li>
              <li>
                <a href="pages/charts/inline.html">
                  <i className="fa fa-circle-o"></i>
                  Inline charts</a>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-laptop"></i>
              <span>UI Elements</span>
              <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="pages/UI/general.html">
                  <i className="fa fa-circle-o"></i>
                  General</a>
              </li>
              <li>
                <a href="pages/UI/icons.html">
                  <i className="fa fa-circle-o"></i>
                  Icons</a>
              </li>
              <li>
                <a href="pages/UI/buttons.html">
                  <i className="fa fa-circle-o"></i>
                  Buttons</a>
              </li>
              <li>
                <a href="pages/UI/sliders.html">
                  <i className="fa fa-circle-o"></i>
                  Sliders</a>
              </li>
              <li>
                <a href="pages/UI/timeline.html">
                  <i className="fa fa-circle-o"></i>
                  Timeline</a>
              </li>
              <li>
                <a href="pages/UI/modals.html">
                  <i className="fa fa-circle-o"></i>
                  Modals</a>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-edit"></i>
              <span>Forms</span>
              <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="pages/forms/general.html">
                  <i className="fa fa-circle-o"></i>
                  General Elements</a>
              </li>
              <li>
                <a href="pages/forms/advanced.html">
                  <i className="fa fa-circle-o"></i>
                  Advanced Elements</a>
              </li>
              <li>
                <a href="pages/forms/editors.html">
                  <i className="fa fa-circle-o"></i>
                  Editors</a>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-table"></i>
              <span>Tables</span>
              <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="pages/tables/simple.html">
                  <i className="fa fa-circle-o"></i>
                  Simple tables</a>
              </li>
              <li>
                <a href="pages/tables/data.html">
                  <i className="fa fa-circle-o"></i>
                  Data tables</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="pages/calendar.html">
              <i className="fa fa-calendar"></i>
              <span>Calendar</span>
              <small className="label pull-right bg-red">3</small>
            </a>
          </li>
          <li>
            <a href="pages/mailbox/mailbox.html">
              <i className="fa fa-envelope"></i>
              <span>Mailbox</span>
              <small className="label pull-right bg-yellow">12</small>
            </a>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-folder"></i>
              <span>Examples</span>
              <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="pages/examples/invoice.html">
                  <i className="fa fa-circle-o"></i>
                  Invoice</a>
              </li>
              <li>
                <a href="pages/examples/profile.html">
                  <i className="fa fa-circle-o"></i>
                  Profile</a>
              </li>
              <li>
                <a href="pages/examples/login.html">
                  <i className="fa fa-circle-o"></i>
                  Login</a>
              </li>
              <li>
                <a href="pages/examples/register.html">
                  <i className="fa fa-circle-o"></i>
                  Register</a>
              </li>
              <li>
                <a href="pages/examples/lockscreen.html">
                  <i className="fa fa-circle-o"></i>
                  Lockscreen</a>
              </li>
              <li>
                <a href="pages/examples/404.html">
                  <i className="fa fa-circle-o"></i>
                  404 Error</a>
              </li>
              <li>
                <a href="pages/examples/500.html">
                  <i className="fa fa-circle-o"></i>
                  500 Error</a>
              </li>
              <li>
                <a href="pages/examples/blank.html">
                  <i className="fa fa-circle-o"></i>
                  Blank Page</a>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-share"></i>
              <span>Multilevel</span>
              <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li>
                <a href="#">
                  <i className="fa fa-circle-o"></i>
                  Level One</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-circle-o"></i>
                  Level One
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a href="#">
                      <i className="fa fa-circle-o"></i>
                      Level Two</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-circle-o"></i>
                      Level Two
                      <i className="fa fa-angle-left pull-right"></i>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-circle-o"></i>
                          Level Three</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-circle-o"></i>
                          Level Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-circle-o"></i>
                  Level One</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="documentation/index.html">
              <i className="fa fa-book"></i>
              <span>Documentation</span>
            </a>
          </li>
          <li className="header">LABELS</li>
          <li>
            <a href="#">
              <i className="fa fa-circle-o text-red"></i>
              <span>Important</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle-o text-yellow"></i>
              <span>Warning</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle-o text-aqua"></i>
              <span>Information</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
