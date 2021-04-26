import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authGoogle, loginUser } from '../store/auth-reducer/auth-thunks'
import { Link, useHistory } from 'react-router-dom'
import './Auth.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { getAuthError } from '../store/auth-reducer/auth-selector'

const loginValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Введіть дійсну email-адресу')
		.matches(/[^<>%$]/i, 'Присутні заборонені символи'),
	password: Yup.string()
		.required('Пароль треба вказати обов`язково')
		.min(8, 'Пароль має бути мінімум 8 символів')
		.matches(/[^<>%$]/i, 'Присутні заборонені символи'),
})

const Login = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const authError = useSelector(getAuthError)

	const formik = useFormik({
		enableReinitialize: true,
		validationSchema: loginValidationSchema,
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: values => {
			dispatch(loginUser(values.email, values.password))
		},
	})


	const onGoogleLogIn = () => {
		const win = window.open(
			`${process.env.REACT_APP_URL}/api/auth/google`,
			'Auth',
			'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',
		)

		const timer = setInterval(() => {
			if (win.closed) {
				clearInterval(timer)
			}
		}, 100)
	}

	const onCatchGoogleAuth = (messageEvent) => {
		if (messageEvent.origin === process.env.REACT_APP_URL) {
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
		window.addEventListener('message', onCatchGoogleAuth)
		return () => {
			window.removeEventListener('message', onCatchGoogleAuth)
		}
	}, [])


	return (
		<React.Fragment>

			<div className='main'>
				<div className='containerReg'>
					<div className='logoReg'>
						<h1><Link to={'/main'} style={{ lineHeight: '40px', fontWeight: '600' }}>Logo</Link></h1>
					</div>
					<div className='sign-up-content'>
						<form onSubmit={formik.handleSubmit} className='signup-form'>
							<h1 className='AuthTitle'>Увійдіть, щоб побачити більше</h1>
							<div className='form-textbox'>
								<label htmlFor='email'>Email</label>
								<input
									className={'inputAuth'}
									value={formik.values.email}
									onChange={formik.handleChange}
									type='email'
									name='email'
									id='email' />
								{formik.errors.email}
							</div>

							<div className='form-textbox'>
								<label htmlFor='pass'>Password</label>
								<input
									className={'inputAuth'}
									value={formik.values.password}
									onChange={formik.handleChange}
									type='password'
									name='password'
									id='password' />
								{formik.errors.password}
							</div>

							<div className='form-textbox'>
								{authError && <div>{authError}</div>}
								<button
									type='submit' name='submit' id='submit' className='submit' value='Log in' style={{ width: '100%' }}>
									Log in
								</button>
							</div>
						</form>

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
