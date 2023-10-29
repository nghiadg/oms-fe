export class NumberUtils {
  static formatCurrency(value: number) {
    return new Intl.NumberFormat().format(value)
  }
}
