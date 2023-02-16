import React from 'react';

import FavButton from '.';

import {render} from '~helpers/testing';

describe('<FavButton />', () => {
  it('should render correctly', () => {
    const component = render(<FavButton isFavorite />);
    expect(component).toBeDefined();
  });

  it('should has same snapshot(with isFavorite prop)', () => {
    const component = render(<FavButton isFavorite />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should has same snapshot(with isFavorite=false prop)', () => {
    const component = render(<FavButton isFavorite={false} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
