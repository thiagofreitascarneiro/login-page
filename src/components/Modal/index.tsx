import React, { useState } from 'react';
import Modal from 'react-modal';

function ModalSign() {
const [openModal, setOpenModal] = useState(false);

function handleOpenModal() {
    setOpenModal(true)
}

function handleCloseModal() {
    setOpenModal(false)
}


  return (
    <div>
        <button 
        type='button' onClick={handleOpenModal}
        >
            Sign in
        </button>
       
    </div>
)
};

export default ModalSign;
