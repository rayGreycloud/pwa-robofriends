import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundry from './ErrorBoundry';

describe('<ErrorBoundry />', () => {
  let wrapper;

  it('should render loading div if isPending', () => {
    let mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true,
    };

    wrapper = shallow(<ErrorBoundry {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
