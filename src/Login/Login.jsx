import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/auth-reducer/auth-thunks'
import {useHistory} from 'react-router-dom'

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

			<div className="main">
				<h1>Log In</h1>
				<div className="container">
					<div className="sign-up-content">
						<div className="signup-form">
							<h2 className="form-title">What type of user are you ?</h2>

							<div className="form-textbox">
								<label htmlFor="email">Email</label>
								<input
									value={email}
									onChange={(event) => setEmail(event.target.value)}
									type="email"
									name="email"
									id="email" />
							</div>

							<div className="form-textbox">
								<label htmlFor="pass">Password</label>
								<input
									value={password}
									onChange={(event) => setPassword(event.target.value)}
									type="password"
									name="pass"
									id="pass" />
							</div>

							<div className="form-textbox">
								<button onClick={onSubmit} name="submit" id="submit" className="submit">
									Log in
								</button>
							</div>
						</div>

						<p className="loginhere">
							Don't have an account ?<a href="SignUp.html" className="loginhere-link"> Sign up</a>
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
)
}

export default Login
