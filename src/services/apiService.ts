export const fetchTransactions = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
    if (!response.ok) {
      throw new Error(`Failed to fetch transactions: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
