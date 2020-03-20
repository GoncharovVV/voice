import React, { MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './CardItem.scss';

export interface CardItemProps {
  label: string;
  image: any;
  buttonAction?: any;
  checkButton?: any;
  voiceSelected?: any;
  handleSelect: any;
  unsubscribe: any;
  selected: boolean;
  toolEdit?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({
  label,
  image,
  buttonAction = null,
  voiceSelected = null,
  checkButton = null,
  handleSelect,
  unsubscribe,
  selected = false,
  toolEdit = false
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(unsubscribe());
  }, [dispatch, unsubscribe]);

  return (
    <li className={`card-item ${selected ? 'card-item__selected' : ''} ${toolEdit ? 'active': ''}`}>
      <button
        type="button"
        className={`card-item__link ${buttonAction ? 'card-item__link_button' : ''}`}
        onClick={(event: MouseEvent<HTMLElement>) => {
          handleSelect(event);
        }}
      >
        {image}
        <p className="card-item__title">{label}</p>
        {voiceSelected && voiceSelected}
      </button>
      {buttonAction && buttonAction}
      {checkButton && checkButton}
    </li>
  );
};

export default CardItem;
