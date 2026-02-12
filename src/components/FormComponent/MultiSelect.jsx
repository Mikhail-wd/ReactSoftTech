import React, { useState, useRef, useEffect } from "react";
import "./MultiSelect.css";

function MultiSelect({
  options = [],
  selectedValues = [],
  onChange,
  placeholder = "Выберите услуги",
  name,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState("bottom");
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Закрытие при клике вне компонента и определение позиции
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const calculatePosition = () => {
      if (triggerRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - triggerRect.bottom;
        const spaceAbove = triggerRect.top;

        // Если места снизу меньше 300px, показываем сверху
        if (spaceBelow < 300 && spaceAbove > spaceBelow) {
          setDropdownPosition("top");
        } else {
          setDropdownPosition("bottom");
        }
      }
    };

    if (isOpen) {
      calculatePosition();
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", calculatePosition);
    window.addEventListener("scroll", calculatePosition);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", calculatePosition);
      window.removeEventListener("scroll", calculatePosition);
    };
  }, [isOpen]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    onChange(newSelectedValues);
  };

  const handleRemove = (value) => {
    const newSelectedValues = selectedValues.filter((item) => item !== value);
    onChange(newSelectedValues);
  };

  const getSelectedLabels = () => {
    return selectedValues
      .map((value) => options.find((option) => option.value === value)?.label)
      .filter(Boolean);
  };

  return (
    <div className="multiselect" ref={dropdownRef}>
      <div
        ref={triggerRef}
        className={`multiselect__trigger ${
          isOpen ? "multiselect__trigger--open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="multiselect__selected">
          {selectedValues.length === 0 ? (
            <span className="multiselect__placeholder">{placeholder}</span>
          ) : (
            <div className="multiselect__tags">
              {getSelectedLabels().map((label, index) => (
                <span key={index} className="multiselect__tag">
                  {label}
                  <button
                    type="button"
                    className="multiselect__tag-remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(selectedValues[index]);
                    }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="multiselect__arrow">▼</span>
      </div>

      {isOpen && (
        <div
          className={`multiselect__dropdown multiselect__dropdown--${dropdownPosition}`}
        >
          <div className="multiselect__search">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="multiselect__search-input"
            />
          </div>
          <div className="multiselect__options">
            {filteredOptions.length === 0 ? (
              <div className="multiselect__no-results">Ничего не найдено</div>
            ) : (
              filteredOptions.map((option) => (
                <label
                  key={option.value}
                  className={`multiselect__option ${
                    selectedValues.includes(option.value)
                      ? "multiselect__option--selected"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleToggle(option.value)}
                    className="multiselect__option-checkbox"
                  />
                  <span className="multiselect__option-label">
                    {option.label}
                  </span>
                </label>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
