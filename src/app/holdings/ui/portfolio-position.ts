import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Position } from '../interfaces/position';
import { NumberFormat } from '../pipes/number-format';
import { DecimalFormat } from '../pipes/decimal-format';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-portfolio-position',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NumberFormat, DecimalFormat, DecimalPipe],
  template: `
    <details class="details">
      <summary class="summary">
        <div class="image">
          <img [src]="position().iconUrl" />
        </div>
        <h3>
          {{ position().ticker }}
        </h3>
        <h3>
          KAS:
          <span>
            {{ position().amount * position().price.floorPrice | numberFormat }}
          </span>
        </h3>
        <h3>
          <span> {{ position().price.floorPrice | decimalFormat }} KAS </span>
        </h3>
        <h3>
          24h:
          @if (position().price.change24hInKas > 0) {
            <span class="green">
              +{{ position().price.change24hInKas | number: '1.1-1' }}%
            </span>
          } @else {
            <span class="red">
              {{ position().price.change24hInKas | number: '1.1-1' }}%
            </span>
          }
        </h3>
      </summary>

      <!-- <div class="content">
            <h4>Operations:</h4>
            @for (operation of position().operations; track operation.date) {
              <p>{{ operation.date }}</p>
              <div class="operation">
                <span>{{ operation.type }}</span>
                <span> - </span>
                <span>{{ operation.amount | numberFormat }}</span>
                <span> - </span>
                <span>{{ operation.price }} KAS</span>
              </div>
            }
          </div> -->
    </details>
  `,
  styles: `
    .summary {
      border-top: 2px solid var(--color-primary);
      padding: 5px 0;
      display: grid;
      grid-template-columns: 1.25fr 2fr 2fr;
      grid-template-rows: repeat(2, auto);
      .image {
        grid-row: span 2;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 40px;
          height: 40px;
        }
      }
      h3 {
        margin: 0;
        color: var(--color-white);
        span {
          color: var(--color-primary);
          &.green {
            color: var(--color-green);
          }
          &.red {
            color: var(--color-red);
          }
        }
      }
    }
  `,
})
export class PortfolioPosition {
  public readonly position = input.required<Position>();
}
