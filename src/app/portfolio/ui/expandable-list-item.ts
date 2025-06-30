import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Position } from '../../../shared/interfaces/position';
import { DecimalFormat } from '../../../shared/pipes/decimal-format';
import { NumberFormat } from '../../../shared/pipes/number-format';

@Component({
  selector: 'app-expandable-list-item',
  imports: [DecimalFormat, NumberFormat],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <details class="expandable">
      <summary class="summary">
        <h3>
          {{ position().ticker }}
        </h3>
        <p>{{ position().price.kas | decimalFormat }} KAS</p>
        <p>
          {{ position().amount * position().price.kas | numberFormat }}
        </p>
      </summary>
      <div class="content">
        <h4>Operations:</h4>
        @for(operation of position().operations; track operation.date) {
        <p>{{ operation.date }}</p>
        <div class="operation">
          <span>{{ operation.type }}</span>
          <span> - </span>
          <span>{{ operation.amount | numberFormat }}</span>
          <span> - </span>
          <span>{{ operation.price }} KAS</span>
        </div>
        }
      </div>
    </details>
  `,
  styles: `
    @use "../../../styles/variables" as *;
    .expandable {
      padding: 0 $space-md;
      border-bottom: 2px solid $color-primary;
      .summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          color: $color-gray-100;
        }
        p {
          font-size: $font-size-lg;
          &:last-child {
            color: $color-success;
          }
        }
      }
      .content {
        font-size: $font-size-lg;
        padding-bottom: $space-sm;
        h4, p {
          margin: 0;
        }
        p {
          color: $color-gray-100;
          border-top: 2px solid $color-gray-300;
        }
        .operation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            &:first-child {
              color: $color-success;
            }
            &:nth-child(3) {
              color: $color-error;
            }
            &:last-child {
              color: $color-gray-100;
            }
          }

        }
      }
    }
  `,
})
export class ExpandableListItem {
  position = input.required<Position>();
}
