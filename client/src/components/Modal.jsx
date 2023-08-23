import { ModalOverlay, ModalContent, IsModalBtn } from "@/styles/ModalStyle";
import { useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ btnText, subText }) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <IsModalBtn className="discard" onClick={toggleModal}>
        {btnText}
      </IsModalBtn>
      {isModal && (
        <>
          <ModalOverlay onClick={toggleModal}>asd</ModalOverlay>
          <ModalContent>
            <button className="close" onClick={toggleModal}>
              x
            </button>
            <h1>{btnText}</h1>
            <h3>{subText}</h3>
            <Link to={"/Questions/List"}>
              <button className="discard">{btnText}</button>
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
