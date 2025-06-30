import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStore } from '../../shared/data-access/portfolio-store';
import { ExpandableList } from './ui/expandable-list';
import { SomethingWentWrong } from '../../shared/ui/something-went-wrong';
import { Loading } from '../../shared/ui/loading';

@Component({
  selector: 'app-portfolio',
  imports: [ExpandableList, SomethingWentWrong, Loading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="portfolio">
      @if (portfolioStore.isError()) {
      <app-something-went-wrong></app-something-went-wrong>
      } @else if (portfolioStore.isLoading()) {
      <app-loading></app-loading>
      } @else {
      <app-expandable-list
        [kasPrice]="portfolioStore.kasPrice()"
        [positions]="portfolioStore.positions()"
        [kasTotal]="portfolioStore.totals.kas()"
        [usdTotal]="portfolioStore.totals.usd()"
        [kasBalance]="portfolioStore.balances.kas()"
        [usdBalance]="portfolioStore.balances.usd()"
      ></app-expandable-list>
      }
    </div>
  `,
  styles: `
    .portfolio {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 0 5rem;
    }
  `,
})
export default class Portfolio {
  protected readonly portfolioStore = inject(PortfolioStore);
}
