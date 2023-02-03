import PropTypes from 'prop-types';
import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
  const { title, subtitle } = props;
  // const subtitle = 'Put your life in the hands of a computer';
  return (
    <header className="header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Navbar />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}.isRequired;

export default Header;
