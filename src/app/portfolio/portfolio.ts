import { Component, inject } from '@angular/core';
import { PortfolioStore } from '../../shared/data-access/portfolio-store';
import { ExpandableList } from './ui/expandable-list';

@Component({
  selector: 'app-portfolio',
  template: `
    <div class="portfolio">
      <app-expandable-list
        [kasPrice]="portfolioStore.kasPrice()"
        [positions]="portfolioStore.positions()"
        [kasTotal]="portfolioStore.totals.kas()"
        [usdTotal]="portfolioStore.totals.usd()"
        [kasBalance]="portfolioStore.balances.kas()"
        [usdBalance]="portfolioStore.balances.usd()"
      ></app-expandable-list>
    </div>
  `,
  styles: `
    .portfolio {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 5rem;
    }
  `,
  imports: [ExpandableList],
})
export default class Portfolio {
  protected readonly portfolioStore = inject(PortfolioStore);
}
