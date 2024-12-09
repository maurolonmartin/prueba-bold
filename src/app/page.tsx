import React from "react";
import Header from "@/components/Header/Header";
import SalesSummaryCard from "@/components/SalesSummaryCard/SalesSummaryCard";
import Tabs from "@/components/Tabs/Tabs";
import HomeClient from "../components/HomeComponent/HomeClient"; // Client Component
import { fetchTransactions } from "@/services/apiService";
//import { Transaction } from "@/types/transactions";

export default async function Home() {
  const transactions = await fetchTransactions(); // Fetch data on the server

  return (
    <div className="container">
      <Header />
      <main>
        <SalesSummaryCard totalSales={91233950} month="Junio" />
        <Tabs />
        <HomeClient transactions={transactions.data} />
      </main>
    </div>
  );
}
