import React from "react";
import "./SalesSumaryCard.scss";
import { formatCurrency } from "@/utils/formatData";

interface SalesSummaryCardProps {
  totalSales: number;
  month: string;
}

const SalesSummaryCard: React.FC<SalesSummaryCardProps> = ({ totalSales, month }) => (
  <div className="sales-summary-card">
    <div className="summary-header header">
      Total de ventas de {month}
      <span className="icon material-icons">info</span>
    </div>
    <div className="amount">
      <p>${formatCurrency(totalSales)}</p>
    </div>
    <div className="date">{month}, 2024</div>
  </div>

);

export default SalesSummaryCard;
