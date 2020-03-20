import React, { useEffect, useState } from 'react';
import MessagesList from '../../../components/MessagesList';
import { useDispatch, useSelector } from 'react-redux';
import { getBasicDialogueMessagesAction, onCancelGetBasicDialogueMessagesAction } from '../../../store/actions/basicDialogueMessagesActions';
import Loading from '../../../components/Loading';
import './BrandMessages.scss';
import Header from '../../../components/Header';
import AsideRight from '../../../components/AsideRight';
export interface BrandMessagesProps {}

const BrandMessages: React.FC<BrandMessagesProps> = () => {
  const basicDialogue = useSelector((state: any) => state.basicDialogueMessages.details);
  const [messages, setMessages] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(basicDialogue);
    if (basicDialogue) {
      setMessages([...basicDialogue]);
    }
  },[basicDialogue]);

  useEffect(() => {
    dispatch(getBasicDialogueMessagesAction());
    return () => dispatch(onCancelGetBasicDialogueMessagesAction());
  }, [dispatch]);

  return (
    <>
      <Header title="Brand messages" subTitleText="My VoiceFront" />
      <div className="content">
        {messages.length > 0 ? <MessagesList messages={messages} /> : <Loading />}
        <AsideRight
          asideClass="aside-section_hide-mobile"
          title="You can add in your own brand's style and tone by changing some of the copy of the dialogue.
        Let your true voice be heard by your customers."/>
      </div>
    </>
  );
};

export default BrandMessages;
