/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable func-names */

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  // Smoke tests
  it('should return `Fizz` if multiple of 3.', () => {
    expect(FizzBuzz(3)).to.equal('Fizz');
    expect(FizzBuzz(6)).to.equal('Fizz');
  });
  it('should return `Buzz` if multiple of 5.', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` if multiple of 3 and 5.', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });
  it('should return the number if non-multiple of 3 and 5.', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
  it('should return the zero when 0.', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
