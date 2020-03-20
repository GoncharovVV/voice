import { IAction } from '../../utils/authTypes';
import { IMessages } from '../../utils/types';
import {
  GET_BASIC_DIALOGUE_MESSAGES_REQUEST,
  GET_BASIC_DIALOGUE_MESSAGES_SUCCESS,
  GET_BASIC_DIALOGUE_MESSAGES_ERROR,
  POST_UPDATE_MESSAGE_SUCCESS
} from '../../utils/constants/mainActions';
import { handleUpdateMessages } from '../../utils/helpers';
export interface IBasicMessages {
  details: null | IMessages[];
  isLoading: boolean;
  error: boolean;
}
const basicMessages = {
  details: null,
  isLoading: false,
  error: false
};

const updateBasicDialogueMessages = (state: any, action: IAction): any => {
  if (!state) {
    return basicMessages;
  }
  const { basicDialogueMessages } = state;
  switch (action.type) {
    case GET_BASIC_DIALOGUE_MESSAGES_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_BASIC_DIALOGUE_MESSAGES_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case GET_BASIC_DIALOGUE_MESSAGES_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    case POST_UPDATE_MESSAGE_SUCCESS:
      return {
        details: handleUpdateMessages(basicDialogueMessages.details, action.payload),
        isLoading: false,
        error: false
      };
    default:
      return basicDialogueMessages;
  }
};

export default updateBasicDialogueMessages;
