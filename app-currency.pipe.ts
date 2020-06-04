import { Pipe, PipeTransform } from '@angular/core';
/*
 * Take a number|string, return a default value from a formatted string with commas
 * Usage:
 *   value | appCurrency:0
 * Example:
 *   Input: {{ '10690000' | appCurrency }}
 *   Output: 10,690,000
*/

const PADDING = '000000';

@Pipe({
  name: 'appCurrency'
})
export class AppCurrencyPipe implements PipeTransform {
  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    // TODO comes from configuration settings
    this.DECIMAL_SEPARATOR = '.';
    this.THOUSANDS_SEPARATOR = ',';
  }

  transform(value: number | string, fractionSize: number = 0): string {
    value = value || '';
    let [integer, fraction = ''] = value.toString()
      .split(this.DECIMAL_SEPARATOR);

    fraction = fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : '';

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

    return integer ? integer + fraction : '';
  }

  parse(value: string, fractionSize: number = 0): string {
    let [integer, fraction = ''] = (value || '').split(this.DECIMAL_SEPARATOR);

    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : '';

    return integer ? integer + fraction : '';
  }
}
