import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../store/auth-reducer/auth-thunks'


const Registration = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [userData, setUserData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		name: '',
	})
	const [error, setError] = useState('')

	const onInputChange = (event) => {
		const newUserData = userData
		const field = event.target.getAttribute('name')
		newUserData[field] = event.target.value
		setUserData(newUserData)
		console.log(userData)
	}

	const onSubmitRegistration = () => {
		if (Object.values(userData).includes('')) {
			setError('Не всі поля заповнені')
			return
		}
		if (userData.password !== userData.repeatPassword) {
			setError('Паролі не співпадають')
			return
		}
		dispatch(registerUser(userData))
		history.push('/main')
	}

	return (
		<React.Fragment>
			<div className='main'>
				<h1 style={{ textAlign: 'center', color: 'white' }}>Sign up</h1>
				<div className='containerReg'>
					<div className='sign-up-content'>
						<form method='POST' className='signup-form'>
							{/*<h2 className='form-title'>What type of user are you ?</h2>*/}
							{/*<div className='form-radio'>*/}
							{/*	<input type='radio' name='member_level' value='newbie' id='newbie' checked='checked' />*/}
							{/*	<label htmlFor='newbie'>Student</label>*/}

							{/*	<input type='radio' name='member_level' value='average' id='average' />*/}
							{/*	<label htmlFor='average'>Expert</label>*/}

							{/*</div>*/}

							<div className='form-textbox'>
								<label htmlFor='name'>Full name</label>
								<input
									onChange={onInputChange}
									className={'inputAuth'}
									type='text' name='name' id='name' />
							</div>

							<div className='form-textbox'>
								<label htmlFor='email'>Email</label>
								<input
									onChange={onInputChange}
									className={'inputAuth'}
									type='email' name='email' id='email' />
							</div>

							<div className='form-textbox'>
								<label htmlFor='pass'>Password</label>
								<input
									onChange={onInputChange}
									className={'inputAuth'}
									type='password' name='password' id='pass' />
							</div>

							<div className='form-textbox'>
								<label htmlFor='confirm-pass'>Confirm Password</label>
								<input
									onChange={onInputChange}
									className={'inputAuth'}
									type='password' name='repeatPassword' id='confirm-pass' />
							</div>

							{/*<div className="form-group">*/}
							{/*	<input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />*/}
							{/*	<label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>&nbsp;&nbsp;&nbsp; I agree all*/}
							{/*		statements in <a href="#" className="term-service">Terms of service</a></label>*/}
							{/*</div>*/}

							<div className='form-textbox'>
								<button
									onClick={onSubmitRegistration}
									name='submit' id='submit' className='submit' style={{width: '100%'}}>
									Create account
								</button>
							</div>

						</form>

						<p className='loginhere'>
							Already have an account ?
							<Link to={'/login'} className='loginhere-link'>Log in</Link>
						</p>
					</div>
				</div>

			</div>
		</React.Fragment>
	)
}

export default Registration
