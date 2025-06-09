import { computed, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import {
  KAS_INVESTED,
  KAS_MEAN_PRICE,
  PORTFOLIO,
} from '../constants/portfolio';
import { Position } from '../interfaces/position';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  readonly kasPrice = computed<number>(
    () => this._kasPrice.value()?.price ?? 0
  );
  readonly positions = computed<Position[]>(() =>
    this._positions.value()
      ? this.mergePositions(this._positions.value()!.results, PORTFOLIO)
      : []
  );

  readonly totals = {
    kas: computed<number>(() =>
      this.positions().reduce((sum, pos) => sum + pos.amount * pos.price.kas, 0)
    ),
    usd: computed<number>(() =>
      this.positions().reduce((sum, pos) => sum + pos.amount * pos.price.usd, 0)
    ),
  };

  readonly balances = {
    kas: computed<number>(() => this.totals.kas() - KAS_INVESTED),
    usd: computed<number>(
      () => this.totals.usd() - KAS_INVESTED * KAS_MEAN_PRICE
    ),
  };

  private readonly _kasPrice = httpResource<{ price: number }>(
    () => `${environment.kasApiUrl}/info/price`
  );
  private readonly _positions = httpResource<{ results: Position[] }>(
    () =>
      `${environment.krc20ApiUrl}/marketData?tickers=${Object.keys(
        PORTFOLIO
      ).join(',')}`
  );

  private mergePositions(
    positions: Position[],
    portfolioMap: Record<string, Position[]>
  ) {
    return positions
      .map((position) => ({
        ...portfolioMap[position.ticker][0],
        ...position,
      }))
      .filter((position) => position.price.kas)
      .sort(
        (a, b) => b.amount * (b.price.kas ?? 0) - a.amount * (a.price.kas ?? 0)
      );
  }
}
