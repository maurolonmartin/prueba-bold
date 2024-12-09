import React from "react";

const Tabs: React.FC = () => (
  <div className="tabs">
    <button>Hoy</button>
    <button>Esta semana</button>
    <button>Junio</button>
    <button className="filter-button">Filtrar</button>
  </div>
);

export default Tabs;
