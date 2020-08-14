import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH__FAILURE';

export const REMOVE_ITEM_REQUEST =
  'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS =
  'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE =
  'REMOVE_ITEM_FAILURE';

export const ADD_ITEM_REQUEST =
  'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS =
  'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE =
  'ADD_ITEM_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const removeItem = (itemType, id) => (
  dispatch,
) => {
  dispatch({ type: REMOVE_ITEM_REQUEST });
  console.log(itemType);
  axios.delete(
    `https://fav-note-2.herokuapp.com/api/note/${id}`,
  )``
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          itemType,
          id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
  dispatch({ type: REMOVE_ITEM_FAILURE });
};

export const addItem = (
  itemType,
  itemContent,
) => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post(
      `https://fav-note-2.herokuapp.com/api/note`,
      {
        userID: getState().userID,
        type: itemType,
        ...itemContent,
      },
    )
    .then(({ data }) => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          itemType,
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const authenticate = (
  username,
  password,
) => (dispatch) => {
  // AUTHENTICATE_REQUEST
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post(
      `https://fav-note-2.herokuapp.com/api/user/login`,
      {
        username,
        password,
      },
    )
    .then((payload) => {
      console.log(payload);
      dispatch({
        type: AUTH_SUCCESS,
        payload,
      });
    })
    .catch(
      (err) => console.log(err),
      dispatch({ type: AUTH_FAILURE }),
    );
};

export const fetchItems = (itemType) => (
  dispatch,
  getState,
) => {
  // FETCH_REQUEST
  dispatch({
    type: FETCH_REQUEST,
  });

  return axios
    .get(
      `https://fav-note-2.herokuapp.com/api/notes/type`,
      {
        params: {
          userID: getState().userID,
          type: itemType,
        },
      },
    )
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(
      (err) => console.log(err),
      dispatch({
        type: FETCH_FAILURE,
      }),
    );
};

// id: 1,
// title: 'Wake me up when Vue ends',
// content:
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
// twitterName: 'hello_roman',
// articleUrl: 'https://youtube.com/helloroman',
// created: '1 day',
