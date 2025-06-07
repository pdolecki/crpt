import { computed, Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { PORTFOLIO } from '../constants/portfolio';
import { Position } from '../interfaces/position';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  private readonly KAS_INVESTED = 83500;
  private readonly KAS_MEAN_PRICE = 0.144;
  private readonly PORTFOLIO = PORTFOLIO;

  kasInvested = signal<number>(this.KAS_INVESTED);
  kasMeanPrice = signal<number>(this.KAS_MEAN_PRICE);
  kasPrice = computed(() => this._kasPrice.value()?.price);
  positions = computed(() =>
    this._positions.value()?.results.map((position) => ({
      ...PORTFOLIO[position.ticker][0],
      ...position,
    }))
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
