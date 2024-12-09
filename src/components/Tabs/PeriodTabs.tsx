"use client";

import React from "react";
import "./PeriodTabs.scss";

interface PeriodSelectorProps {
  selected: string; 
  onSelect: (period: string) => void;
}

const PeriodTabs: React.FC<PeriodSelectorProps> = ({ selected, onSelect }) => {
  const options = ["Hoy", "Esta semana", "Junio"];

  return (
    <div className="period-selector">
      {options.map((option, index) => (
        <div
          key={index}
          className={`period-option ${option === selected ? "active" : ""}`}
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default PeriodTabs;
