import React from 'react'





const SavedChangesModal = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <div id='exampleModal' className={`modal logoutExit ${isModalOpen ? 'active' : ''}`} tabIndex='-1'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Увага!</h5>
                        <button onClick={() => setIsModalOpen(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Ви впевнені, що хочете вийти? Усі не збережені зміни будуть видалені?
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setIsModalOpen(false)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Повернутися</button>
                        <button onClick={() => { setIsModalOpen(false);}} type="button" className="btn btn-danger">Вийти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedChangesModal
