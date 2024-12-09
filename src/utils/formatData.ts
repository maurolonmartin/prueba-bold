export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `${formattedDate} - ${formattedTime}`;
};

  
  export const formatStatus = (status: string): string => {
    return status === "SUCCESSFUL" ? "Cobro exitoso" : "Cobro no realizado";
  };
  
  export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0,
    }).format(amount);
  };
  