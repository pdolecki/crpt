import { Component, input } from '@angular/core';
import { Position } from '../../../shared/interfaces/position';
import { ExpandableListItem } from './expandable-list-item';
import { ExpandableListSummary } from './expandable-list-summary';

@Component({
  selector: 'app-expandable-list',
  template: `
    <section class="expandable-list">
      <h2 class="header">
        <span>KAS:</span>
        {{ kasPrice() }}$
      </h2>

      @for (position of positions(); track position.ticker) {
      <app-expandable-list-item
        [position]="position"
      ></app-expandable-list-item>
      }

      <app-expandable-list-summary
        [kasBalance]="kasBalance()"
        [kasTotal]="kasTotal()"
        [usdBalance]="usdBalance()"
        [usdTotal]="usdTotal()"
      ></app-expandable-list-summary>
    </section>
  `,
  styles: `
    @use "../../../styles/variables" as *;
    .expandable-list {
      display: flex;
      flex-direction: column;
      min-width: 350px;
      border: 4px solid $color-primary;
      border-radius: $space-md;
      cursor: pointer;
      .header {
        margin: 0;
        padding: $space-md ;
        border-bottom: 4px solid $color-primary;
        span {
          color: $color-gray-100;
        }
      }
    }
  `,
  imports: [ExpandableListItem, ExpandableListSummary],
})
export class ExpandableList {
  kasPrice = input.required<number>();

  positions = input.required<Position[]>();

  kasTotal = input.required<number>();
  usdTotal = input.required<number>();
  kasBalance = input.required<number>();
  usdBalance = input.required<number>();
}
