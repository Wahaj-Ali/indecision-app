import React from 'react';
import PropTypes from 'prop-types';

const AddOption = (props) => {
  const { optionText } = props;
  return (
    <div>{optionText}</div>
  );
};

AddOption.propTypes = {
  optionText: PropTypes.string,
}.isRequired;

export default AddOption;
