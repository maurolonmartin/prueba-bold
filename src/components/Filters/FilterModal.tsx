import React, { useEffect } from "react";
import "./FilterModal.scss";

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: string[]) => void;
  initialFilters: string[]; 
}

const FiltersModal: React.FC<FiltersModalProps> = ({ isOpen, onClose, onApply, initialFilters }) => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>(initialFilters);

  useEffect(() => {
    if (isOpen) {
      setSelectedFilters(initialFilters);
    }
  }, [isOpen, initialFilters]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) => {
      if (filter === "Ver todos") {
        return ["Ver todos"]; 
      }

      const updatedFilters = prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev.filter((f) => f !== "Ver todos"), filter]; 

      return updatedFilters.length > 0 ? updatedFilters : ["Ver todos"];
    });
  };

  const handleApply = () => {
    onApply(selectedFilters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="filters-modal">
        <div className="modal-header">
          <h3>Filtrar</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="filter-option">
            <input
              type="checkbox"
              id="dataphone"
              checked={selectedFilters.includes("Cobro con datáfono")}
              onChange={() => handleFilterChange("Cobro con datáfono")}
            />
            <label htmlFor="dataphone">Cobro con datáfono</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              id="link"
              checked={selectedFilters.includes("Cobro con link de pago")}
              onChange={() => handleFilterChange("Cobro con link de pago")}
            />
            <label htmlFor="link">Cobro con link de pago</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              id="all"
              checked={selectedFilters.includes("Ver todos")}
              onChange={() => handleFilterChange("Ver todos")}
            />
            <label htmlFor="all">Ver todos</label>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleApply}>Aplicar</button>
        </div>
      </div>
    </>
  );
};

export default FiltersModal;
