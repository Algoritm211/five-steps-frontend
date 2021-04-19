import React from 'react';
import './MyProfile.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom";
import styles from "../MainPage/MainPage.module.css";

const MyProfile = () => {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className="container">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto" style={{width: '200px'}}>
                        <div className="cardAcc">
                            <div className="e-navlist">
                                <ul className="nav d-block">
                                    <li className="nav-item side-accElem">
                                        <a className="nav-link side-elem side-elem-active" href="#">
                                            <div className="sidebar-l">
                                                <i className="far fa-user-circle side-accIll"/>
                                            </div>
                                            <div className="sidebar-r">
                                                <span className="sidebar-title">Мій профіль</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item side-accElem">
                                        <a className="nav-item side-elem" href="#">
                                            <div className="sidebar-l">
                                                <i className="fas fa-briefcase side-accIll"/>
                                            </div>
                                            <div className="sidebar-r">
                                                <span className="sidebar-title">Мої професії</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item side-accElem">
                                        <a className="nav-item side-elem" href="#">
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
                        <div className="row">
                            <div className="col mb-3">
                                <div className="cardAcc">
                                    <div className="cardAcc-body">
                                        <div className="e-profile">
                                            <div className="row">
                                                <div className="d-flex">
                                                    <h1 className="acc-title">Мій профіль</h1>
                                                    <span className="acc-join-title">Приєднався 20 Apr 2021</span>
                                                </div>
                                            </div>
                                            <div className="row pt-3">
                                                <h3 className="acc-subtitle">Особисті дані</h3>
                                                <div className="acc-info d-flex">
                                                    <span className="info-title">Аватар</span>
                                                    <img className="avatar-img"
                                                         src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                                                         alt="avatar image"/>
                                                    <Link to="" className="avatar-change">Оновити</Link>
                                                    <Link to="" className="avatar-delete">Видалити</Link>
                                                </div>
                                                <div className="acc-info d-flex">
                                                    <span className="info-title">Ім'я</span>
                                                    <input
                                                        className={'inputAcc'}
                                                        // value={Name}
                                                        // onChange={(event) => setName(event.target.value)}
                                                        type='name'
                                                        name='name'
                                                        id='name'/>
                                                </div>
                                                <div className="acc-info d-flex">
                                                    <span className="info-title">Прізвище</span>
                                                    <input
                                                        className={'inputAcc'}
                                                        // value={Surname}
                                                        // onChange={(event) => setSurname(event.target.value)}
                                                        type='surname'
                                                        name='surname'
                                                        id='surname'/>
                                                </div>
                                                <div className="acc-info d-flex">
                                                    <span className="info-title">Посада</span>
                                                    <input disabled
                                                           className={'inputAcc'}
                                                           value={'Чертила'}
                                                        // onChange={(event) => setName(event.target.value)}
                                                           type='position'
                                                           name='position'
                                                           id='position'/>
                                                </div>
                                                <div className="acc-info d-flex">
                                                    <span className="info-title">Місто</span>
                                                    <input
                                                        className={'inputAcc'}
                                                        // value={Surname}
                                                        // onChange={(event) => setSurname(event.target.value)}
                                                        type='city'
                                                        name='city'
                                                        id='city'/>
                                                </div>
                                                <div className="">
                                                    <input placeholder="День" type="date" readOnly="" autoComplete="off"
                                                           className=""
                                                           value="" />
                                                </div>
                                                <div className="">
                                                    <input placeholder="День" type="text" readOnly="" autoComplete="off"
                                                           className=""
                                                           value="" />
                                                </div>
                                                <div className="">
                                                    <input placeholder="День" type="text" readOnly="" autoComplete="off"
                                                           className="ll-leokit__input ll-leokit__input__m-empty"
                                                           value="" />
                                                </div>

                                                <div
                                                    className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                        <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                                                        <p className="mb-0">@johnny.s</p>
                                                        <div className="text-muted"><small>Last seen 2 hours ago</small>
                                                        </div>
                                                    </div>
                                                    <div className="text-center text-sm-right">
                                                        <span className="badge badge-secondary">administrator</span>
                                                        <div className="text-muted"><small>Joined 09 Dec 2017</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="nav nav-tabs">
                                                <li className="nav-item"><Link to=""
                                                                               className="active nav-link">Settings</Link>
                                                </li>
                                            </ul>
                                            <div className="tab-content pt-3">
                                                <div className="tab-pane active">
                                                    <form className="form" noValidate="">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Full Name</label>
                                                                            <input className="form-control" type="text"
                                                                                   name="name" placeholder="John Smith"
                                                                                   value="John Smith"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Username</label>
                                                                            <input className="form-control" type="text"
                                                                                   name="username"
                                                                                   placeholder="johnny.s"
                                                                                   value="johnny.s"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Email</label>
                                                                            <input className="form-control" type="text"
                                                                                   placeholder="user@example.com"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col mb-3">
                                                                        <div className="form-group">
                                                                            <label>About</label>
                                                                            <textarea className="form-control" rows="5"
                                                                                      placeholder="My Bio"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 mb-3">
                                                                <div className="mb-2"><b>Change Password</b></div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Current Password</label>
                                                                            <input className="form-control"
                                                                                   type="password"
                                                                                   placeholder="••••••"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>New Password</label>
                                                                            <input className="form-control"
                                                                                   type="password"
                                                                                   placeholder="••••••"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Confirm <span
                                                                                className="d-none d-xl-inline">Password</span></label>
                                                                            <input className="form-control"
                                                                                   type="password"
                                                                                   placeholder="••••••"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                                                <div className="mb-2"><b>Keeping in Touch</b></div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <label>Email Notifications</label>
                                                                        <div className="custom-controls-stacked px-2">
                                                                            <div
                                                                                className="custom-control custom-checkbox">
                                                                                <input type="checkbox"
                                                                                       className="custom-control-input"
                                                                                       id="notifications-blog"
                                                                                       checked=""/>
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    htmlFor="notifications-blog">Blog
                                                                                    posts</label>
                                                                            </div>
                                                                            <div
                                                                                className="custom-control custom-checkbox">
                                                                                <input type="checkbox"
                                                                                       className="custom-control-input"
                                                                                       id="notifications-news"
                                                                                       checked=""/>
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    htmlFor="notifications-news">Newsletter</label>
                                                                            </div>
                                                                            <div
                                                                                className="custom-control custom-checkbox">
                                                                                <input type="checkbox"
                                                                                       className="custom-control-input"
                                                                                       id="notifications-offers"
                                                                                       checked=""/>
                                                                                <label
                                                                                    className="custom-control-label"
                                                                                    htmlFor="notifications-offers">Personal
                                                                                    Offers</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col d-flex justify-content-end">
                                                                <button className="btn btn-primary" type="submit">Save
                                                                    Changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>

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
        </React.Fragment>
    );
};
export default MyProfile