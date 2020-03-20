import React, {MouseEvent} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { stopPlayingAction, playVoiceAction } from '../../store/actions/playVoiceActions';

export interface VoicePlayButtonProps {
  type: any,
  playUrl: any
}

const VoicePlayButton: React.FC<VoicePlayButtonProps> = ({type, playUrl}) => {
  const voiceToPlay = useSelector((state: any) => state.vioceToPlay);
  const dispatch = useDispatch();
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log('toggle play');
    // const { type, playUrl } = item;
    if (voiceToPlay && voiceToPlay.isPlaying && voiceToPlay.type === type) {
      dispatch(stopPlayingAction());
    } else {
      dispatch(playVoiceAction({ type, playUrl }));
    }
  };
  return (
    <button
      type="button"
      onClick={(event: MouseEvent<HTMLElement>) => {
        handleClick(event);
      }}
      className="card-item__play flex flex__align_center"
    >
      PLAY
      {voiceToPlay && voiceToPlay.isPlaying && voiceToPlay.type === type ? (
        <Pause className="svg-icon play-icon" />
      ) : (
        <Play className="svg-icon play-icon" />
      )}
    </button>
  );
};

export default VoicePlayButton;
