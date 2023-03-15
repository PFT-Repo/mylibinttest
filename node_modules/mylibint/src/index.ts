export class Calculator {
  public getSum(a: number, b: number): number {
      return a + b;

  }
  public getSubs(a: number, b: number): number {
      return a - b;

  }
  public getMul(a: number, b: number): number {
      return a * b;

  }
  public getDiv(a: number, b: number): number {
      if (b != 0) {
         return a / b;
      }
      else {
          return NaN;
      }
  }
};