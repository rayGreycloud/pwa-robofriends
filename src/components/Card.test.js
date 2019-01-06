import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
  it('should render component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
