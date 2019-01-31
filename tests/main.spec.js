/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable func-names */

import { expect } from 'chai';
import { sum, sub, multiply, div } from '../src/main';

describe('Calc', () => {
  // Smoke tests
  describe('Smoke tests', () => {
    it('should exists the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists the method `multiply`', () => {
      expect(multiply).to.exist;
      expect(multiply).to.be.a('function');
    });

    it('should exists the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Miltiply', () => {
    it('should return 4 when `multiply(2,2)`', () => {
      expect(multiply(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });
    it('should return a Division by Zero Error when `div(4,0)`', () => {
      expect(div(4, 0)).to.be.an('error');
    });
  });
});
