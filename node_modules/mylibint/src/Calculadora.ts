export class Calculator {
    public static getSum(a: number, b: number): number {
        return a + b;

    }
    public static getSubs(a: number, b: number): number {
        return a - b;

    }
    public static getMul(a: number, b: number): number {
        return a * b;

    }
    public static getDiv(a: number, b: number): number {
        if (b != 0) {
           return a / b;
        }
        else {
            return NaN;
        }
    }
};
