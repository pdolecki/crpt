import { Component, inject } from '@angular/core';
import { PortfolioStore } from '../../shared/data-access/portfolio-store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  template: `
    <p>{{ portfolioStore.kasPrice() }}</p>
    <p>{{ portfolioStore.positions() | json }}</p>
  `,
  styles: [``],
  imports: [JsonPipe],
})
export default class Portfolio {
  protected readonly portfolioStore = inject(PortfolioStore);
}
