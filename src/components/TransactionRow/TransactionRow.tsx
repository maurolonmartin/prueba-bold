import React from "react";
import "./TransactionRow.scss";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
import { formatDate, formatCurrency, formatStatus } from "@/utils/formatData";
import { Transaction } from "@/types/transactions";

export interface TransactionRowProps {
    transaction: Transaction;
    onClick: (transaction: TransactionRowProps["transaction"]) => void;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction, onClick }) => {
  return (
    <tr
      className="transactionRow"
      onClick={() => onClick(transaction)}
    >
      <td>{formatStatus(transaction.status)}</td>
      <td>{formatDate(transaction.createdAt)}</td>
      <td>
        <PaymentMethod
          paymentMethod={transaction.paymentMethod}
          franchise={transaction.franchise}
          transactionReference={transaction.transactionReference}
        />
      </td>
      <td>{transaction.id}</td>
      <td>
        <div className="amount-container">
          ${formatCurrency(transaction.amount)}
          {transaction.deduction && (
            <div className="deduction-container">
              <span className="title">Deducción Bold</span>
              <span className="deduction">-${formatCurrency(transaction.deduction)}</span>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TransactionRow;
