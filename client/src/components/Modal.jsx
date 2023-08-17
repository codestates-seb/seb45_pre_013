import { ModalOverlay, ModalContent, IsModalBtn } from "@/styles/ModalStyle";
import { useState } from "react";

const Modal = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <IsModalBtn className="discard" onClick={toggleModal}>
        Discard question
      </IsModalBtn>
      <ModalOverlay isModal={isModal} onClick={toggleModal} />
      <ModalContent isModal={isModal}>
        <button className="close" onClick={toggleModal}>
          x
        </button>
        <h1>Discard question</h1>
        <h3>
          Are you sure you want to discard this question? This cannot be undone.
        </h3>
        <button className="discard" onClick={toggleModal}>
          Discard question
        </button>
        <button className="cancel" onClick={toggleModal}>
          Cancel
        </button>
      </ModalContent>
    </>
  );
};

export default Modal;
