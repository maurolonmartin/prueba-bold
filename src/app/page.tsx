//import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import {fetchTransactions} from "../services/apiService"; 


export default async function Home() {
  const data = await fetchTransactions();

  // Log the data on the server-side terminal
  console.log("Transactions data (server):", data);

  return (
    <div className={styles.page}>
      <Header />
      <h1>Testing API Data</h1>
      {/* You can also render the data to ensure it's working */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );

}
