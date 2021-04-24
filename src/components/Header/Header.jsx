import React, { useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth, getUserData } from '../../store/auth-reducer/auth-selector'
import { logout } from '../../store/auth-reducer/auth-reducer'
import { MainPageStepContext } from '../MainLayout/MainLayout'
import noUserPhoto from '../../assets/user/nouserphoto.png'


const Header = () => {
	const dispatch = useDispatch()
	const [searchText, setSearchText] = useState('')
	const isAuth = useSelector(getIsAuth)
	const user = useSelector(getUserData)
	const [isMobile, setIsMobile] = useState(false)
	const [isActiveSearch, setIsActiveSearch] = useState(false)

	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<header id='header' className='fixed-top d-flex align-items-center'>
			<div className='container d-flex align-items-center justify-content-between'>
				<div className={'d-flex'}>
					<div className='logo'>
						<h1><Link to={'/main'} style={{ lineHeight: '40px' }}>Logo</Link></h1>
					</div>
					<nav id='navbar' className={`order-last order-lg-0 ${isMobile ? 'navbar-mobile' : 'navbar'}`}>
						<ul>
							<li><Link className='nav-link' to={'/professions'}>Професії</Link></li>
							<li><Link className='nav-link' to={'/error'}>Спеціалісти</Link></li>
							<li><Link className='nav-link' to='/blog'>Профорієнтація</Link></li>
							<li><Link className='nav-link' to={'/error'}>Тарифи</Link></li>
						</ul>
					</nav>
				</div>

				<div className={'d-flex'}>
					<input
						value={searchText}
						onChange={(event) => setSearchText(event.target.value)}
						type={'text'}
						className={`${isActiveSearch ? 'input-active' : 'input-deactive'}`}
						placeholder={'Пошук'} />
					<nav id='navbar-right' className={`navbar-right order-last order-lg-0`}
							 style={{ marginLeft: 'auto!important' }}>
						<ul>
							<i className='fas fa-search personIcon' onClick={() => setIsActiveSearch(prev => !prev)} />
							<li className='dropdown'>
								{user?.avatar ? (
									<img className='avatar-img'
											 style={{width: '24px', height: '24px'}}
											 src={user.avatar ? `${process.env.REACT_APP_URL}/${user.avatar}` : noUserPhoto}
											 alt='avatar' />
								) : (
									<i className='fas fa-user-circle personIcon' />
								)}
								<ul>
									{isAuth &&
									<div>
										<div className='d-flex accDropBlock'>
											{user?.avatar ? (
												<img className='avatar-img'
														 style={{width: '48px', height: '48px'}}
														 src={user.avatar ? `${process.env.REACT_APP_URL}/${user.avatar}` : noUserPhoto}
														 alt='avatar' />
											) : (
												<i className='fas fa-user-circle accDropIcon' />
											)}
											<div className='ml-3 lh-1'>
												<p className='mb-1 accDropTitle'>{user?.name}</p>
												<p className='mb-0 text-muted'>{user?.email}</p>
											</div>
										</div>
										<div className='dropdown-divider' />
									</div>
									}
									<li>
										{!isAuth ? (
											<Link to='/login'>
												<i className='far fa-user-circle' style={{marginRight: '10px'}}/>
												Вхід</Link>
										) : (
											<>
												<Link to={`/account/${user._id}`}>
													<i className='far fa-user-circle' style={{marginRight: '10px'}} />
													Акаунт</Link>
												<Link to={`/myprof/${user._id}`}>
													<i className='fas fa-briefcase' style={{marginRight: '10px'}} />
													Мої Професії</Link>
												<Link to={`/settings/${user._id}`}>
													<i className='fas fa-cog' style={{marginRight: '10px'}}/>
													Налаштування</Link>
												<div className='dropdown-divider'/>
												<Link to={'/main'} onClick={onLogout}>
													<i className="fas fa-power-off" style={{marginRight: '10px'}}/>
													Вихід</Link>
											</>
										)}
									</li>
									<li>
										{!isAuth && <Link to={'/registration'}>
											<i className="fas fa-sign-in-alt" style={{marginRight: '10px'}}/>
											Реєстрація</Link>}
									</li>

								</ul>
							</li>
							<li>
								<i className={`mobile-nav-toggle ${!isMobile ? 'fas fa-bars' : 'fa fa-times'}`}
									 onClick={() => setIsMobile(prev => !prev)} />
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
