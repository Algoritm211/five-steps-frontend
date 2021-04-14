import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth } from '../../store/auth-reducer/auth-selector'
import { logout } from '../../store/auth-reducer/auth-reducer'


const Header = () => {
	const dispatch = useDispatch()
	const [searchText, setSearchText] = useState('')
	const isAuth = useSelector(getIsAuth)

	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<header id='header' className='fixed-top d-flex align-items-center'>
			<div className='container d-flex align-items-center justify-content-between'>
				<div className={'d-flex'}>
					<div className='logo me-auto'>
						<h1><Link to={'/main'} style={{ lineHeight: '40px' }}>Logo</Link></h1>
					</div>
					<nav id='navbar' className='navbar order-last order-lg-0'>
						<ul>
							<li><a className='nav-link' href='#'>Професії</a></li>
							<li><a className='nav-link' href='#'>Спеціалісти</a></li>
							<li><a className='nav-link' href='#'>Профорієнтація</a></li>
							<li><a className='nav-link' href='#'>Тарифи</a></li>
						</ul>
						<i className='bi bi-list mobile-nav-toggle' />
					</nav>
				</div>

				<div className={'d-flex'}>
					<input
						value={searchText}
						onChange={(event) => setSearchText(event.target.value)}
						type={'text'}
						className={'input'}
						placeholder={'Поиск'} />
					<nav id='navbar-right' className='navbar-right order-last order-lg-0'
							 style={{ marginLeft: 'auto!important' }}>
						<ul>
							<li className='dropdown'>
								<i className='fas fa-user-circle personIcon' />
								<ul>
									<li>
										{!isAuth ? (
											<Link to='/login'>Вхід</Link>
										) : (
											<Link to={'/main'} onClick={onLogout}>Вихід</Link>
										)}
									</li>
									<li>
										{!isAuth && <a href='#'>Реєстрація</a>}
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
