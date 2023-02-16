import React from 'react';

import HeaderTitle from '.';

import {render} from '~helpers/testing';

describe('<HeaderTitle />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<HeaderTitle title="Hello" />);
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
