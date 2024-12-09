export interface Transaction {
    id: string;
    status: string;
    createdAt: number;
    paymentMethod: string;
    transactionReference: number;
    amount: number;
    deduction?: number;
    franchise?: string;
    salesType: string;
  }
  