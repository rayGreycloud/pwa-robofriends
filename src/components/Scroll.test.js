import React from 'react';
import { shallow } from 'enzyme';

import Scroll from './Scroll';

describe('<Scroll />', () => {
  it('should render component', () => {
    const mockChildren = <div>Child</div>;
    expect(shallow(<Scroll children={mockChildren} />)).toMatchSnapshot();
  });
});
