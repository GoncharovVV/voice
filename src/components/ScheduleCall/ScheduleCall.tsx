import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import ModalContainer from '../ModalContainer';
import './ScheduleCall.scss';
export interface ScheduleCallProps {}

const ScheduleCall: React.FC<ScheduleCallProps> = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <button type="button" className="schedule__containser" onClick={handleClick}>
        <div className="schedule__icon-holder">
          <Phone className="svg-icon phone-icon" />
        </div>
        <p className="schedule__text">Schedule a call with us if you need help with that. </p>
      </button>
      <ModalContainer open={open} handleClose={handleClose} title="">
        <InlineWidget url="https://calendly.com/voicefront/setup-amazon-pay" />
      </ModalContainer>
    </>
  );
};

export default ScheduleCall;
