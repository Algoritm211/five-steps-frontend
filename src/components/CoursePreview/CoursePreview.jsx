import React from 'react';
import styles from "../MainLayout/MainPage.module.css";
import Header from "../Header/Header";
import './CoursePreview.css'
import {Link} from "react-router-dom";

const CoursePreview = () => {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className='d-flex container preview-container'>
                <div className="row">
                    <div className="preview-block col-12 col-md-6">
                        <h1 className="preview-title mb-3">Графічний дизайнер</h1>
                        <h3 className="preview-subtitle mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua</h3>
                        <div className='d-flex preview-button-block mt-5'>
                            <Link to="/main">
                                <button className='preview-button mb-1'>
                                    Зареєструватися
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex m-auto col-12 col-md-6 justify-content-center">
                        <div className="preview-button-block">
                            <img className="preview-image"
                                 src='https://cdn.mos.cms.futurecdn.net/6bxva8DmZvNj8kaVrQZZMP.jpg'
                                 alt="graphic-design"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex container preview-container2'>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6">
                        <h1 className='courses-title'>Про професію</h1>
                        <h3 className='courses-subtitle mb-5'>Кілька слів</h3>
                        <p className='course-text  mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 m-auto">
                        <div className="d-block advantage-block">
                            <div className="d-flex advantage-plate">
                                <i className="advantage-image fas fa-shoe-prints"/>
                                <p className="advantage-text">5 кроків до освоєння професії!</p>
                            </div>
                            <div className="d-flex advantage-plate">
                                <i className="advantage-image far fa-thumbs-up"/>
                                <p className="advantage-text">20 людей вважають цей курс крутим!</p>
                            </div>
                            <div className="d-flex advantage-plate">
                                <i className="advantage-image fas fa-laptop-house"/>
                                <p className="advantage-text">Домашні завдання після кожної лекції!</p>
                            </div>
                            <div className="d-flex advantage-plate">
                                <i className="advantage-image fas fa-comments"/>
                                <p className="advantage-text">Розмови з профі своєї справи!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preview-color">
                <div className='d-flex container'>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 m-auto">
                            <img
                                className="d-flex lector-image"
                                src="https://s4.cdn.teleprogramma.pro/wp-content/uploads/2020/09/d480c7ac75a1c74402a36da002f08638.jpg"
                                alt="lector-image"/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 m-auto">
                            <h1 className='courses-title'>Про лектора</h1>
                            <h3 className='courses-subtitle mb-5'>Кілька слів</h3>
                            <p className='course-text mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit
                                anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CoursePreview;