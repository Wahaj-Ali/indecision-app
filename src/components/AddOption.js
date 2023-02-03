import React from 'react';

const AddOption = () => {
  const addOptionHandler = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    console.log(option);
  };

  return (
    <div>
      <form onSubmit={addOptionHandler}>
        <input type="text" name="option" />
        <button type="button">Add Option</button>
      </form>
    </div>
  );
};

export default AddOption;
