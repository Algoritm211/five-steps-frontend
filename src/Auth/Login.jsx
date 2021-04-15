import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/auth-reducer/auth-thunks'
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

	return (
		<React.Fragment>
			<div className='main'>

				<h1 style={{ textAlign: 'center', color: 'white' }}>Log In</h1>
				<div className='containerReg'>
					<div className='sign-up-content'>
						<div method='POST' className='signup-form'>
							{/*<h2 className='form-title'>What type of user are you ?</h2>*/}
							{/*<div className='form-radio'>*/}
							{/*	<input type='radio' name='member_level' value='newbie' id='newbie' checked='checked' />*/}
							{/*	<label htmlFor='newbie'>Student</label>*/}

							{/*	<input type='radio' name='member_level' value='average' id='average' />*/}
							{/*	<label htmlFor='average'>Expert</label>*/}

							{/*</div>*/}
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
									type='submit' name='submit' id='submit' className='submit' value='Log in' style={{width: '100%'}}>
									Log in
								</button>
							</div>
						</div>

						<p className='loginhere'>
							Don't have an account ?
							<Link to={'/registration'} className='loginhere-link cup'>Sign up</Link>
						</p>
					</div>
				</div>

			</div>
		</React.Fragment>
	)
}

export default Login
