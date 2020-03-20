import React, {MouseEvent} from 'react';
import { ReactComponent as VoiceCheckIcon } from '../../assets/icons/check.svg';
import { ReactComponent as Platform } from '../../assets/icons/platform.svg';
import CardItem from '../CardItem';
import VoicePlayButton from '../VoicePlayButton';
import { useDispatch } from 'react-redux';
import { postVoicesAction, onCancelPostVoicesAction } from '../../store/actions/voicesActions';
export interface VoiceCardContainerProps {
  item: any;
}

const VoiceCardContainer: React.FC<VoiceCardContainerProps> = ({ item }) => {
  const dispatch = useDispatch();

  const voiceImage = (item: any) => (
    <div
      className={`card-item__image ${
        item.photoUrl && item.photoUrl.length > 0 ? 'card-item__image_transparent' : ''
      }`}
    >
      {item.photoUrl && item.photoUrl.length > 0 ? (
        <img src={item.photoUrl} alt={item.label} className="image_fit" />
      ) : (
        <Platform className="svg-icon card-item__icon" />
      )}
      {item.selected && (
        <span className="card-item__check">
          <VoiceCheckIcon className="svg-icon" />
        </span>
      )}
    </div>
  );
  const buttonPlay = (item: any) => <VoicePlayButton type={item.type} playUrl={item.playUrl} />;
  const voiceSelected = (item: any) => {
    const checkedText = item.selected ? 'SELECTED VOICE' : 'SELECT VOICE';
    return <p className="card-item__checked">{checkedText}</p>;
  };
  const handleSelect = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const { type: voiceType } = item;
    dispatch(postVoicesAction({ voiceType }));
  };
  return (
    <CardItem
      label={item.label}
      selected={item.selected}
      image={voiceImage(item)}
      buttonAction={buttonPlay(item)}
      voiceSelected={voiceSelected(item)}
      handleSelect={handleSelect}
      unsubscribe={()=> onCancelPostVoicesAction()}
    />
  );
};

export default VoiceCardContainer;
