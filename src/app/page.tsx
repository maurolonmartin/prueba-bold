import React from "react";
import HomeClient from "../components/HomeComponent/HomeClient"; 
import { fetchTransactions } from "@/services/apiService";

export default async function Home() {
  const transactions = await fetchTransactions();

  return (
    <div className="container">
      <main>
        <HomeClient transactions={transactions.data} />
      </main>
    </div>
  );
}
