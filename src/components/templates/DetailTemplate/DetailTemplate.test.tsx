import React from 'react';
import {Text} from 'react-native';

import DetailTemplate from '.';

import {render} from '~helpers/testing';

describe('<DetailTemplate />', () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <DetailTemplate title="Hello">
        <Text>Hello</Text>
      </DetailTemplate>,
    );
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
