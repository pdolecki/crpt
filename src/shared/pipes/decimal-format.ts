import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'decimalFormat',
})
export class DecimalFormat implements PipeTransform {
  transform(value: number): string {
    if (value === 0) return '0';

    const absValue = Math.abs(value);

    if (absValue < 1) {
      const stringValue = value.toString();
      const decimalIndex = stringValue.indexOf('.');
      const significantPart = stringValue.slice(decimalIndex + 1);
      const firstNonZeroIndex = significantPart.search(/[1-9]/);

      if (firstNonZeroIndex !== -1) {
        const significantDigits = significantPart.slice(
          firstNonZeroIndex,
          firstNonZeroIndex + 2
        );
        const zeroCount = firstNonZeroIndex;

        if (zeroCount > 0) return `0.(${zeroCount})${significantDigits}`;
        return `0.${significantDigits}`;
      }
    }
    return value.toPrecision(2);
  }
}
