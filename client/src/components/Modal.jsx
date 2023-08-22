import { ModalOverlay, ModalContent, IsModalBtn } from "@/styles/ModalStyle";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      {isModal && (
        <>
          <ModalOverlay onClick={toggleModal}>asd</ModalOverlay>
          <ModalContent>
            <button className="close" onClick={toggleModal}>
              x
            </button>
            <h1>Discard question</h1>
            <h3>
              Are you sure you want to discard this question? This cannot be
              undone.
            </h3>
            <Link to={"/Questions/List"}>
              <button className="discard">Discard question</button>
            </Link>
            <button className="cancel" onClick={toggleModal}>
              Cancel
            </button>
          </ModalContent>
        </>
      )}
    </>
  );
};

export default Modal;
