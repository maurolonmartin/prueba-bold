import React from "react";
import './DetailedTransaction.scss';
import { Transaction } from "@/types/transactions";
import { formatCurrency, formatDate, formatStatus } from "@/utils/formatData";

interface TransactionDetailSidebarProps {
  isOpen: boolean;
  transaction: Transaction| null;
  onClose: () => void;
}

const TransactionDetailSidebar: React.FC<TransactionDetailSidebarProps> = ({
  isOpen,
  transaction,
  onClose,
}) => {

  if (!isOpen) return null;

  if (!transaction) {
    return (
      <div className="sidebar">
        <p>No se seleccionó ninguna transacción.</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    );
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="header-sidebar header">
        <div className="status">
          <span className="icon material-icons">
            {transaction.status === "SUCCESSFUL" ? "check_circle" : "error"}
          </span>
          <span className="title">
            {formatStatus(transaction.status)}
          </span>
        </div>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
      <div className="content">
        <div className="amount">
          ${formatCurrency(transaction.amount)}
        </div>
        <div className="date">{formatDate(transaction.createdAt)}</div>
        <div className="details">
          <div className="detail-item">
            <span className="label">ID transacción Bold</span>
            <span className="value">{transaction.id}</span>
          </div>
          {transaction.deduction !== undefined && (
            <div className="detail-item">
              <span className="label">Deducción Bold</span>
              <span className="value negative">
                -${formatCurrency(transaction.deduction)}
              </span>
            </div>
          )}
          <div className="detail-item">
            <span className="label">Método de pago</span>
            <span className="value">
              <img
                src={`/icons/${transaction.paymentMethod.toLowerCase()}.png`}
                alt={transaction.paymentMethod}
                style={{ width: "20px", marginRight: "8px" }}
              />
              {transaction.franchise ? `**** ${transaction.transactionReference}` : transaction.paymentMethod}
            </span>
          </div>
          <div className="detail-item">
            <span className="label">Tipo de pago</span>
            <span className="value">{transaction.salesType}</span>
          </div>
        </div>
      </div>
    </div>
  );


};

export default TransactionDetailSidebar;
