import { useState } from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ModalBody = styled.div`
  background-color: #fff;
  width: 50%;
  padding: 2rem;
  margin: 10% auto;
  color: #000;
`;

export const Modal = ({ children }) => {
  const [ shouldShowModal, setShouldShowModal ] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShowModal(true)}>Show Modal</button>
      {shouldShowModal &&
        <ModalBackdrop onClick={() => setShouldShowModal(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShowModal(false)}>❌</button>
            {children}
          </ModalBody>
        </ModalBackdrop>
      }
    </>
  )
}
