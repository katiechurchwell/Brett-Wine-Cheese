import React from 'react';

const Modal = ({ toggleModal, currentPhoto }) => {

    const i = currentPhoto + 1;

    return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img 
                        src={require(`../../images/original/Photo${i}.jpg`)} 
                        alt="..." 
                        className="w-100"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
    );
}

export default Modal;