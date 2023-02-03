import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import AddOption from './AddOption';

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeHandler = this.removeHandler.bind(this);
  }

   removeHandler = () => {
     alert('Remove');
   };

   render() {
     const { options = ['option 1', 'option 2'] } = this.props;

     return (
       <div>
         <div>
           Options
           {
        options.map((option) => <Option key={option} optionText={option} />)
        }
         </div>
         <div>
           <AddOption />
         </div>
         <div>
           <button type="button" onClick={this.removeHandler}>Remove All</button>
         </div>
       </div>
     );
   }
}

Options.propTypes = {
  options: PropTypes.string,
}.isRequired;
