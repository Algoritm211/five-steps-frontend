import React from 'react';
import styles from "../../MainLayout/MainPage.module.css";
import Header from "../../Header/Header";
import '../error.css'
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <Header />
            </div>
            <div className='container mt-5'>
                <h1 className='error-title'>404</h1>
                <h3 className='error-subtitle'>Щось пішло не так.<br />Спробуйте ще раз</h3>
                <div className='d-flex justify-content-center mt-5'>
                    <Link to="/main">
                        <button className='error-button mb-1'>
                            На головну
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Error404;
