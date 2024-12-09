"use client";

import React, { useEffect, useState } from "react";
import "./HomeClient.scss";
import FiltersModal from "@/components/Filters/FilterModal";
import TransactionDetailSidebar from "@/components/DetailedTransaction/DetailedTransaction";
import TransactionTable from "@/components/Transactions/Transactions";
import { Transaction } from "@/types/transactions";
import SalesSummaryCard from "../SalesSummaryCard/SalesSummaryCard";
import Header from "../Header/Header";
import PeriodTabs from "../Tabs/PeriodTabs";
import { fetchTransactions } from "@/services/apiService";

const HomeClient: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Hoy");
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const [filters, setFilters] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const savedFilters = localStorage.getItem("transactionFilters");
      return savedFilters ? JSON.parse(savedFilters) : ["Ver todos"];
    }
    return ["Ver todos"];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("transactionFilters", JSON.stringify(filters));
    }
  }, [filters]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        console.log("Fetched transactions:", data);
        setTransactions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setTransactions([]);
      }
    };
    loadTransactions();
  }, []);

  useEffect(() => {
    const filterTransactions = () => {
      const now = new Date();
      let filtered: Transaction[] = transactions;

      if (selectedPeriod === "Hoy") {
        filtered = filtered.filter((transaction) => {
          const transactionDate = new Date(transaction.createdAt);
          return transactionDate.toDateString() === now.toDateString();
        });
      } else if (selectedPeriod === "Esta semana") {
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
        filtered = filtered.filter((transaction) => {
          const transactionDate = new Date(transaction.createdAt);
          return transactionDate >= startOfWeek && transactionDate <= new Date();
        });
      } else if (selectedPeriod === "Junio") {
        filtered = filtered.filter((transaction) => {
          const transactionDate = new Date(transaction.createdAt);
          return transactionDate.getMonth() === 5; 
        });
      }

      if (!filters.includes("Ver todos")) {
        if (filters.includes("Cobro con datáfono")) {
          filtered = filtered.filter((transaction) => transaction.salesType === "TERMINAL");
        }
        if (filters.includes("Cobro con link de pago")) {
          filtered = filtered.filter((transaction) => transaction.salesType === "PAYMENT_LINK");
        }
      }

      setFilteredTransactions(filtered);
    };

    filterTransactions();
  }, [selectedPeriod, transactions, filters]);

  const totalSales = filteredTransactions.reduce((total, transaction) => total + transaction.amount, 0);

  const handleRowClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setSidebarOpen(true);
  };


  const handleApplyFilters = (appliedFilters: string[]) => {
    if (appliedFilters.includes("Ver todos")) {
      setFilters(["Ver todos"]); 
    } else {
      setFilters(appliedFilters);
    }
  };

  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="top-section">
          <SalesSummaryCard totalSales={totalSales} month={selectedPeriod}  />
          <div className="filters-container">
            <PeriodTabs selected={selectedPeriod} onSelect={setSelectedPeriod} />
            <button className="filter-button" onClick={() => setFiltersModalOpen(true)}>
              Filtrar
              <span className="material-icons">filter_list</span>
          </button>
          </div>
          
        </div>

        <TransactionTable transactions={filteredTransactions} month={selectedPeriod} onRowClick={handleRowClick} />

        <FiltersModal
            isOpen={filtersModalOpen}
            onClose={() => setFiltersModalOpen(false)}
            onApply={setFilters}
            initialFilters={filters}
        />

        <TransactionDetailSidebar
          isOpen={sidebarOpen}
          transaction={selectedTransaction}
          onClose={() => setSidebarOpen(false)}
        />
      </main>
    </div>
  );
};

export default HomeClient;
