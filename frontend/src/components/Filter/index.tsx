import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Search } from "../Icons/Search";
import { Filter as FilterIcon } from "../Icons/Filter";
import "./styles.scss";

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  onOpenFilters: () => void;
  onAddMovie: () => void;
}

export function Filter({
  value,
  onChange,
  onSearch,
  onOpenFilters,
  onAddMovie,
}: FilterProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__search">
        <input
          className="filter-bar__input"
          type="text"
          placeholder="Pesquise por filmes"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className="filter-bar__search-btn"
          type="button"
          onClick={onSearch}
          aria-label="Buscar"
        >
          <Search fill="#B5B2BC" />
        </button>
      </div>

      <div className="filter-bar__actions">
        <Button
          className="secondary"
          onClick={onOpenFilters}
        >
          Filtros
        </Button>

        <Button
          onClick={onAddMovie}
        >
          Adicionar Filme
        </Button>
      </div>
    </div>
  );
}