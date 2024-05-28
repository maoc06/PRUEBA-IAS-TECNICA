import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number | string, ...args: unknown[]): unknown {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
}
