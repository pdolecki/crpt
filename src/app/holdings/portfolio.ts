import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from './data-access/portfolio-store';
import { DecimalFormat } from './pipes/decimal-format';
import { NumberFormat } from './pipes/number-format';
import { DecimalPipe } from '@angular/common';
import { Loading } from './ui/loading';

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalFormat, NumberFormat, DecimalPipe, Loading],
  template: `
    @if (kasTotal() && usdTotal()) {
      <div class="portfolio">
        <h2 class="header">
          <span>KAS:</span>
          {{ kasPrice() }}$
        </h2>

        @for (position of positions(); track position.ticker) {
          <details class="details">
            <summary class="summary">
              <div class="image">
                <img [src]="position.iconUrl" />
              </div>
              <h3>
                {{ position.ticker }}
              </h3>
              <h3>
                KAS:
                <span>
                  {{
                    position.amount * position.price.floorPrice | numberFormat
                  }}
                </span>
              </h3>
              <h3>
                <span>
                  {{ position.price.floorPrice | decimalFormat }} KAS
                </span>
              </h3>
              <h3>
                24h:
                @if (position.price.change24hInKas > 0) {
                  <span class="green">
                    +{{ position.price.change24hInKas | number: '1.2-2' }}%
                  </span>
                } @else {
                  <span class="red">
                    {{ position.price.change24hInKas | number: '1.2-2' }}%
                  </span>
                }
              </h3>
            </summary>
          </details>
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
        }

        <div class="footer">
          <h3>{{ kasBalance() | number: '1.2-2' }} KAS</h3>
          <h3 class="usd">({{ usdBalance() | number: '1.2-2' }}$)</h3>
          <h3>{{ kasTotal() | number: '1.2-2' }} KAS</h3>
          <h3 class="usd">({{ usdTotal() | number: '1.2-2' }}$)</h3>
        </div>
      </div>
    } @else {
      <app-loading></app-loading>
    }
  `,
  styles: `
    .portfolio {
      width: 350px;
      border: 2px solid var(--color-primary);
      border-radius: 10px;
      .header {
        margin: 10px;
      }
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
      .footer {
        border-top: 2px solid var(--color-primary);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        h3 {
          margin: 0 5px;
          &.usd {
            text-align: end;
            color: var(--color-white);
          }
        }
      }
    }
  `,
})
export default class Portfolio {
  private readonly portfolioStore = inject(PortfolioStore);

  protected readonly kasPrice = this.portfolioStore.kasPrice;
  protected readonly positions = this.portfolioStore.positions;
  protected readonly kasBalance = this.portfolioStore.balances.kas;
  protected readonly usdBalance = this.portfolioStore.balances.usd;
  protected readonly kasTotal = this.portfolioStore.totals.kas;
  protected readonly usdTotal = this.portfolioStore.totals.usd;
}
