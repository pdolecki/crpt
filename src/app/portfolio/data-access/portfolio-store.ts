import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, Signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Position } from '../interfaces/position';
import {
  KAS_INVESTED,
  KAS_MEAN_PRICE,
  PORTFOLIO,
} from '../constants/portfolio';
import { combineLatest, filter, map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  private readonly httpClient = inject(HttpClient);

  private readonly _kasPrice = httpResource<{ price: number }>(
    () => `${environment.baseKasApi}/info/price`,
  );
  private readonly _positions = combineLatest(
    Object.keys(PORTFOLIO).map((ticker) =>
      this.httpClient
        .get<Position>(`${environment.krcKasApi}/${ticker}/info`)
        .pipe(map((data) => ({ ...PORTFOLIO[ticker], ...data }))),
    ),
  ).pipe(
    map((positions) =>
      positions
        .filter((p) => p.price.floorPrice !== 0)
        .sort(
          (a, b) =>
            b.amount * b.price.floorPrice - a.amount * a.price.floorPrice,
        ),
    ),
  );

  readonly kasPrice = computed(() => this._kasPrice.value()?.price ?? 0);
  readonly positions = toSignal(this._positions, {
    initialValue: Object.values(PORTFOLIO),
  });

  readonly totals = this.createTotalsSignal(this.positions);
  readonly balances = this.createBalancesSignal(this.totals);

  private createTotalsSignal(positions: Signal<Position[]>) {
    return {
      kas: computed(() =>
        positions().reduce(
          (sum, pos) => sum + pos.amount * pos.price.floorPrice,
          0,
        ),
      ),
      usd: computed(() =>
        positions().reduce(
          (sum, pos) => sum + pos.amount * pos.price.priceInUsd,
          0,
        ),
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
