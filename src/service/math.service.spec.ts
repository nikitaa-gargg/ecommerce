import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    service = new MathService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('adds two numbers', () => {
    expect(service.add(2, 3)).toEqual(5);
  });

  it('subtracts two numbers', () => {
    expect(service.subtract(30, 3)).toEqual(27);
  });

  it('throws on divide by zero', () => {
    expect(() => service.divide(30, 0)).toThrowError('Cannot divide by zero');
  });
});
