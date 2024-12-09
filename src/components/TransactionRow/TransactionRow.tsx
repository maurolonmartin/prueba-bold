import React from "react";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
import { formatDate, formatCurrency, formatStatus } from "@/utils/formatData";
import styles from "./TransactionRow.module.scss";
import { Transaction } from "@/types/transactions";

export interface TransactionRowProps {
    transaction: Transaction;
    onClick: (transaction: TransactionRowProps["transaction"]) => void;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction, onClick }) => {
  return (
    <tr
      className={styles.transactionRow}
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
        <div>
          ${formatCurrency(transaction.amount)}
          {transaction.deduction && (
            <div className={styles.deduction}>
              <span>Deducción Bold</span>
              <br />
              -${formatCurrency(transaction.deduction)}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TransactionRow;
