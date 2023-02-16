import React from 'react';

import Text from '.';

import {DEFAULT_FONT} from '~constants/styles';
import {render} from '~helpers/testing';

describe('<BasicButton />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Text>Hello</Text>);
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has the same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should convert font weight to font family', () => {
    const TextComponent = render(
      <Text style={{fontWeight: '800'}}>Hello</Text>,
    );
    const jsonComponent = TextComponent.toJSON() as any;
    expect(jsonComponent.props.style.fontFamily).toBe(DEFAULT_FONT.bold);
  });
});
