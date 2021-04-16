import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authGoogle, registerUser } from '../store/auth-reducer/auth-thunks'


const Registration = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [isExpert, setIsExpert] = useState(false)
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
		const modifiedUserData = userData
		modifiedUserData['role'] = isExpert ? 'expert' : 'student'
		dispatch(registerUser(modifiedUserData))
		history.push('/main')
	}

	const onGoogleAuth = () => {
		const win = window.open(
			'http://localhost:5000/api/auth/google',
			'Auth',
			'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',
		);

		const timer = setInterval(() => {
			if (win.closed) {
				clearInterval(timer);
			}
		}, 100);
	}

	const onCatchGoogleAuth = (messageEvent) => {
		if (messageEvent.origin === 'http://localhost:5000') {
			const parsedData = JSON.parse(messageEvent.data)
			parsedData['role'] = isExpert ? 'expert' : 'student'
			dispatch(registerUser(parsedData))
			history.push('/main')
		}
	}

	React.useEffect(() => {
		window.addEventListener('message', onCatchGoogleAuth);
		return () => {
			window.removeEventListener('message', onCatchGoogleAuth)
		}
	}, []);

	return (
		<React.Fragment>
			<div className='main'>
				<div className='containerReg'>
					<div className='logoReg'>
						<h1><Link to={'/main'} style={{ lineHeight: '40px' }}>Logo</Link></h1>
					</div>
					<div className='sign-up-content'>
						<div className='signup-form'>
							<h1 className='AuthTitle'>Реєструйтеся, щоб побачити більше</h1>
							<div className='form-radio'>
								<input className={`${isExpert ? 'inputRadio' : 'inputRadioChecked'}`} type='radio' name='member_level'
											 value='student' id='student'
											 onClick={() => setIsExpert(false)} />
								<label htmlFor='student'>Student</label>

								<input className={`${isExpert ? 'inputRadioChecked' : 'inputRadio'}`} type='radio' name='member_level'
											 value='expert' id='expert'
											 onClick={() => setIsExpert(true)} />
								<label htmlFor='expert'>Expert</label>
							</div>
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
									name='submit' id='submit' className='submit' style={{ width: '100%' }}>
									Sign Up
								</button>
							</div>
							<div className='form-textbox' style={{ textAlign: 'center' }}>
								<div className='or-container'>
									<div className='line-separator'></div>
									<div className='or-label'>or</div>
									<div className='line-separator'></div>
								</div>
								<div className='row'>
									<div className='col-md-12'>
										<button onClick={onGoogleAuth} className='btn btn-lg btn-google btn-block btn-outline' to='#'>
											<img src='https://img.icons8.com/color/16/000000/google-logo.png' /> Sign Up Using Google
										</button>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-12'>
										<Link className='btn btn-lg btn-facebook btn-block btn-outline' to='#'>
											<i className='fab fa-facebook' /> Sign Up Using Facebook
										</Link>
									</div>
								</div>
							</div>

						</div>

						<p className='loginhere'>
							Already have an account?&nbsp;
							<Link to={'/login'} className='loginhere-link'>Log in</Link>
						</p>
					</div>
				</div>

			</div>
		</React.Fragment>
	)
}

export default Registration
