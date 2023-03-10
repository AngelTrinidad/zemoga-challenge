import React from 'react';
import {Text} from 'react-native';

import BasicContainer from '.';

import {render} from '~helpers/testing';

describe('<BasicContainer />', () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <BasicContainer>
        <Text>Hello</Text>
      </BasicContainer>,
    );
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
