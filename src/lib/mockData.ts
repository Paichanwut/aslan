export interface Stock {
  symbol: string;
  price: number;
  change: number;
  type: string;
}

export const POPULAR_STOCKS: Stock[] = [
  { symbol: "MSFT", price: 411.21, change: -2.98, type: "STOCK" },
  { symbol: "AMD", price: 242.11, change: -1.72, type: "STOCK" },
  { symbol: "SPY", price: 689.44, change: -0.87, type: "ETF" },
  { symbol: "PYPL", price: 41.70, change: -25.49, type: "STOCK" },
  { symbol: "SLV", price: 76.88, change: 5.90, type: "ETF" },
  { symbol: "SMCI", price: 29.67, change: -0.13, type: "STOCK" },
  { symbol: "SNDK", price: 695.51, change: 4.35, type: "STOCK" },
  { symbol: "NVDA", price: 180.32, change: -2.93, type: "STOCK" },
  { symbol: "MU", price: 419.44, change: -4.37, type: "STOCK" },
  { symbol: "PLTR", price: 157.88, change: 6.40, type: "STOCK" },
];

export const WATCHLIST = [
  "NVDA", "TSLA", "AAPL", "AMD", "MSFT", "AMZN", "META", "GOOGL"
];
