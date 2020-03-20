import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import ModalContainer from '../../ModalContainer';
import { useSelector } from 'react-redux';
import { ReactComponent as Camera } from '../../../assets/icons/chat_camera.svg';
import './DetailsDone.scss';
import { ReactComponent as Email } from '../../../assets/icons/email.svg';
import NotifyStatic from '../../NotifyStatic';
export interface DetailsDoneProps {}

const DetailsDone: React.FC<DetailsDoneProps> = () => {
  const [open, setOpen] = useState(false);
  const eCommercePlatform: any = useSelector(
    (state: any) => state.eCommercePlatform
  );
  console.log(eCommercePlatform);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <h1 className="done__title">
        Thank you so much <br /> for registering.
      </h1>
      <ModalContainer open={open} handleClose={handleClose} title="">
        <InlineWidget url="https://calendly.com/voicefront/call-with-voicefront" />
      </ModalContainer>
      {eCommercePlatform.suported ? (
        <>
          <NotifyStatic text="We'll be reviewing your application as soon as we can, and we'll send you and email once it's approved." hideIcon={false} nameClass="email__notify">
            <Email className="svg-icon success-icon"/>
          </NotifyStatic>
          <Camera className="svg-icon done__icon" />
          <p className="done__text">
            Also, we'd really like to get to know you better, and we think that
            a video meeting will be a good way to do it.
          </p>
          <div className="form__row">
            <button className="button done__button" onClick={handleOpen}>
              schedule a meeting
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="done__text">
            Unfortunately we don't support '{eCommercePlatform.platform.label}' yet. We
            will let you know once we do. If you want to talk to us in the future and want to
            understand when '{eCommercePlatform.platform.label}' will be supported, email us at: <a className="done__mail" href="mailto:support@voicefront.ai">support@voicefront.ai</a>
          </p>
        </>
      )}
    </>
  );
};

export default DetailsDone;
