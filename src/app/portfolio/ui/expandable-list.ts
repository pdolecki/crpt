import { Component, input } from '@angular/core';
import { Position } from '../../../shared/interfaces/position';
import { DecimalFormat } from '../../../shared/pipes/decimal-format';
import { NumberFormat } from '../../../shared/pipes/number-format';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-expandable-list',
  template: `
    <section class="expandable-list">
      <h2 class="header">
        <span>KAS:</span>
        {{ kasPrice() }}$
      </h2>
      @for (position of positions(); track position.ticker) {
      <details class="expandable">
        <summary class="summary">
          <h3>
            {{ position.ticker }}
          </h3>
          <p>{{ position.price.kas | decimalFormat }} KAS</p>
          <p>
            {{ position.amount * position.price.kas | numberFormat }}
          </p>
        </summary>
        <div class="content">
          <h4>Operations:</h4>
          @for(operation of position.operations; track operation.date) {
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
      }
      <div class="footer">
        <div class="kas">
          <span>{{ kasBalance() | number : '1.2-2' }} KAS</span>
          <span>{{ kasTotal() | number : '1.2-2' }} KAS</span>
        </div>
        <div class="dolars">
          <span>({{ usdBalance() | number : '1.2-2' }}$)</span>
          <span>({{ usdTotal() | number : '1.2-2' }}$)</span>
        </div>
      </div>
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
      .footer {
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
    }
  `,
  imports: [DecimalPipe, DecimalFormat, NumberFormat],
})
export class ExpandableList {
  kasInvested = input.required<number>();
  kasMeanPrice = input.required<number>();
  kasPrice = input.required<number>();
  positions = input.required<Position[]>();
  kasTotal = input.required<number>();
  usdTotal = input.required<number>();
  kasBalance = input.required<number>();
  usdBalance = input.required<number>();
}
