import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const searchTerm = 'cat';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: searchTerm,
    };

    expect(actions.setSearchField(searchTerm)).toEqual(expectedAction);
  });
});

describe('requestRobots', () => {
  const store = mockStore();

  it('should create pending action on initial request', () => {
    const searchTerm = 'cat';
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };

    store.dispatch(actions.requestRobots(searchTerm));
    const action = store.getActions();

    expect(action.length).toEqual(1);
    expect(action[0]).toEqual(expectedAction);
  });
});
