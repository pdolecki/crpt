import { Operation } from '../interfaces/operation';

export const OPERATIONS: Record<string, Operation[]> = {
  ZEAL: [
    {
      type: 'BUY',
      date: '09.06.2025',
      amount: 100,
      price: 59,
    },
  ],
  NACHO: [
    {
      type: 'SELL',
      date: '17.10.2024',
      amount: 3108600, // Total of 1,108,600 + 1,000,000 * 3
      price: 1587.5, // Average of (1852.5 + 1520 * 3) / 4
    },
    {
      type: 'SELL',
      date: '22.10.2024',
      amount: 244432,
      price: 380,
    },
    {
      type: 'SELL',
      date: '23.10.2024',
      amount: 1000000,
      price: 1520,
    },
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 2000000,
      price: 1520,
    },
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 3600000,
      price: 2750,
    },
  ],
  KONAN: [
    {
      type: 'SELL',
      date: '23.10.2024',
      amount: 5000000,
      price: 1805,
    },
    {
      type: 'BUY',
      date: '01.11.2024',
      amount: 19296819,
      price: 2550,
    },
    {
      type: 'BUY',
      date: '01.11.2024',
      amount: 10000000,
      price: 240,
    },
  ],
  KOBA: [
    {
      type: 'SELL',
      date: '06.11.2024',
      amount: 27000000,
      price: 2337,
    },
  ],
  KASPY: [
    {
      type: 'SELL',
      date: '17.10.2024',
      amount: 80000000, // Total of 40,000,000 + 20,000,000 * 2
      price: 5975, // Average of (7885 + 3990 * 2) / 3
    },
    {
      type: 'SELL',
      date: '21.10.2024',
      amount: 3000000,
      price: 1900,
    },
    {
      type: 'SELL',
      date: '22.10.2024',
      amount: 4974086, // Total of 1,974,086 + 2,000,000 + 3,000,000
      price: 1347.5, // Average of (1092.5 + 1140 + 1710) / 3
    },
    {
      type: 'SELL',
      date: '23.10.2024',
      amount: 2000000,
      price: 1045,
    },
    {
      type: 'SELL',
      date: '24.10.2024',
      amount: 3000000,
      price: 1377.5,
    },
    {
      type: 'BUY',
      date: '06.11.2024',
      amount: 10000000,
      price: 3000,
    },
    {
      type: 'BUY',
      date: '30.01.2025',
      amount: 10020000,
      price: 1976,
    },
  ],
  KASPER: [
    {
      type: 'SELL',
      date: '25.09.2024',
      amount: 1950000, // Total of 500,000 * 4 + 200,000 + 250,000 + 750,000
      price: 547.875, // Average of (665 * 4 + 237.5 + 323 + 760) / 7
    },
    {
      type: 'SELL',
      date: '21.10.2024',
      amount: 791400, // Total of 241,400 + 250,000 + 150,000 * 2
      price: 1322.9, // Average of (1615 + 1710 + 997.5 * 2) / 4
    },
    {
      type: 'BUY',
      date: '22.01.2025',
      amount: 583033,
      price: 549,
    },
    {
      type: 'BUY',
      date: '30.01.2025',
      amount: 500000,
      price: 585,
    },
  ],
  GHOAD: [
    {
      type: 'SELL',
      date: '25.09.2024',
      amount: 175560, // Total of 25,560 + 50,000 + 50,000 + 50,000
      price: 380, // Average of (237.5 + 427.5 + 427.5 + 427.5) / 4
    },
  ],
  NOCHA: [
    {
      type: 'SELL',
      date: '14.10.2024',
      amount: 12000000, // Total of 1,000,000 * 12
      price: 93.1, // All transactions have the same price
    },
    {
      type: 'SELL',
      date: '14.10.2024',
      amount: 3000000,
      price: 237.5,
    },
  ],
  KASJAK: [],
  BURT: [
    {
      type: 'SELL',
      date: '17.10.2024',
      amount: 480000, // Total of 200,000 + 250,000 + 30,000
      price: 1726.7, // Average of (1662.5 + 1995 + 1520) / 3
    },
    {
      type: 'SELL',
      date: '22.10.2024',
      amount: 119981, // Total of 44,981 + 25,000 + 50,000
      price: 1583.3, // Average of (1757.5 + 997.5 + 1995) / 3
    },
    {
      type: 'SELL',
      date: '23.10.2024',
      amount: 50000,
      price: 3135,
    },
    {
      type: 'BUY',
      date: '22.01.2025',
      amount: 72545,
      price: 543,
    },
    {
      type: 'BUY',
      date: '22.01.2025',
      amount: 33918,
      price: 240,
    },
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 160000,
      price: 1900,
    },
  ],
  BALU: [
    { type: 'SELL', date: '24.10.2024', amount: 12080000, price: 500 },
    { type: 'SELL', date: '30.10.2024', amount: 10000000, price: 807.5 },
    { type: 'SELL', date: '02.11.2024', amount: 10000000, price: 1350 },
    { type: 'SELL', date: '28.11.2024', amount: 10000000, price: 450 },
  ],
  BAKA: [],
  BKASPR: [
    { type: 'BUY', date: '24.10.2024', amount: 400000000, price: 223 },
    { type: 'BUY', date: '25.10.2024', amount: 1400000000, price: 2375 },
  ],
  KASIA: [{ type: 'BUY', date: '25.10.2024', amount: 20090000, price: 700 }],
  KOON: [
    { type: 'BUY', date: '25.10.2024', amount: 2000000, price: 610 },
    { type: 'SELL', date: '01.11.2024', amount: 2000000, price: 427.5 },
  ],
  RAKUN: [
    { type: 'BUY', date: '28.10.2024', amount: 24345400, price: 511 },
    { type: 'SELL', date: '01.11.2024', amount: 24345400, price: 712.5 },
    {
      type: 'BUY',
      date: '03.11.2024',
      amount: 5000000,
      price: 260,
    },
    {
      type: 'BUY',
      date: '06.11.2024',
      amount: 18000000,
      price: 674,
    },
  ],
  KASMO: [
    { type: 'BUY', date: '28.10.2024', amount: 650000, price: 520 },
    { type: 'SELL', date: '30.10.2024', amount: 650000, price: 608 },
  ],
  KPAW: [
    { type: 'BUY', date: '28.10.2024', amount: 158353, price: 1501 },
    {
      type: 'SELL',
      date: '30.10.2024',
      amount: 158353,
      price: 1448.75,
    },
  ],
  MANEKI: [],
  KERMIT: [
    { type: 'SELL', date: '28.10.2024', amount: 1471000, price: 500 },
    {
      type: 'BUY',
      date: '03.11.2024',
      amount: 1471000,
      price: 525,
    },
  ],
  KAPA: [],
  KENNY: [],
  KDAO: [
    {
      type: 'SELL',
      date: '24.10.2024',
      amount: 5008000, // Total of 2,080,000 + 2,000,000 + 3,000,000
      price: 1166, // Average of (1045 + 1045 + 1425) / 3
    },
    {
      type: 'SELL',
      date: '25.10.2024',
      amount: 10000000, // Total of 3,000,000 + 1,000,000 + 2,000,000 + 4,000,000
      price: 1039.4, // Average of (1258.75 + 427.5 + 807.5 + 1662.5) / 4
    },
  ],
  RUSTEE: [{ type: 'SELL', date: '28.10.2024', amount: 15000000, price: 475 }],
  KANGO: [
    {
      type: 'SELL',
      date: '28.10.2024',
      amount: 19000000,
      price: 1710,
    },
    {
      type: 'BUY',
      date: '06.11.2024',
      amount: 9287198,
      price: 2765,
    },
    {
      type: 'BUY',
      date: '20.11.2024',
      amount: 5000000,
      price: 2480,
    },
    {
      type: 'BUY',
      date: '28.11.2024',
      amount: 1000000,
      price: 315,
    },
    {
      type: 'BUY',
      date: '22.01.2025',
      amount: 5000000,
      price: 1650,
    },
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 9000000,
      price: 3068,
    },
  ],
  STICK: [
    {
      type: 'BUY',
      date: '30.10.2024',
      amount: 132000,
      price: 977,
    },
    {
      type: 'SELL',
      date: '01.11.2024',
      amount: 132000,
      price: 1881,
    },
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 417122,
      price: 517,
    },
  ],
  DOGK: [
    {
      type: 'BUY',
      date: '30.10.2024',
      amount: 50001,
      price: 1000,
    },
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 500000,
      price: 1430,
    },
  ],
  KEKE: [
    {
      type: 'BUY',
      date: '30.10.2024',
      amount: 23000000,
      price: 700,
    },
    {
      type: 'BUY',
      date: '22.01.2025',
      amount: 10518313,
      price: 270,
    },
    {
      type: 'BUY',
      date: '30.01.2025',
      amount: 28569708,
      price: 495,
    },
  ],
  KENGY: [
    {
      type: 'BUY',
      date: '31.10.2024',
      amount: 4220000,
      price: 280,
    },
  ],
  JUMP: [
    {
      type: 'BUY',
      date: '01.11.2024',
      amount: 22386000,
      price: 490,
    },
    {
      type: 'SELL',
      date: '02.11.2024',
      amount: 5386000,
      price: 427.5,
    },
    {
      type: 'SELL',
      date: '03.11.2024',
      amount: 15000000,
      price: 779,
    },
    {
      type: 'BUY',
      date: '03.11.2024',
      amount: 20000000,
      price: 1000,
    },
  ],
  SKOOBY: [
    {
      type: 'BUY',
      date: '03.11.2024',
      amount: 2256200,
      price: 355,
    },
  ],
  KROCKY: [
    {
      type: 'BUY',
      date: '03.11.2024',
      amount: 4448000,
      price: 332,
    },
  ],
  FLIP: [
    {
      type: 'BUY',
      date: '02.11.2024',
      amount: 248000,
      price: 435,
    },
  ],
  KRANKY: [
    {
      type: 'BUY',
      date: '04.11.2024',
      amount: 225000000,
      price: 98,
    },
  ],
  KEIRO: [
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 4000000,
      price: 1236,
    },
  ],
  SZAR: [
    {
      type: 'BUY',
      date: '30.01.2024',
      amount: 35000000,
      price: 1254,
    },
  ],
};
