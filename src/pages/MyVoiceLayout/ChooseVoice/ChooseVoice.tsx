import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSound from 'react-sound';
import AsideRight from '../../../components/AsideRight';
import CardList from '../../../components/CardList';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import { stopPlayingAction } from '../../../store/actions/playVoiceActions';
import { getVoicesAction, onCancelGetVoicesAction } from '../../../store/actions/voicesActions';
import { IVoice } from '../../../utils/types';
import './ChooseVoice.scss';

export interface ChooseVoiceProps {}

const ChooseVoice: React.FC<ChooseVoiceProps> = () => {
  const voices: IVoice[] = useSelector((state: any) => state.voices.details);
  const dispatch = useDispatch();
  const voiceToPlay = useSelector((state: any) => state.vioceToPlay);
  const handleSongFinishedPlaying = () => {
    console.log('on finish');
    dispatch(stopPlayingAction());
  };
  useEffect(() => {
    dispatch(getVoicesAction());
    return () => dispatch(onCancelGetVoicesAction());
  }, [dispatch]);
  return (
    <>
      <Header title="Choose your voice" subTitleText="My VoiceFront" />
      <div className="content">
        <div className="cards__content">
          {voices ? <CardList cardType="voice" cards={voices} /> : <Loading />}
        </div>
        <AsideRight
          asideClass="aside-section_hide-mobile"
          title="Choose a voice that truly reflects your brand's style.
        Make your customers believe that they are speaking to a real salesperson at your store."
        />
        <ReactSound
          url={voiceToPlay.playUrl}
          playStatus={voiceToPlay.isPlaying ? 'PLAYING' : 'STOPPED'}
          onFinishedPlaying={handleSongFinishedPlaying}
        />
      </div>
    </>
  );
};

export default ChooseVoice;
