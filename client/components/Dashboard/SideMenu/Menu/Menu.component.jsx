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

					<ItemMenu title="Rol" tree={[
						{
							text: 'Ver listado',
							href: '/dashboard/rol/listar',
							icon: 'fa fa-circle-o'
						}, {
							text: 'Registrar',
							href: '/dashboard/rol/insertar',
							icon: 'fa fa-circle-o'
						}
					]}/>

					<ItemMenu title="Nivel" tree={[
						{
							text: 'Ver niveles',
							href: '/dashboard/nivel/listar',
							icon: 'fa fa-circle-o'
						}, {
							text: 'Registrar',
							href: '/dashboard/nivel/insertar',
							icon: 'fa fa-circle-o'
						}
					]}/>

					<ItemMenu title="Tipos de curso" tree={[
						{
							text: 'Listar tipos de curso',
							href: '/dashboard/tipocurso/listar',
							icon: 'fa fa-circle-o'
						}, {
							text: 'Registrar',
							href: '/dashboard/tipocurso/insertar',
							icon: 'fa fa-circle-o'
						}
					]}/>

					<ItemMenu title="Actividades" tree={[
						{
							text: 'Listar actividades',
							href: '/dashboard/actividad/listar',
							icon: 'fa fa-circle-o'
						}, {
							text: 'Registrar actividad',
							href: '/dashboard/actividad/insertar',
							icon: 'fa fa-circle-o'
						}, {
							text: 'Listar tipos de actividades',
							href: '/dashboard/actividad/insertartipo',
							icon: 'fa fa-circle-o'
						}, {
							text: 'Registrar tipo de actividad',
							href: '/dashboard/actividad/listartipo',
							icon: 'fa fa-circle-o'
						}
					]}/>

					<ItemMenu title="Permisos" icon="fa fa-files-o" tree={[
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
					]} />

					<ItemMenu title="Menu" icon="fa fa-files-o" tree={[
						{
							text: 'Ver menu de usuario',
							href: '/dashboard/menuusuario/listar',
							icon: 'fa fa-circle-o'
						}, {
							text: 'Registrar menu de usuario',
							href: '/dashboard/menuusuario/insertar',
							icon: 'fa fa-circle-o'
						}
					]} span={{
						text: '4',
						className: 'label label-primary pull-right'
					}} />

					<ItemMenu title="Programas" icon="fa fa-files-o" tree={[
						{
							text: 'Ver programas',
							href: '/dashboard/programa/listar',
							icon: 'fa fa-circle-o',
							active: 'active'
						}, {
							text: 'Menu 2',
							href: '/dashboard/programa/registrar',
							icon: 'fa fa-circle-o',
							active: 'Boxed'
						}
					]} span={{
						text: '4',
						className: 'label label-primary pull-right'
					}} />

					<ItemMenu title="Otro" icon="fa fa-th" span={{
						text: 'new',
						className: 'label pull-right bg-green'
					}} />

					<li>
						<a href="documentation">
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

Menu.propTypes = {};

export default Menu;
