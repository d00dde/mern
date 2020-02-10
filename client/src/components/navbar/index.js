import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../../context/auth-context';
import './navbar.css';

export default () => {
	const auth = useContext(AuthContext);
	const history = useHistory();

	const logoutHandler = (e) => {
		e.preventDefault();
		auth.logout();
		history.push('/');
	}

	return (
		<nav>
			<div className='nav-wrapper blue-grey darken-1'>
				<ul className='right hide-on-med-and-down' id='nav-mobile'>
					<li><NavLink to='/create'>Создать</NavLink></li>
					<li><NavLink to='/links'>Ссылки</NavLink></li>
					<li><a href='/' onClick={logoutHandler}>Выйти</a></li>
				</ul>
			</div>
		</nav>
	);
}

