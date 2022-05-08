import React, { useState } from "react";

import "./styles.scss";

export const Input = ({ hasErrors, label, name, value, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    return rest.onChange(e.target.value);
  };

  return (
    <div
      className={
        "container" +
        (rest.multiline ? " multiline" : "") +
        (isFocused ? " is-focused" : "") +
        (hasErrors ? " has-errors" : "")
      }
    >
      {label && <p className="label">{label}</p>}

      {!rest.multiline ? (
        <input
          maxLength={40}
          className="input-text"
          value={value}
          name={name}
          //{...rest}
          onBlur={(e) => {
            setIsFocused(false);
            rest.onBlur(e);
          }}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
        />
      ) : (
        <textarea
          maxLength={500}
          className="input-text area"
          value={value}
          name={name}
          // {...rest}
          onBlur={(e) => {
            setIsFocused(false);
            rest.onBlur(e);
          }}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
        />
      )}
    </div>
  );
};
