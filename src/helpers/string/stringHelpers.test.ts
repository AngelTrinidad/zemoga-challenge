import {capitalizeFirstLetter} from '.';

describe('String helpers', () => {
  it('should return empty string for an empty entry', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('should capitalize first letter of "testing"', () => {
    expect(capitalizeFirstLetter('testing')).toBe('Testing');
  });
});
