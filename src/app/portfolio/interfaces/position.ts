import { Operation } from './operation';

export interface Position {
  ticker: string;
  iconUrl?: string;
  price: {
    change24h: number;
    change24hInKas: number;
    floorPrice: number;
    marketCapInUsd: number;
    priceInUsd: number;
  };
  // added statically
  amount: number;
  operations: Operation[];
}
