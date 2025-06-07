import { Operation } from './operation';

export interface Position {
  ticker: string;
  amount: number;
  price: { kas: number; usd: number };
  operations: Operation[];
}
