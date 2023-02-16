import React from 'react';
import {Text} from 'react-native';

import FlatButton from '.';

import {fireEvent, render} from '~helpers/testing';

describe('<FlatButton />', () => {
  let component: any;
  const onPressMock = jest.fn();

  beforeEach(() => {
    component = render(
      <FlatButton onPress={onPressMock}>
        <Text>Tap it</Text>
      </FlatButton>,
    );
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call onPress callback on tapped it', () => {
    const button = component.getByText('Tap it');
    fireEvent(button, 'press');
    expect(onPressMock).toBeCalled();
  });
});
