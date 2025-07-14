import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExpandableList } from './ui/expandable-list';
import { SomethingWentWrong } from './ui/something-went-wrong';
import { Loading } from './ui/loading';
import { PortfolioFacade } from './data-access/portfolio-facade';

@Component({
  selector: 'app-portfolio',
  imports: [ExpandableList, SomethingWentWrong, Loading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="portfolio">
      @if (portfolioFacade.isError()) {
      <app-something-went-wrong></app-something-went-wrong>
      } @else if (portfolioFacade.isLoading()) {
      <app-loading></app-loading>
      } @else {
      <app-expandable-list
        [kasPrice]="portfolioFacade.kasPrice()"
        [positions]="portfolioFacade.positions()"
        [kasTotal]="portfolioFacade.totals.kas()"
        [usdTotal]="portfolioFacade.totals.usd()"
        [kasBalance]="portfolioFacade.balances.kas()"
        [usdBalance]="portfolioFacade.balances.usd()"
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
  protected readonly portfolioFacade = inject(PortfolioFacade);
}
