import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import { loadState, saveState } from './localStorage';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = loadState();
const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

// Mount it on the Store
const store = createStoreWithMiddleware(reducers, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//save to localStorage
store.subscribe(() => {
  saveState({
    username: store.getState().username
  });
});

// Then run the saga
sagaMiddleware.run(sagas);

export default store;
