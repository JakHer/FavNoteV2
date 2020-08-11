import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH__FAILURE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH__FAILURE';

export const removeItem = (itemType, id) => {
  return {
    type: `REMOVE_ITEM`,
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (
  itemType,
  itemContent,
) => {
  const getId = () =>
    `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: `ADD_ITEM`,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (
  username,
  password,
) => (dispatch) => {
  // AUTHENTICATE_REQUEST
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post(
      `http://localhost:9000/api/user/login`,
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
    .get(`http://localhost:9000/api/notes/type`, {
      params: {
        userID: getState().userID,
        type: itemType,
      },
    })
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
