import React from 'react';
import './MessagesList.scss';
import PlatformMessage from './PlatformMessage';
import UserMessage from './UserMessage';
import './MessagesList.scss';
import { IMessages } from '../../utils/types';
export interface MessagesListProps {
  messages: IMessages[];
}

const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
  
  const renderMessages = messages.map((item: IMessages, idx: number) => {
    switch (item.side) {
      case 'LEFT':
        return <UserMessage message={item} key={`${idx}Message`}/>;
      case 'RIGHT':
        return <PlatformMessage message={item} key={`${idx}Message`}/>;
      default:
        return <span>There is no such side</span>;
    }
  });
  return (
    <ul className="message__list">
      {renderMessages}
    </ul>
  );
};

export default MessagesList;
