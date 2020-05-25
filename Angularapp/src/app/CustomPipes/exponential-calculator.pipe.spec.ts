import { ExponentialCalculatorPipe } from './exponential-calculator.pipe';

describe('ExponentialCalculatorPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponentialCalculatorPipe();
    expect(pipe).toBeTruthy();
  });
});
