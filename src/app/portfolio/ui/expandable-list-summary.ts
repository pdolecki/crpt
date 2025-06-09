import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-expandable-list-summary',
  template: `
    <div class="summary">
      <div class="kas">
        <span>{{ kasBalance() | number : '1.2-2' }} KAS</span>
        <span>{{ kasTotal() | number : '1.2-2' }} KAS</span>
      </div>
      <div class="dolars">
        <span>({{ usdBalance() | number : '1.2-2' }}$)</span>
        <span>({{ usdTotal() | number : '1.2-2' }}$)</span>
      </div>
    </div>
  `,
  styles: `
    @use "../../../styles/variables" as *;
    .summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: $space-sm;
        border-top: 2px solid $color-primary;
        .kas, .dolars {
          display: flex;
          flex-direction: column;
          font-size: $font-size-lg;
        }
        .dolars {
          color: $color-gray-100
        }
      }
  `,
  imports: [DecimalPipe],
})
export class ExpandableListSummary {
  kasTotal = input.required<number>();
  usdTotal = input.required<number>();
  kasBalance = input.required<number>();
  usdBalance = input.required<number>();
}
