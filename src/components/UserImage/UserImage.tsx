import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Platform } from '../../assets/icons/platform.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { IMessageSide } from '../../utils/types';
import './UserImage.scss';

export interface UserImageProps {
  messageSide: IMessageSide;
  userName?: string;
}

const UserImage: React.FC<UserImageProps> = ({ messageSide }) => {
  const basicDialogue = useSelector((state: any) => state.basicDialogueMessages.details);

  const [imageUrl, setimageUrl] = useState<string>('');
  const [imageTitle, setimageTitle] = useState<string>('');
  const [holderClassName, setHolderClassName] = useState<string[]>(['message__logo-holder']);
  useEffect(() => {
    if (basicDialogue?.partnerLogoUrl && messageSide === 'RIGHT') {
      setimageUrl(basicDialogue.partnerLogoUrl);
      setimageTitle(basicDialogue.partnerName);
    }
  }, [basicDialogue, messageSide]);

  useEffect(() => {
    if (holderClassName.length === 1) {
      setHolderClassName((cls: string[]) => {
        const str = messageSide === 'LEFT' ? 'message__logo-user' : 'message__logo-platform';
        const newCls = [...cls];
        newCls.push(str);
        return newCls;
      });
    }
  }, [messageSide, holderClassName]);
  const renderCaseIcon = (messageSide: IMessageSide) => {
    switch (messageSide) {
      case 'LEFT':
        return <User className="svg-icon user-icon" />;
      case 'RIGHT':
        return <Platform className="svg-icon platform-icon" />;
      default:
        return <User className="svg-icon user-icon" />;
    }
  };
  return (
    <div className={holderClassName.join(' ')}>
      {messageSide === 'RIGHT' && imageUrl && imageUrl.length > 0 ? (
        <img className="image_fit" src={imageUrl} alt={imageTitle} />
      ) : (
        renderCaseIcon(messageSide)
      )}
    </div>
  );
};

export default UserImage;
