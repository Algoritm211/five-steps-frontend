import React from 'react';
import './MySettings.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom";
import styles from "../MainPage/MainPage.module.css";
import { useState } from "react";



const MySettings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className="container mt-5">
            <div className="row flex-lg-nowrap">
                <div className="col-12 col-lg-auto" style={{width: '200px'}}>
                    <div className="cardAcc">
                        <div className="e-navlist">
                            <ul className="nav d-block">
                                <li className="nav-item side-accElem">
                                    <a className="nav-link side-elem" href="#">
                                        <div className="sidebar-l">
                                            <i className="far fa-user-circle side-accIll"/>
                                        </div>
                                        <div className="sidebar-r">
                                            <span className="sidebar-title">Мій профіль</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item side-accElem">
                                    <a className="nav-item side-elem " href="#">
                                        <div className="sidebar-l">
                                            <i className="fas fa-briefcase side-accIll"/>
                                        </div>
                                        <div className="sidebar-r">
                                            <span className="sidebar-title">Мої професії</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item side-accElem">
                                    <a className="nav-item side-elem side-elem-active" href="#">
                                        <div className="sidebar-l">
                                            <i className="fas fa-cog side-accIll"/>
                                        </div>
                                        <div className="sidebar-r">
                                            <span className="sidebar-title">Налаштування</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">

                        <div className="row1">
                            <div className="col mb-3">
                                <div className="cardAcc">
                                    <div className="cardAcc-body">
                                        <div className="e-profile">
                                            <div className="row">
                                                <div className="d-flex">
                                                    <h1 className="acc-title">Налаштування</h1>
                                                </div>
                                            </div>
                                            <div className="row pt-3">
                                                <div className="acc-info d-flex">
                                                    <span className="info-title">E-mail</span>


                                                </div>
                                                {/*Сюда вставить переменную почты*/}
                                                <span className="">edwardKvashin@kvashin.com</span>
                                                <div className="acc-info d-flex">
                                                    <button className="btn btn-secondary" type="submit">Змінити пароль
                                                    </button>
                                                </div>
                                                <div className="acc-info d-flex">
                                                    <span className="info-title">Мова інтерфейсу</span>
                                                    <span>
                                                        <select className="form-select"
                                                                aria-label="Default select example">
                                                        <option selected>Українська</option>
                                                        <option value="1">Русский</option>
                                                        <option value="2">English</option>
                                                    </select>
                                                    </span>

                                                </div>
                                                <div className="acc-info d-flex">
                                                    <span className="info-title align-self-start">Розсилка</span>
                                                    <div className="custom-controls-stacked px-2">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                   id="flexCheckDefault"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault">
                                                                Новини сервісу
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                   id="flexCheckChecked"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckChecked">
                                                                Рекомендації до ваших вподобань
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                   id="flexCheckChecked"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckChecked">
                                                                Пропозиції щодо рабства
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="acc-info d-flex">
                                                    <div className="col d-flex justify-content-start">
                                                        <button className="btn btn-primary" type="submit">Зберегти
                                                            налаштування
                                                        </button>
                                                    </div>

                                                </div>

                                                <div className="acc-info d-flex" onClick={()=>setIsModalOpen(true)}>
                                                    <span className="delete-text" id="modalDelete">Видалити акаунт</span>
                                                </div>

                                                <div id="exampleModal" className={`modal ${isModalOpen ? 'active' : ''}`} tabIndex="-1">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Увага!</h5>
                                                                <button type="button" className="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close" onClick={()=>setIsModalOpen(false)}></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p>Хочете видалити свій аккаунт? Видалення вашого профілю призведе до видалення всього його вмісту і всіх пов'язаних з нею даних.</p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary" onClick={()=>setIsModalOpen(false)}>Ні, я передумав
                                                                </button>
                                                                <button type="button" className="btn btn-danger"
                                                                        data-bs-dismiss="modal" onClick={()=>setIsModalOpen(false)}>Видалити акаунт
                                                                </button>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

        </div>



    );

};
export default MySettings
