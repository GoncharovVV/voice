
import { GET_CONVERSATION_TOOLS_SUCCESS, GET_CONVERSATION_TOOLS_REQUEST, GET_CONVERSATION_TOOLS_ERROR } from '../../utils/constants/mainActions';

const conversationToolsDefault = {
  details: null,
  isLoading: false,
  error: false
};

const updateConversationTools = (state: any, action: any): any => {
  if (!state) {
    return conversationToolsDefault;
  }
  const { conversationTools } = state;
  switch (action.type) {
    case GET_CONVERSATION_TOOLS_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_CONVERSATION_TOOLS_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case GET_CONVERSATION_TOOLS_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return conversationTools;
  }
};

export default updateConversationTools;
