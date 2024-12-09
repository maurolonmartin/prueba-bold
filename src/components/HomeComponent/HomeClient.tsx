"use client";

import React, { useState } from "react";
import FiltersModal from "@/components/Filters/FilterModal";
import TransactionDetailSidebar from "@/components/DetailedTransaction/DetailedTransaction";
import TransactionTable from "@/components/Transactions/Transactions";
import { Transaction } from "@/types/transactions";

interface HomeClientProps {
  transactions: Transaction[];
}

const HomeClient: React.FC<HomeClientProps> = ({ transactions }) => {
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleRowClick = (transaction: Transaction) => {
    console.log("row clicked", transaction)
    setSelectedTransaction(transaction);
    setSidebarOpen(true);
    console.log(selectedTransaction)
    console.log(sidebarOpen)
  };

  console.log("Selected Transaction:", selectedTransaction, sidebarOpen);

  return (
    <>
      <button onClick={() => setFiltersModalOpen(true)}>Filtrar</button>
      <TransactionTable
          transactions={transactions}
          onRowClick={handleRowClick}
        />
      <FiltersModal
        isOpen={filtersModalOpen}
        onClose={() => setFiltersModalOpen(false)}
        onApply={(filters) => console.log("Applied filters:", filters)}
      />
      <TransactionDetailSidebar
        isOpen={sidebarOpen}
        transaction={selectedTransaction}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default HomeClient;
