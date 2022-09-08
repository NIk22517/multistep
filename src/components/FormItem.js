import React, { useState } from "react";
import styled from "styled-components";

const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || "");

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  };

  switch (item.type) {
    case "text":
      return (
        <>
          <FormItemsHandle>
            <label htmlFor=''>{item.label}</label>
            <input
              type='text'
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
            />
          </FormItemsHandle>
        </>
      );
      break;

    case "url":
      return (
        <>
          <FormItemsHandle>
            <label htmlFor=''>{item.label}</label>
            <input
              type='url'
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
            />
          </FormItemsHandle>
        </>
      );

    case "checkbox":
      return (
        <>
          <FormItemsHandle>
            <div>
              <input
                type='radio'
                name='work'
                id={item.label}
                onChange={(e) => handleChange(e.target.value, item.value)}
              />

              <label htmlFor=''>{item.label}</label>
            </div>
          </FormItemsHandle>
        </>
      );

    default:
      return <></>;
  }
};

export default FormItem;

const FormItemsHandle = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 0.5rem;
    margin: 0.2rem 0rem;
  }
  label {
    color: rgba(128, 128, 128, 0.3);
  }

  div {
    margin: 0rem 2rem;
  }
  input[type="radio"] {
    margin: 0 2rem 0 1rem;
  }
  input[type="radio"]:checked {
    background-color: aqua;
    width: 50px;
  }
`;
