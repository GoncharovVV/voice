import React, { useEffect, useState } from 'react';
import AsideRight from '../AsideRight';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { getEditToolAction, onCancelGetEditToolAction } from '../../store/actions/editToolActions';
import MessagesList from '../MessagesList';
import './ConversationToolsAside.scss';
import { closeMenuAction } from '../../store/actions/toggleMenuActions';
import {
  onUpdateCurrentToolAction,
  postToggleConversationToolAction
} from '../../store/actions/conversationToolsActions';
import { useHistory } from 'react-router-dom';
import { Urls } from '../../utils/types';
export interface ConversationToolsAsideProps {}

const ConversationToolsAside: React.FC<ConversationToolsAsideProps> = () => {
  const toolType = useSelector((state: any) => state.toolType);
  const editTool = useSelector((state: any) => state.editTool.details);
  const editToolError = useSelector((state: any) => state.editTool.error);
  const toggleMenu = useSelector((state: any) => state.toggleMenu);
  const conversationTools = useSelector((state: any) => state.conversationTools.details);
  const [isUpgradePlan, setIsUpgradePlan] = useState<boolean>(false);
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    if (conversationTools) {
      const { toolsForSelection, selected } = conversationTools;
      // console.log(details)
      setIsUpgradePlan(toolsForSelection === selected.length && !toolType.selected);
    }
  }, [conversationTools, toolType]);
  useEffect(() => {
    if (toolType && toolType.value.length > 0) {
      dispatch(getEditToolAction());
    }
    return () => dispatch(onCancelGetEditToolAction());
  }, [toolType, dispatch]);

  const handleToggleTool = () => {
    console.log('handleToggleTool');
    const { value, selected } = toolType;
    dispatch(postToggleConversationToolAction());
    dispatch(onUpdateCurrentToolAction({ value, selected: !selected }));
  };
  const handleClose = () => {
    dispatch(closeMenuAction());
    dispatch(onUpdateCurrentToolAction({ value: '', selected: false }));
  };
  const handleUpgrade = () => {
    history.push(Urls.CHOOSE_PLAN);
  };
  return (
    <AsideRight asideClass={`aside_conversational ${toggleMenu.isToolOpen ? 'open' : 'close'}`}>
      <>
        <button type="button" className="aside__close" onClick={handleClose}>
          <Close className="svg-icon aside__close-icon" />
        </button>

        {editToolError && <div className="text text_blue aside-section__text">{editToolError}</div>}
        {toolType.value.length > 0 && editTool && (
          <>
            <p className="text text_blue aside-section__title">{editTool.label}</p>
            <div className="text text_blue aside-section__text">{editTool.description}</div>
            <MessagesList messages={editTool.dialogue.messages} />
            <div className="underline_grey"></div>
            {editTool.tip && (
              <dl className="description__list">
                <dt className="description__term">Pro tip:</dt>
                <dd className="description__definition"> {editTool.tip}</dd>
              </dl>
            )}
            {isUpgradePlan && !toolType.selected ? (
              <button className="button button_rounded" type="button" onClick={handleUpgrade}>
                Upgrade Your Plan
              </button>
            ) : (
              <button className="button button_rounded" type="button" onClick={handleToggleTool}>
                {toolType.selected ? 'DISABLE TOOL' : 'ENABLE TOOL'}
              </button>
            )}
          </>
        )}
      </>
    </AsideRight>
  );
};

export default ConversationToolsAside;
