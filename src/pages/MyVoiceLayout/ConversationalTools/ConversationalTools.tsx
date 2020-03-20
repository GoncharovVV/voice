import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import InfoWithBar from '../../../components/InfoWithBar';
import './ConversationalTools.scss';
import { useForm } from 'react-hook-form';
import CheckBox from '../../../components/Auth/CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import {
  getConversationToolsAction, onUpdateCurrentToolAction,
  // onUpdateCurrentToolAction
} from '../../../store/actions/conversationToolsActions';
import {
  // IConversationTools,
  IToolsSteps, Urls
} from '../../../utils/types';
import Loading from '../../../components/Loading';
import CardList from '../../../components/CardList';
import ConversationToolsAside from '../../../components/ConversationToolsAside';
import { closeMenuAction } from '../../../store/actions/toggleMenuActions';

export interface ConversationalToolsProps {}

const ConversationalTools: React.FC<ConversationalToolsProps> = () => {
  const stepsValuesDefault: IToolsSteps = {
    completed: {
      title: 'enabled',
      value: 0
    },
    needed: {
      title: 'available',
      value: 0
    }
  };
  const link = {
    title: 'UPGRADE FOR MORE',
    url: `${Urls.CHOOSE_PLAN}`
  };
  const { register, watch } = useForm<any>();
  const conversationTools = useSelector((state: any) => state.conversationTools.details);
  const toggleMenu = useSelector((state: any) => state.toggleMenu);
  const dispatch = useDispatch();
  const selectedFilter = watch('enabled');
  const unSelectedFilter = watch('disabled');
  const [completionRate, setCompletionRate] = useState<string>('0%');
  const [stepsValue, setStepsValue] = useState<IToolsSteps>(stepsValuesDefault);
  const [infoTitle, setInfoTitle] = useState<string>('You can only choose :num for the :plan plan');
  const [cards, setCards] = useState<any[]>([]);
  useEffect(() => {
    dispatch(getConversationToolsAction());
  }, [dispatch]);
  useEffect(() => {
    if (conversationTools) {
      const { selected, toolsForSelection, plan } = conversationTools;
      if (toolsForSelection === selected.length) {
        setCompletionRate('100%');
      } else {
        setCompletionRate(`${(100 / toolsForSelection) * selected.length}%`);
      }
      setStepsValue((values: IToolsSteps) => {
        const newValues: IToolsSteps = { ...values };
        newValues.completed.value = selected.length;
        newValues.needed.value = toolsForSelection - selected.length;
        return newValues;
      });
      setInfoTitle((title: string) => {
        let newTitle = title;
        newTitle = newTitle.replace(':num', toolsForSelection);
        newTitle = newTitle.replace(':plan', plan);
        return newTitle;
      });
    }
  }, [conversationTools]);
  useEffect(() => {

    if (conversationTools) {
      const { selected, available } = conversationTools;
      if (selectedFilter && unSelectedFilter) {
        setCards([...selected, ...available]);
      } else if (selectedFilter) setCards([...selected]);
      else if (unSelectedFilter) setCards([...available]);
      else setCards([]);
    }
  }, [selectedFilter, unSelectedFilter, conversationTools]);
  const handleClose = () => {

    dispatch(closeMenuAction());
    dispatch(onUpdateCurrentToolAction({value: '', selected: false}));
  };
  
  return (
    <>
      <Header title="Conversational Tools" subTitleText="My VoiceFront" />
      <div className="content">
        {conversationTools ? (
          <div className="cards__content">
            <div className="white-box tools__row">
              <InfoWithBar
                title={infoTitle}
                barWidth={completionRate}
                steps={stepsValue}
                link={link}
              />
            </div>
            <div className="filters flex flex__align_baseline">
              <h3 className="filters__title">Tools</h3>
              <CheckBox
                register={register}
                label="Enabled"
                id="enabled-tools"
                name="enabled"
                checked={true}
              />
              <CheckBox
                register={register}
                label="Disabled"
                id="disabled-tools"
                name="disabled"
                checked={true}
                />
            </div>
            {cards.length > 0 && <CardList cards={cards} cardType="tools" />}

            {!selectedFilter && !unSelectedFilter ? (
              <span className="text text_blue">Please select one the checkboxes</span>
            ) : (
              selectedFilter &&
              !unSelectedFilter &&
              conversationTools.selected.length === 0 && (
                <span className="text text_blue">Enable at least one tool to see here</span>
              )
            )}
          </div>
        ) : (
          <Loading />
        )}
        <ConversationToolsAside />
        {toggleMenu.isToolOpen && (
          <button type="button" className="overlay overlay__tool" onClick={handleClose}></button>
        )}
      </div>
    </>
  );
};

export default ConversationalTools;
