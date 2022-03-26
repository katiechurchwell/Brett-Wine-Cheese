import React from 'react';

const Modal = ({ toggleModal, currentPhoto }) => {

    const i = currentPhoto + 1;

    return (
        <div className="modal-dialog" onClick={() => toggleModal()}>
            <div className="modal-content">
                <div className="modal-body">
                    <img
                        src={require(`../../images/original/Photo${i}.jpg`)}
                        alt="..."
                        className="w-100"
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;