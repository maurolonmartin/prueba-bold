import React from "react";
import TransactionRow, { TransactionRowProps } from "@/components/TransactionRow/TransactionRow";
import "./Transactions.scss";
import { Transaction } from "@/types/transactions";

export interface TransactionTableProps {
  transactions: Transaction[];
  onRowClick: (transaction: TransactionRowProps["transaction"]) => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions, onRowClick }) => {
  return (
    <table >
      <thead>
        <tr>
          <th>Status</th>
          <th>Fecha</th>
          <th>Método de Pago</th>
          <th>ID Transacción</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            onClick={onRowClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
