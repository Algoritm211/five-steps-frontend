import React from 'react';
import styles from "../../MainLayout/MainPage.module.css";
import Header from "../../Header/Header";
import '../error.css'
import {Link} from "react-router-dom";

const Error403 = () => {
	return (
		<React.Fragment>
			<div className={styles.header}>
				<Header />
			</div>
			<div className='container mt-5'>
				<h1 className='error-title'>403</h1>
				<h3 className='error-subtitle' style={{textAlign: 'center'}}>Доступ заборонено.<br />Авторизуйтесь для доступу до цієї сторінки</h3>
				<div className='d-flex justify-content-center mt-5'>
					<Link to="/login">
						<button className='error-button mb-1'>
							Логін
						</button>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Error403;
