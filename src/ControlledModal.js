import styled from "styled-components";

export const ControlledModal = ({ shouldShow, children, onClose }) => {

  const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.55);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;

  const ModalBody = styled.div`
    background-color: #32f0ed;
    color: #000;
    margin: 10rem auto;
    padding: 2rem;
    width: 50%;
    height: auto;
  `;

  return (
    shouldShow ? (
      <ModalBackdrop onClick={() => onClose()}>
        <ModalBody onClick={(e) => e.stopPropagation()}>
          <button className="modal-button" onClick={() => onClose()}>Close</button>
          {children}
        </ModalBody>
      </ModalBackdrop>
    ): null
  )
}
