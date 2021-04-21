import React from 'react';
import './MyProfile.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom";
import styles from "../MainPage/MainPage.module.css";

const MyProfile = () => {
    return (
        <div className="container mt-5">
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
                                            <div className="row acc-info d-flex">
                                                <div className="col-12 col-md-3">
                                                <span className="info-title">Аватар</span>
                                                </div>
                                                <div className="col-12 col-md-9">
                                                <img className="avatar-img"
                                                     src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                                                     alt="avatar image"/>
                                                <Link to="" className="avatar-change">Оновити</Link>
                                                <Link to="" className="avatar-delete">Видалити</Link>
                                                </div>
                                            </div>
                                            <div className="row acc-info d-flex">
                                                <div className="col-12 col-md-3">
                                                    <span className="info-title">Ім'я</span>
                                                </div>

                                                <div className="col-12 col-md-9">
                                                    <input
                                                        className={'inputAcc'}
                                                        // value={Name}
                                                        // onChange={(event) => setName(event.target.value)}
                                                        type='name'
                                                        name='name'
                                                        id='name'/>
                                                </div>
                                            </div>
                                            <div className="row acc-info d-flex">
                                                <div className="col-12 col-md-3">
                                                    <span className="info-title">Прізвище</span>
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <input
                                                        className={'inputAcc'}
                                                        // value={Surname}
                                                        // onChange={(event) => setSurname(event.target.value)}
                                                        type='surname'
                                                        name='surname'
                                                        id='surname'/>
                                                </div>
                                            </div>
                                            <div className="row acc-info d-flex">
                                                <div className="col-12 col-md-3">
                                                    <span className="info-title">Посада</span>
                                                </div>

                                                <div className="col-12 col-md-9">
                                                    <input disabled
                                                           className={'inputAcc'}
                                                           value={'Чертила'}
                                                        // onChange={(event) => setName(event.target.value)}
                                                           type='position'
                                                           name='position'
                                                           id='position'/>
                                                </div>
                                            </div>
                                            <div className="row acc-info d-flex">
                                                <div className="col-12 col-md-3">
                                                    <span className="info-title">Місто</span>
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <input
                                                        className={'inputAcc'}
                                                        // value={Surname}
                                                        // onChange={(event) => setSurname(event.target.value)}
                                                        type='city'
                                                        name='city'
                                                        id='city'/>
                                                </div>
                                            </div>
                                            <div className="row acc-info d-flex">
                                                <div className="col-12 col-md-3">
                                                    <span className="info-title">Дата народження</span>
                                                </div>
                                                <div className="col-12 col-md-9 justify-content-center">
<div className="select-wrap">
                                                        <select className="form-select mr-1 me-2"
                                                                aria-label="Default select example">
                                                        <option selected>День</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                         <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                    </select>


                                                        <select className="form-select mr-1 me-2"
                                                                aria-label="Default select example">
                                                        <option selected>Місяць</option>
                                                        <option value="1">Січень</option>
                                                        <option value="2">Лютий</option>
                                                        <option value="3">Березень</option>
                                                        <option value="4">Квітень</option>
                                                        <option value="5">Травень</option>
                                                        <option value="6">Червень</option>
                                                        <option value="7">Липень</option>
                                                        <option value="8">Серпень</option>
                                                        <option value="9">Вересень</option>
                                                        <option value="10">Жовтень</option>
                                                        <option value="11">Листопад</option>
                                                        <option value="12">Грудень</option>
                                                    </select>


                                                        <select className="form-select mr-1 me-2"
                                                                aria-label="Default select example">
                                                        <option selected>Рік</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                        <option value="2012">2012</option>
                                                        <option value="2011">2011</option>
                                                        <option value="2010">2010</option>
                                                        <option value="2009">2009</option>
                                                        <option value="2008">2008</option>
                                                        <option value="2007">2007</option>
                                                        <option value="2006">2006</option>
                                                        <option value="2005">2005</option>
                                                        <option value="2004">2004</option>
                                                        <option value="2003">2003</option>
                                                        <option value="2002">2002</option>
                                                        <option value="2001">2001</option>
                                                        <option value="2000">2000</option>
                                                        <option value="1999">1999</option>
                                                        <option value="1998">1998</option>
                                                        <option value="1997">1997</option>
                                                        <option value="1996">1996</option>
                                                        <option value="1995">1995</option>
                                                        <option value="1994">1994</option>
                                                        <option value="1993">1993</option>
                                                        <option value="1992">1992</option>
                                                        <option value="1991">1991</option>
                                                        <option value="1990">1990</option>
                                                        <option value="1989">1989</option>
                                                        <option value="1988">1988</option>
                                                        <option value="1987">1987</option>
                                                        <option value="1986">1986</option>
                                                        <option value="1985">1985</option>
                                                        <option value="1984">1984</option>
                                                        <option value="1983">1983</option>
                                                        <option value="1982">1982</option>
                                                        <option value="1981">1981</option>
                                                        <option value="1980">1980</option>
                                                        <option value="1979">1979</option>
                                                        <option value="1978">1978</option>
                                                        <option value="1977">1977</option>
                                                        <option value="1976">1976</option>
                                                        <option value="1975">1975</option>
                                                        <option value="1974">1974</option>
                                                        <option value="1973">1973</option>
                                                        <option value="1972">1972</option>
                                                        <option value="1971">1971</option>
                                                        <option value="1970">1970</option>
                                                        <option value="1969">1969</option>
                                                        <option value="1968">1968</option>
                                                        <option value="1967">1967</option>
                                                        <option value="1966">1966</option>
                                                        <option value="1965">1965</option>
                                                        <option value="1964">1964</option>
                                                        <option value="1963">1963</option>
                                                        <option value="1962">1962</option>
                                                        <option value="1961">1961</option>
                                                        <option value="1960">1960</option>
                                                        <option value="1959">1959</option>
                                                        <option value="1958">1958</option>
                                                        <option value="1957">1957</option>
                                                        <option value="1956">1956</option>
                                                        <option value="1955">1955</option>
                                                        <option value="1954">1954</option>
                                                        <option value="1953">1953</option>
                                                        <option value="1952">1952</option>
                                                        <option value="1951">1951</option>
                                                        <option value="1950">1950</option>
                                                        <option value="1949">1949</option>
                                                        <option value="1948">1948</option>
                                                        <option value="1947">1947</option>
                                                        <option value="1946">1946</option>
                                                        <option value="1945">1945</option>
                                                        <option value="1944">1944</option>
                                                        <option value="1943">1943</option>
                                                        <option value="1942">1942</option>
                                                        <option value="1941">1941</option>
                                                        <option value="1940">1940</option>
                                                        <option value="1939">1939</option>
                                                        <option value="1938">1938</option>
                                                        <option value="1937">1937</option>
                                                        <option value="1936">1936</option>
                                                        <option value="1935">1935</option>
                                                        <option value="1934">1934</option>
                                                        <option value="1933">1933</option>
                                                        <option value="1932">1932</option>
                                                        <option value="1931">1931</option>
                                                        <option value="1930">1930</option>
                                                        <option value="1929">1929</option>
                                                        <option value="1928">1928</option>
                                                        <option value="1927">1927</option>
                                                        <option value="1926">1926</option>
                                                        <option value="1925">1925</option>
                                                        <option value="1924">1924</option>
                                                        <option value="1923">1923</option>
                                                        <option value="1922">1922</option>
                                                        <option value="1921">1921</option>
                                                    </select>
</div>
                                                </div>
                                            </div>

                                            <div className="row acc-info d-flex">
                                                <div className="col-12 col-md-3">
                                                    <span className="info-title">Ваша стать</span>
                                                </div>
                                                <div className="col-12 col-md-9">
                                                    <div className="custom-controls-stacked px-2">
                                                        <span className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="flexRadioDefault" id="flexRadioDefault2"/>
                                                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        Чоловіча
                                                      </label>
                                                </span>
                                                        <span className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="flexRadioDefault" id="flexRadioDefault3"/>
                                                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                        Жіноча
                                                      </label>
                                                </span>
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

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
};
export default MyProfile