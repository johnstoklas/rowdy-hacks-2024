import React from 'react';

const InputHealth = ({ id, inputUnit, options, onChange }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;  // Get the selected value
    onChange(id, selectedValue);  // Call onChange and pass the id as the key and selectedValue as value
  };

  return (
    <div class="input-box">
      <div className="input-health">
        <div  class="input-unit"> {inputUnit} </div>
        <select id={id} onChange={handleSelectChange}>
          <option value=""> N/A {inputUnit}</option> {/* Default option */}
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputHealth;
