import { createStore } from 'redux';
import notesApp from 'reducers';

const store = createStore(
  notesApp,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

export default store;
