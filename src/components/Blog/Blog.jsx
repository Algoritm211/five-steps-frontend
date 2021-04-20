import React from 'react';
import './Blog.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom";
import styles from "../MainPage/MainPage.module.css";

const Blog = () => {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className="container mt-5">
                <h1 className="guid-title">Профорієнтація</h1>
                <h3 className="guid-subtitle">Цікаві статті для розвитку та пошуку себе</h3>
                <div className="guid-journal">
                    <div className="d-flex guid-journal-results mt-5 mb-3">
                        <div className="d-flex guid-journal-l justify-content-start">
                            <span className="guid-materials">Показано матеріалів: 6 з </span><span
                            className="guid-materials">n</span>
                        </div>
                        <div className="d-flex guid-journal-r justify-content-end">
                            <input className="guid-checkbox" type="checkbox" id="articles" name="articles"/>
                            <label className="guid-label" htmlFor="articles">Статті</label>
                            <input type="checkbox" id="podcasts" name="podcasts"/>
                            <label className="guid-label" htmlFor="podcasts">Подкасти</label>
                            <input type="checkbox" id="video" name="video"/>
                            <label className="guid-label" htmlFor="video">Відео</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12 guid-card-item mb-5">
                            <Link to="#">
                                <img className="guid-card-img mb-3"
                                     src="https://lh3.googleusercontent.com/proxy/2aTy--gUWniJthrzMc-e-V5wnMoSN2buW8ycWcgc2imC_Mt2f2n2iDb_Nn8nv_rfIa-rF2XuerS5GpT9hKXUL_J2uypwLal7jglD6tCthTQNqQfVS_pNPSJxIigCqiPSO-L1gMWJ5ykGFUwfA4NU8gr0pQ"
                                     alt="guid-card-item"/>
                            </Link>
                            <div className="d-flex mb-3 guid-card-article">
                                <i className="far fa-newspaper guid-card-ill"/>
                                <span className="guid-card-type">Стаття</span>
                            </div>
                            <div className="d-flex mb-3 ">
                                <Link className="guid-card-title">Как заставить работать людей, если они не хотят</Link>
                            </div>
                            <div className="d-flex mb-3">
                                <Link to="#" className="guid-card-subtitle">Прочитати</Link>
                                <i className="fas fa-long-arrow-alt-right guid-card-ill"
                                   style={{fontSize: '12px', color: '#f26c4f'}}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 guid-card-item mb-5">
                            <Link to="#">
                                <img className="guid-card-img mb-3"
                                     src="https://upload.wikimedia.org/wikipedia/ru/2/24/The_Game_Awards_2019_poster.jpg"
                                     alt="guid-card-item"/>
                            </Link>
                            <div className="d-flex mb-3 guid-card-podcast">
                                <i className="fas fa-microphone-alt guid-card-ill"/>
                                <span className="guid-card-type">Подкаст</span>
                            </div>
                            <div className="d-flex mb-3">
                                <Link className="guid-card-title">Играть в игры беплатно без регистрации</Link>
                            </div>
                            <div className="d-flex mb-3">
                                <Link to="#" className="guid-card-subtitle">Прослухати</Link>
                                <i className="fas fa-long-arrow-alt-right guid-card-ill"
                                   style={{fontSize: '12px', color: '#f26c4f'}}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 guid-card-item mb-5">
                            <Link to="#">
                                <img className="guid-card-img mb-3"
                                     src="https://7themes.su/php/imres/resize.php?width=1920&height=1080&cropratio=16:9&image=/_ph/28/337812698.jpg"
                                     alt="guid-card-item"/>
                            </Link>
                            <div className="d-flex mb-3 guid-card-video">
                                <i className="fas fa-video guid-card-ill"/>
                                <span className="guid-card-type">Відео</span>
                            </div>
                            <div className="d-flex mb-3">
                                <Link className="guid-card-title">Как заставить работать людей, если они не хотят</Link>
                            </div>
                            <div className="d-flex mb-3">
                                <Link to="#" className="guid-card-subtitle">Продивитися</Link>
                                <i className="fas fa-long-arrow-alt-right guid-card-ill"
                                   style={{fontSize: '12px', color: '#f26c4f'}}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 guid-card-item mb-5">
                            <Link to="#">
                                <img className="guid-card-img mb-3"
                                     src="https://lh3.googleusercontent.com/proxy/2aTy--gUWniJthrzMc-e-V5wnMoSN2buW8ycWcgc2imC_Mt2f2n2iDb_Nn8nv_rfIa-rF2XuerS5GpT9hKXUL_J2uypwLal7jglD6tCthTQNqQfVS_pNPSJxIigCqiPSO-L1gMWJ5ykGFUwfA4NU8gr0pQ"
                                     alt="guid-card-item"/>
                            </Link>
                            <div className="d-flex mb-3 guid-card-article">
                                <i className="far fa-newspaper guid-card-ill"/>
                                <span className="guid-card-type">Стаття</span>
                            </div>
                            <div className="d-flex mb-3">
                                <Link className="guid-card-title">Как заставить работать людей, если они не хотят</Link>
                            </div>
                            <div className="d-flex mb-3">
                                <Link to="#" className="guid-card-subtitle">Прочитати</Link>
                                <i className="fas fa-long-arrow-alt-right guid-card-ill"
                                   style={{fontSize: '12px', color: '#f26c4f'}}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 guid-card-item mb-5">
                            <Link to="#">
                                <img className="guid-card-img mb-3"
                                     src="https://upload.wikimedia.org/wikipedia/ru/2/24/The_Game_Awards_2019_poster.jpg"
                                     alt="guid-card-item"/>
                            </Link>
                            <div className="d-flex mb-3 guid-card-podcast">
                                <i className="fas fa-microphone-alt guid-card-ill"/>
                                <span className="guid-card-type">Подкаст</span>
                            </div>
                            <div className="d-flex mb-3">
                                <Link className="guid-card-title">Играть в игры беплатно без регистрации</Link>
                            </div>
                            <div className="d-flex mb-3">
                                <Link to="#" className="guid-card-subtitle">Прослухати</Link>
                                <i className="fas fa-long-arrow-alt-right guid-card-ill"
                                   style={{fontSize: '12px', color: '#f26c4f'}}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 guid-card-item mb-5">
                            <Link to="#">
                                <img className="guid-card-img mb-3"
                                     src="https://7themes.su/php/imres/resize.php?width=1920&height=1080&cropratio=16:9&image=/_ph/28/337812698.jpg"
                                     alt="guid-card-item"/>
                            </Link>
                            <div className="d-flex mb-3 guid-card-video">
                                <i className="fas fa-video guid-card-ill"/>
                                <span className="guid-card-type">Відео</span>
                            </div>
                            <div className="d-flex mb-3">
                                <Link className="guid-card-title">Как заставить работать людей, если они не хотят</Link>
                            </div>
                            <div className="d-flex mb-3">
                                <Link to="#" className="guid-card-subtitle">Продивитися</Link>
                                <i className="fas fa-long-arrow-alt-right guid-card-ill"
                                   style={{fontSize: '12px', color: '#f26c4f'}}/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mb-5">
                            <Link to="#">
                                <button className="guid-button">
                                    Показати більше
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};
export default Blog