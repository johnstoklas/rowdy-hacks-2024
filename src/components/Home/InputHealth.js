import './index.scss';
import React from 'react'

//creates dropdown for each statistic we are tracking
const InputHealth = ({id, inputUnit, options }) => {
  return (
    <div class="input-box">
    <div className="input-unit"> {inputUnit} </div>
    <select id={id} className="input-data">
            <option value=""> N/A </option>
            {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
        </select>
    </div>
  )
}

export default InputHealth