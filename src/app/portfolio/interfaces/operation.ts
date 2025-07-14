export interface Operation {
  type: 'SELL' | 'BUY';
  date: string;
  amount: number;
  price: number;
}