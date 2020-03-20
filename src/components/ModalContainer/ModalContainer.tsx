import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import React, { ReactNode } from 'react';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import './ModalContainer.scss';

export interface ModalContainerProps {
  open: boolean;
  handleClose: () => void;
  children?: ReactNode;
  modalHolderClass?: string;
  title: string;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  open,
  handleClose,
  children,
  modalHolderClass,
  title
}) => {
  const classNames = ['modal__content'];
  if (modalHolderClass) classNames.push(modalHolderClass);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classNames.join(' ')}>
            <div className="modal__close_holder">
              <button type="button" className="modal__close" onClick={handleClose}>
                <Close className="svg-icon" />
              </button>
            </div>
            <h1 className="modal__title text_center">{title}</h1>
            {children}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalContainer;
