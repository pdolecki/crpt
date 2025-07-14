import { computed, Injectable, Signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import {
  KAS_INVESTED,
  KAS_MEAN_PRICE,
  PORTFOLIO,
} from '../constants/portfolio';
import { Position } from '../interfaces/position';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioStore {
  private readonly _kasPrice = httpResource<{ price: number }>(
    () => `${environment.kasApiUrl}/info/price`
  );

  private readonly _positions = httpResource<{ results: Position[] }>(
    () =>
      `${environment.krc20ApiUrl}/marketData?tickers=${Object.keys(
        PORTFOLIO
      ).join(',')}`
  );

  readonly kasPrice = computed(() => this._kasPrice.value()?.price ?? 0);

  readonly positions = computed(() => {
    const raw = this._positions.value()?.results;
    return raw ? this.mergePositions(raw, PORTFOLIO) : [];
  });

  readonly totals = this.createTotalsSignal(this.positions);
  readonly balances = this.createBalancesSignal(this.totals);

  readonly isLoading = computed(
    () => this._kasPrice.isLoading() || this._positions.isLoading()
  );
  readonly isError = computed(
    () => this._kasPrice.error() || this._positions.error()
  );

  private mergePositions(
    positions: Position[],
    map: Record<string, Position[]>
  ): Position[] {
    return positions
      .map((pos) => ({ ...map[pos.ticker][0], ...pos }))
      .filter((pos) => pos.price.kas)
      .sort((a, b) => b.amount * b.price.kas - a.amount * a.price.kas);
  }

  private createTotalsSignal(positions: Signal<Position[]>) {
    return {
      kas: computed(() =>
        positions().reduce((sum, pos) => sum + pos.amount * pos.price.kas, 0)
      ),
      usd: computed(() =>
        positions().reduce((sum, pos) => sum + pos.amount * pos.price.usd, 0)
      ),
    };
  }

  private createBalancesSignal(totals: {
    kas: Signal<number>;
    usd: Signal<number>;
  }) {
    return {
      kas: computed(() => totals.kas() - KAS_INVESTED),
      usd: computed(() => totals.usd() - KAS_INVESTED * KAS_MEAN_PRICE),
    };
  }
}
