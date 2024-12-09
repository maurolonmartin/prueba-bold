import React from "react";

interface SalesSummaryCardProps {
  totalSales: number;
  month: string;
}

const SalesSummaryCard: React.FC<SalesSummaryCardProps> = ({ totalSales, month }) => (
  <div className="sales-summary-card">
    <h3>Total de ventas de {month}</h3>
    <p>${totalSales.toLocaleString()}</p>
    <span>{month}, 2024</span>
  </div>
);

export default SalesSummaryCard;
