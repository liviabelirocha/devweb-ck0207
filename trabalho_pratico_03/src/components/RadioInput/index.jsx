import React, { useState } from "react";

import "./styles.scss";

export const RadioInput = ({
  checked,
  disabled,
  hasErrors,
  label,
  name,
  options,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    return rest.onChange(e.target.value);
  };

  return (
    <div
      className={
        "radio-container" +
        (rest.multiline ? " multiline" : "") +
        (isFocused ? " is-focused" : "") +
        (hasErrors ? " has-errors" : "") +
        (disabled ? " disabled" : "")
      }
    >
      {label && <p className="label">{label}</p>}

      {options && options.length > 0
        ? [...Array(options.length)].map((key, index) => (
            <div className="radio-input-label" key={index}>
              <label key={`${options[index]}label`} htmlFor={options[index]}>
                {options[index]}
              </label>
              <input
                disabled={disabled}
                key={options[index]}
                id={options[index]}
                type="radio"
                className="input-text"
                value={options[index]}
                name={name}
                onChange={handleChange}
                checked={checked === options[index] ? true : false}
              />
            </div>
          ))
        : null}
    </div>
  );
};
