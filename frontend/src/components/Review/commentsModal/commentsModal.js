import React, { useState } from "react";
import { Modal } from "../../context/Modal";

function CommentsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Post a review</button>
      {showModal && <Modal onClose={() => setShowModal(false)}></Modal>}
    </>
  );
}

export default CommentsModal;
