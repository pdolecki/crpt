import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from './data-access/portfolio-store';
import { DecimalPipe } from '@angular/common';
import { Loading } from './components/loading';
import { PortfolioPosition } from './components/portfolio-position';

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DecimalPipe,
    Loading,
    PortfolioPosition,
  ],
  template: `
    @if (kasTotal() && usdTotal()) {
      <div class="portfolio">
        <h2 class="header">
          <span>KAS:</span>
          {{ kasPrice() }}$
        </h2>

        @for (position of positions(); track position.ticker) {
          <app-portfolio-position
            [position]="position"
          ></app-portfolio-position>
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
