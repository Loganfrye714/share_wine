import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import "./commentsModal.css";

function CommentsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="edit__button">
        edit
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)}></Modal>}
    </>
  );
}

export default CommentsModal;
