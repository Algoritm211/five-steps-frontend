import React from 'react'
import { useSelector } from 'react-redux'
import { getUserData } from '../../../store/auth-reducer/auth-selector'
import { NavLink } from 'react-router-dom'

const ProfileNavbar = () => {
	const user = useSelector(getUserData)

	return (
		<ul className='nav'>
			<li className='nav-item side-accElem'>
				<NavLink className='nav-link side-elem' activeClassName={'side-elem-active'} to={`/account/${user._id}`}>
					<div className='sidebar-l'>
						<i className='far fa-user-circle side-accIll' />
					</div>
					<div className='sidebar-r'>
						<span className='sidebar-title'>Мій профіль</span>
					</div>
				</NavLink>
			</li>
			<li className='nav-item side-accElem'>
				<NavLink className='nav-item side-elem' activeClassName={'side-elem-active'} to={`/myprof/${user._id}`}>
					<div className='sidebar-l'>
						<i className='fas fa-briefcase side-accIll' />
					</div>
					<div className='sidebar-r'>
						<span className='sidebar-title'>Мої професії</span>
					</div>
				</NavLink>
			</li>
			<li className='nav-item side-accElem'>
				<NavLink className='nav-item side-elem' activeClassName={'side-elem-active'} to={`/settings/${user._id}`}>
					<div className='sidebar-l'>
						<i className='fas fa-cog side-accIll' />
					</div>
					<div className='sidebar-r'>
						<span className='sidebar-title'>Налаштування</span>
					</div>
				</NavLink>
			</li>
		</ul>
	)
}

export default ProfileNavbar
