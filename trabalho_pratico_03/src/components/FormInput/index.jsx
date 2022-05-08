import { useField, useFormikContext } from "formik";
import React, { useState } from "react";

import { Input } from "../Input";
import { RadioInput } from "../RadioInput";

import "./styles.scss";

export function InputForm({ mask, name, type, ...rest }) {
  const [text, setText] = useState("");

  const [props, meta, helpers] = useField(name);

  const { handleBlur, handleChange } = useFormikContext();

  const handleInputChange = (input) => {
    handleChange(name)(input);
    setText(input);
  };

  return (
    <div className="form-container">
      {!type || type === "text" ? (
        <>
          <Input
            {...rest}
            hasErrors={!!meta.error}
            name={name}
            onBlur={handleBlur(name)}
            onChange={handleInputChange}
            value={text}
          />
          {meta.error && meta.touched && <p className="error">{meta.error}</p>}
        </>
      ) : null}

      {type === "radio" ? (
        <RadioInput
          {...rest}
          hasErrors={!!meta.error}
          name={name}
          onChange={handleInputChange}
          checked={!!text ? text : rest.options[0]}
        />
      ) : null}
    </div>
  );
}
