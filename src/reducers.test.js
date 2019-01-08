import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    const testAction = {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc',
    };
    expect(reducers.searchRobots(initialStateSearch, testAction)).toEqual({
      searchField: 'abc',
    });
  });
});

describe('requestRobots', () => {
  let initialState = {
    robots: [],
    isPending: false,
  };

  it('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({
      robots: [],
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    const testAction = {
      type: REQUEST_ROBOTS_PENDING,
    };

    expect(reducers.requestRobots(initialState, testAction)).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    const testAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [
        {
          id: 3,
          name: 'Kryten',
          email: 'kryten@reddwarf.com',
        },
      ],
    };

    initialState = {
      robots: [],
      isPending: true,
    };

    expect(reducers.requestRobots(initialState, testAction)).toEqual({
      robots: [
        {
          id: 3,
          name: 'Kryten',
          email: 'kryten@reddwarf.com',
        },
      ],
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    const testAction = {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'error',
    };

    initialState = { robots: [], isPending: true };

    expect(reducers.requestRobots(initialState, testAction)).toEqual({
      robots: [],
      error: 'error',
      isPending: false,
    });
  });
});
