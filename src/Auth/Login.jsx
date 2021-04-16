import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authGoogle, loginUser } from '../store/auth-reducer/auth-thunks'
import { Link, useHistory } from 'react-router-dom'
import './Auth.css'

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = () => {
		dispatch(loginUser(email, password))
		history.push('/main')
	}

	const onGoogleLogIn = () => {
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
			if (parsedData.error && parsedData.error === 404) {
				history.push('/registration')
				return
			}
			dispatch(authGoogle(parsedData))
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
						<div method='POST' className='signup-form'>
							{/*<h2 className='form-title'>What type of user are you ?</h2>*/}
							{/*<div className='form-radio'>*/}
							{/*	<input type='radio' name='member_level' value='newbie' id='newbie' checked='checked' />*/}
							{/*	<label htmlFor='newbie'>Student</label>*/}

							{/*	<input type='radio' name='member_level' value='average' id='average' />*/}
							{/*	<label htmlFor='average'>Expert</label>*/}

							{/*</div>*/}
							<h1 className='AuthTitle'>Увійдіть, щоб побачити більше</h1>
							<div className='form-textbox'>
								<label htmlFor='email'>Email</label>
								<input
									className={'inputAuth'}
									value={email}
									onChange={(event) => setEmail(event.target.value)}
									type='email'
									name='email'
									id='email' />
							</div>

							<div className='form-textbox'>
								<label htmlFor='pass'>Password</label>
								<input
									className={'inputAuth'}
									value={password}
									onChange={(event) => setPassword(event.target.value)}
									type='password'
									name='pass'
									id='pass' />
							</div>

							<div className='form-textbox'>
								<button
									onClick={onSubmit}
									type='submit' name='submit' id='submit' className='submit' value='Log in' style={{ width: '100%' }}>
									Log in
								</button>
							</div>
						</div>

						<div className='form-textbox' style={{ textAlign: 'center' }}>
							<div className='or-container'>
								<div className='line-separator'></div>
								<div className='or-label'>or</div>
								<div className='line-separator'></div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<button onClick={onGoogleLogIn} className='btn btn-lg btn-google btn-block btn-outline'>
										<img src='https://img.icons8.com/color/16/000000/google-logo.png' /> Login Using Google
									</button>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<Link className='btn btn-lg btn-facebook btn-block btn-outline' to='#'>
										<i className='fab fa-facebook' /> Login Using Facebook
									</Link>
								</div>
							</div>
						</div>

						<p className='loginhere'>
							Don't have an account?&nbsp;
							<Link to={'/registration'} className='loginhere-link cup'>Sign up</Link>
						</p>
					</div>
				</div>

			</div>
		</React.Fragment>
	)
}

export default Login
