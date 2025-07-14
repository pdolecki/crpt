import { inject, Injectable } from "@angular/core";
import { PortfolioStore } from "./portfolio-store";

@Injectable({
  providedIn: 'root',
})
export class PortfolioFacade {
  private readonly store = inject(PortfolioStore);

  readonly kasPrice = this.store.kasPrice;
  readonly positions = this.store.positions;
  readonly totals = this.store.totals;
  readonly balances = this.store.balances;
  readonly isLoading = this.store.isLoading;
  readonly isError = this.store.isError;
}
