import React from 'react';
import { shallow } from 'enzyme';

import CardList from './CardList';

describe('<CardList />', () => {
  it('should render component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'Kryten',
        username: 'Wildman',
        email: 'robogod@reddwarf.com',
      },
    ];

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
