import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  it('should render component', () => {
    const mockSearchChange = jest.fn();
    expect(
      shallow(<SearchBox searchChange={mockSearchChange} />),
    ).toMatchSnapshot();
  });
});
