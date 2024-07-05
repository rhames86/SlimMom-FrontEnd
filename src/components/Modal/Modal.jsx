import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Overlay, ModalContainer, CloseModal, CloseIcon } from './modal.styled';
import Recommendations from './Recommendations/Recommendations';
import { toggleModal } from 'redux/modal/modal-reducer';
import { getIsModalOpen } from 'redux/modal/modal-selectors';

const modalDiv = document.querySelector('#modal');
function Modal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsModalOpen);

  const handleOnBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModal(!isModalOpen));
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        dispatch(toggleModal(!isModalOpen));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isModalOpen]);

  return ReactDOM.createPortal(
    <Overlay onClick={handleOnBackdropClick}>
      <ModalContainer>
        <CloseModal
          onClick={() => dispatch(toggleModal(!isModalOpen))}
          type="button"
        >
          <CloseIcon />
        </CloseModal>
        <Recommendations />
      </ModalContainer>
    </Overlay>,
    modalDiv
  );
}

export default Modal;
