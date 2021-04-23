import React from 'react'
import './Subscriptions.css'
import {useSelector} from "react-redux";
import {getUserData} from "../../store/auth-reducer/auth-selector";
import {countEntries} from "../util-funcs/entries-two-arr-counter";
import {Link} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

const Subscriptions = () => {
    return (
        <MainLayout>
       <div className="container mt-5">
           <div className="row justify-content-between align-content-center mb-4">
               <div className="col-12 ad-text col-md-6">
                   <h1>Придбайте <b>ПрофільPlus</b> вже зараз, і отримуйте жабу* безкоштовно!</h1>
                   <h5>*Ми не несемо відповідальність за дії Нової Пошти із жабою при надсиланні**</h5>
                   <h6>**Скоріш за все вона не доживе у пакунку</h6>
               </div>
               <div className="col-12 col-md-6 image-block">
                   <img src="https://i.pinimg.com/originals/73/20/de/7320de297c2a05563af18fc8b2d2ff97.png" width="100%" alt=""/>
               </div>
           </div>
           <div className="row price-row">
               <div className="col-12">
                   <h2 className="text-center">Які переваги? </h2>
                   <h4 className="text-center">Зараз пояснимо - все дуже просто!</h4>
               </div>
               <div className="col-12 justify-content-center">
                   <table className="table table-bordered table-subs m-auto">
                       <thead>
                       <tr>
                           <th scope="col">Можливості</th>
                           <th scope="col">Безкоштовно</th>
                           <th scope="col">ПрофільPlus</th>
                           <th scope="col">GymSub</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <th scope="row">Доступ до курсів</th>
                           <td className="table-success">+</td>
                           <td className="table-success">+</td>
                           <td className="table-success">+</td>
                       </tr>
                       <tr>
                           <th scope="row">Доступ до статей та новостей</th>
                           <td className="table-success">+</td>
                           <td className="table-success">+</td>
                           <td className="table-success">+</td>
                       </tr>
                       <tr>
                           <th scope="row">Жаба (можливо мертва)</th>
                           <td className="table-danger">-</td>
                           <td className="table-success">+</td>
                           <td className="table-success">+</td>
                       </tr>
                       <tr>
                           <th scope="row">Зв'язок з менторами курсів</th>
                           <td className="table-danger">-</td>
                           <td className="table-success">+</td>
                           <td className="table-success">+</td>
                       </tr>
                       <tr>
                           <th scope="row">Slaves</th>
                           <td className="table-danger">-</td>
                           <td className="table-danger">-</td>
                           <td className="table-success">+</td>
                       </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       </div>
        </MainLayout>
    )
}

export default Subscriptions
