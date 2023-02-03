import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const { optionText } = props;
  return (
    <div>
      {optionText}
    </div>
  );
};

Option.propTypes = {
  optionText: PropTypes.string,
}.isRequired;

export default Option;
