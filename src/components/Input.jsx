import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { handleSetInput, inputValue, setInputValue } = props;

  return (

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What's this input for?..."
      />
      <button onClick={() =>
        handleSetInput(inputValue)
        }>Click</button>
    
  );
}

Input.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  handleSetInput: PropTypes.func,
};
