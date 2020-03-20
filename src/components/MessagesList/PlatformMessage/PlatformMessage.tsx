import React, { ChangeEvent, useEffect, useState } from 'react';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import { IMessages } from '../../../utils/types';
import UserImage from '../../UserImage';
import { useDispatch, useSelector } from 'react-redux';
import { postUpdateMessageAction } from '../../../store/actions/updateMessageActions';

export interface PlatformMessageProps {
  message: IMessages;
}

const PlatformMessage: React.FC<PlatformMessageProps> = ({ message }) => {
  const loginDetails: any = useSelector((state: any) => state.loginDetails.details);
  const { message: text, title, side, responseType } = message;
  const [classMsgItem, setClassMsgItem] = useState<string[]>(['message__item']);
  const [isEdit, setisEdit] = useState<boolean>(false);
  const [textArea, setTextArea] = useState<string>('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEdit) {
      setClassMsgItem((cls: string[]) => {
        const newCls = [...cls];
        if (newCls.indexOf('message__item_platform') !== -1) {
          newCls.splice(newCls.indexOf('message__item_platform'), 1);
        }
        newCls.push('message__item_edit');
        return newCls;
      });
    } else {
      setClassMsgItem((cls: string[]) => {
        const newCls = [...cls];
        if (newCls.indexOf('message__item_edit') !== -1) {
          newCls.splice(newCls.indexOf('message__item_edit'), 1);
        }
        newCls.push('message__item_platform');
        return newCls;
      });
    }
  }, [isEdit]);

  useEffect(() => {
    if (text) {
      setTextArea(text);
    }
  }, [text]);

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  };

  const handleClick = () => {
    setisEdit((x: boolean) => !x);
    if (responseType !== 'NONE' && isEdit) {
      const { partnerKey } = loginDetails;
      dispatch(postUpdateMessageAction({ message: textArea, responseType, partnerKey }));
    }
  };
  return (
    <li className={classMsgItem.join(' ')}>
      <button className="message__button" onClick={handleClick}>
        {isEdit ? (
          <Check className="svg-icon message__check-icon" />
        ) : (
          <Edit className="svg-icon message__edit-icon" />
        )}
      </button>
      <div className="message__text">
        <p className="message__title">
          {title}
          {
            isEdit && <span className="text_red"> - Editing</span>
          }
        </p>
        {isEdit ? (
          <textarea
            className="message__textarea"
            name="msg-text"
            id="msg-text"
            value={textArea}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => handleOnChange(event)}
          ></textarea>
        ) : (
          <p className="message__text-value">{textArea}</p>
        )}
      </div>
      <UserImage messageSide={side} />
    </li>
  );
};

export default PlatformMessage;
