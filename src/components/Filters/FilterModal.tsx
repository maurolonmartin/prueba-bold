import React from "react";
import './FilterModal.scss';

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: string[]) => void;
}

const FiltersModal: React.FC<FiltersModalProps> = ({ isOpen, onClose, onApply }) => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const applyFilters = () => {
    onApply(selectedFilters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>Filtrar</h2>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange("Cobro con datáfono")}
          />
          Cobro con datáfono
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange("Cobro con link de pago")}
          />
          Cobro con link de pago
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange("Ver todos")}
          />
          Ver todos
        </label>
        <button className="apply-button" onClick={applyFilters}>
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default FiltersModal;
