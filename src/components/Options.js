import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { options = ['option 1', 'option 2'] } = this.props;
    return (
      <div>
        Options
        {
        options.map((option) => <Option key={option} optionText={option} />)
        }

      </div>
    );
  }
}

Options.propTypes = {
  options: PropTypes.string,
}.isRequired;
