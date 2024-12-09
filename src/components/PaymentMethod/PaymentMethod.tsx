import React from "react";
import Image from "next/image";
import './paymenthMethod.scss';

interface PaymentMethodProps {
  paymentMethod: string; 
  franchise?: string;
  transactionReference: number;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMethod,
  franchise,
  transactionReference,
}) => {
  const paymentIcons: Record<string, string> = {
    CARD: "/icons/card.png",
    PSE: "/icons/pse.png",
    DAVIPLATA: "/icons/daviplata.svg",
    NEQUI: "/icons/nequi.png",
    VISA: "/icons/visa.svg",
    MASTERCARD: "/icons/mastercard.svg",
    AMEX: "/icons/amex.svg",
    BANCOLOMBIA: "/icons/bancolombia.png",
  };

  const iconSrc = franchise
    ? paymentIcons[franchise.toUpperCase()]
    : paymentIcons[paymentMethod.toUpperCase()];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={`${paymentMethod} icon`}
          width={32}
          height={32}
        />
      )}
      <div>
        {transactionReference && (
          <div>**** {String(transactionReference).slice(-4)}</div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
