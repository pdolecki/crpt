import { computed, Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { PORTFOLIO } from '../constants/portfolio';
import { Position } from '../interfaces/position';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  private readonly KAS_INVESTED = 83500;
  private readonly KAS_MEAN_PRICE = 0.144;
  private readonly PORTFOLIO = PORTFOLIO;

  readonly kasInvested = signal<number>(this.KAS_INVESTED);
  readonly kasMeanPrice = signal<number>(this.KAS_MEAN_PRICE);
  readonly kasPrice = computed<number>(
    () => this._kasPrice.value()?.price ?? 0
  );
  readonly positions = computed<Position[]>(() =>
    this._positions.value()
      ? this._positions
          .value()!
          .results.map((position) => ({
            ...this.PORTFOLIO[position.ticker][0],
            ...position,
          }))
          .filter((position) => position.price.kas)
          .sort(
            (a, b) =>
              b.amount * (b.price.kas ?? 0) - a.amount * (a.price.kas ?? 0)
          )
      : []
  );
  readonly kasTotal = computed<number>(() =>
    this.positions().reduce((sum, pos) => sum + pos.amount * pos.price.kas, 0)
  );
  readonly usdTotal = computed<number>(() =>
    this.positions().reduce((sum, pos) => sum + pos.amount * pos.price.usd, 0)
  );
  readonly kasBalance = computed<number>(
    () => this.kasTotal() - this.kasInvested()
  );
  readonly usdBalance = computed<number>(
    () => this.kasInvested() * this.kasMeanPrice() - this.usdTotal()
  );

  private readonly _kasPrice = httpResource<{ price: number }>(
    () => 'https://api.kaspa.org/info/price'
  );
  private readonly _positions = httpResource<{ results: Position[] }>(
    () =>
      `https://api.kas.fyi/token/krc20/marketData?tickers=${Object.keys(
        PORTFOLIO
      ).join(',')}`
  );
}
