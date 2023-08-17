import { ModalOverlay, ModalContent } from "@/styles/ModalStyle";

const Modal = () => {
  return (
    <ModalOverlay>
      <ModalContent>
        <button className="close">x</button>
        <h1>Discard question</h1>
        <h3>
          Are you sure you want to discard this question? This cannot be undone.
        </h3>
        <button className="discard">Discard question</button>
        <button className="cancel">Cancel</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
