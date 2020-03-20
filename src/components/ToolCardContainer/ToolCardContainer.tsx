import React, {MouseEvent, useEffect, useState} from 'react';
import { ReactComponent as VoiceCheckIcon } from '../../assets/icons/check.svg';
import { onCancelPostVoicesAction } from '../../store/actions/voicesActions';
import CardItem from '../CardItem';
import ToolIcons from './ToolIcons';
import { useSelector, useDispatch } from 'react-redux';
import { onUpdateCurrentToolAction, postToggleConversationToolAction } from '../../store/actions/conversationToolsActions';
import { toggleToolMenuAction } from '../../store/actions/toggleMenuActions';
import { Urls } from '../../utils/types';
import { useHistory } from 'react-router-dom';


export interface ToolCardContainerProps {
  item: any;
}

const ToolCardContainer: React.FC<ToolCardContainerProps> = ({ item }) => {
  const toolType = useSelector((state: any) => state.toolType);
  const conversationTools = useSelector((state: any) => state.conversationTools.details);
  const dispatch = useDispatch();
  let history = useHistory();
  const [toolEdit, setToolEdit] = useState<boolean>(false);
  const handleSelect = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const {type, selected} = item;
    dispatch(onUpdateCurrentToolAction({value: type, selected}));
    dispatch(toggleToolMenuAction());
  };
  useEffect(() => {
    setToolEdit(toolType.value === item.type);
  }, [toolType, setToolEdit, item]);
  const onCheckClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const { selected, toolsForSelection } = conversationTools;
    if ((toolsForSelection === selected.length) && !item.selected) {
      history.push(Urls.CHOOSE_PLAN);
    }
    else {
      dispatch(postToggleConversationToolAction({ value: item.type, selected: item.selected }));
    }
  };
  const toolsImage = (
    <div className="card-item__image card-item__image_tools">
      <ToolIcons typeIcon={item.type} />
    </div>
  );
  const toolCheck = (
    <button
      type="button"
      className="card-item__check card-item__check_border"
      onClick={(event: MouseEvent<HTMLElement>) => {onCheckClick(event)}}>
      <VoiceCheckIcon className="svg-icon" />
    </button>
  );

  return (
    <CardItem
      label={item.label}
      selected={item.selected}
      image={toolsImage}
      toolEdit={toolEdit}
      checkButton={toolCheck}
      handleSelect={handleSelect}
      unsubscribe={() => onCancelPostVoicesAction()}
    />
  );
};

export default ToolCardContainer;
