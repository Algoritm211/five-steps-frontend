import React from 'react'

const Login = () => {
	return (
		<React.Fragment>

			<nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
				<div className='container'>
					<a className='navbar-brand js-scroll-trigger' href='#page-top'><p style={{ color: 'white' }}>5
						steps</p></a>
					<button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse'
									data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false'
									aria-label='Toggle navigation'>
						Menu
						<i className='fas fa-bars ml-1' />
					</button>
					<div className='collapse navbar-collapse' id='navbarResponsive'>
						<ul className='navbar-nav text-uppercase ml-auto'>
							<li className='nav-item'><a className='nav-link js-scroll-trigger' href='form\LogIn.html'>Log In</a></li>
							<li className='nav-item'><a className='nav-link js-scroll-trigger' href='form\SignUp.html'>Sign Up</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<header className='masthead'>
				<div className='container'>
					<div className='masthead-subheading'>Welcome To 5 steps!</div>
					<div className='masthead-heading text-uppercase'>Let's start the adventure</div>
					<a className='btn btn-primary btn-xl text-uppercase js-scroll-trigger'
						 href='form\SignUp.html'>Registration</a>
				</div>
			</header>
		</React.Fragment>
)
}

export default Login
