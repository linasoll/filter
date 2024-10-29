import React from "react";

function Toolbar ({ filters, selected, onSelectFilter }) {
    return (
        <div className="buttons">
            {filters.map(filter => (
                <button 
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                    className={filter === selected ? 'btn selected' : 'btn'}>
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Toolbar