import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'decimalFormat',
})
export class DecimalFormat implements PipeTransform {
  transform(value: number): string {
    if (value === 0) return '0';

    const absValue = Math.abs(value);
    const sign = value < 0 ? '-' : '';

    if (absValue < 1) {
      const stringValue = absValue.toFixed(20).replace(/0+$/, '');
      const decimalIndex = stringValue.indexOf('.');
      const significantPart = stringValue.slice(decimalIndex + 1);
      const firstNonZeroIndex = significantPart.search(/[1-9]/);

      if (firstNonZeroIndex !== -1) {
        const rawDigits = significantPart.slice(
          firstNonZeroIndex,
          firstNonZeroIndex + 2
        );
        const significantDigits = rawDigits.replace(/0+$/, '');
        const zeroCount = firstNonZeroIndex;

        if (zeroCount > 0) return `${sign}0.(${zeroCount})${significantDigits}`;
        return `${sign}0.${significantDigits}`;
      }
    }

    // For values >= 1
    if (absValue < 1000) {
      return `${sign}${absValue.toFixed(1).replace(/\.0$/, '')}`; // remove .0 if whole number
    }

    // For large numbers (e.g. 123456) – just round it
    return `${sign}${Math.round(absValue).toString()}`;
  }
}
