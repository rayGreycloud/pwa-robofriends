import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('<MainPage />', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false,
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should filter search results correctly', () => {
    expect(wrapper.instance().filterRobots([])).toEqual([]);

    const testRobots = [
      {
        id: 3,
        name: 'Kryten',
        email: 'kryten@reddwarf.com',
      },
    ];

    let mockProps = {
      onRequestRobots: jest.fn(),
      robots: testRobots,
      searchField: 'k',
      isPending: false,
    };

    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual(testRobots);

    mockProps.searchField = 'b';
    let expectedResults = [];
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual(expectedResults);
  });

  it('should render loading div if isPending', () => {
    let mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true,
    };

    wrapper = shallow(<MainPage {...mockProps} />);

    expect(wrapper.find('#loader')).toHaveLength(1);
  });
});
