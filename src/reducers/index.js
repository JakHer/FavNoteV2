import {
  ADD_ITEM,
  REMOVE_ITEM,
  // AUTH_REQUEST,
  AUTH_SUCCESS,
  // AUTH_FAILURE,
  FETCH_SUCCESS,
} from 'actions';

const initialState = {};

const rootReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...action.payload.data,
        ],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[
            action.payload.itemType
          ].filter(
            (item) =>
              item.id !== action.payload.id,
          ),
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
