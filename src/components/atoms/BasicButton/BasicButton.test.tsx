import React from 'react';
import {Text} from 'react-native';

import {fireEvent} from '@testing-library/react-native';

import BasicButton from '.';

import {render} from '~helpers/testing';

describe('<BasicButton />', () => {
  let component: any;
  const onPressMock = jest.fn();

  beforeEach(() => {
    component = render(
      <BasicButton onPress={onPressMock}>
        <Text>Press</Text>
      </BasicButton>,
    );
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call onPress callback on tapped it', () => {
    const button = component.getByText('Press');
    fireEvent(button, 'press');
    expect(onPressMock).toBeCalled();
  });
});
