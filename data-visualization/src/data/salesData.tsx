export interface SalesProp {
  date: string;
  dailySales: number;
  monthlySales: number;
  noTransactions: number;
  totalRevenue: number;
  avg: number;
}

export const salesData: SalesProp[] = [
  {
    date: "2025-03-01",
    dailySales: 1000,
    monthlySales: 20000,
    noTransactions: 50,
    totalRevenue: 20000,
    avg: 400
  },
  {
    date: "2025-03-02",
    dailySales: 1400,
    monthlySales: 30000,
    noTransactions: 30,
    totalRevenue: 20000,
    avg: 416
  },
  {
    date: "2025-03-03",
    dailySales: 1300,
    monthlySales: 15000,
    noTransactions: 40,
    totalRevenue: 10000,
    avg: 401
  },
  {
    date: "2025-03-04",
    dailySales: 1000,
    monthlySales: 25000,
    noTransactions: 20,
    totalRevenue: 20000,
    avg: 419
  },
  {
    date: "2025-03-05",
    dailySales: 1500,
    monthlySales: 3000,
    noTransactions: 60,
    totalRevenue: 25000,
    avg: 416
  }
];
