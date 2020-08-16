import {
  AUTH_SUCCESS,
  FETCH_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  ADD_ITEM_SUCCESS,
  LOGOUT_SUCCESS,
} from 'actions';

const initialState = {
  userID: ``,
  // localStorage.getItem('userID'),
  loggedIn: false,
};

const rootReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
        loggedIn: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userID: '',
        loggedIn: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...action.payload.data,
        ],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[
            action.payload.itemType
          ].filter(
            (item) =>
              /* eslint no-underscore-dangle: 0 */
              item._id !== action.payload.id,
            /* eslint-enable */
          ),
        ],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.data,
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
