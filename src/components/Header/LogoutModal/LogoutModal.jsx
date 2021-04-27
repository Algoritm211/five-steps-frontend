import React from 'react'
import {logout} from "../../../store/auth-reducer/auth-reducer";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";




const LogoutModal = ({ isModalOpen, setIsModalOpen }) => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }


    return (
        <div id='exampleModal' className={`modal logoutExit ${isModalOpen ? 'active' : ''}`} tabIndex='-1'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Увага!</h5>
                        <button onClick={() => setIsModalOpen(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Ви впевнені, що хочете вийти з акаунту?
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setIsModalOpen(false)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Повернутися</button>
                      <Link to={'/main'} >  <button onClick={() => { onLogout(); setIsModalOpen(false);}} type="button" className="btn btn-danger">Вийти</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal
