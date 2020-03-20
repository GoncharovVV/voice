import React from 'react';
import { IMessages } from '../../../utils/types';
import UserImage from '../../UserImage';
export interface UserMessageProps {
  message: IMessages;
}

const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
  return (
    <li className="message__item">
      <UserImage messageSide={message.side} />
      <div className="message__text message__text_user">
        <p className="message__title">
          {message.title}
        </p>
        {message.message}
      </div>
    </li>
  );
};

export default UserMessage;
