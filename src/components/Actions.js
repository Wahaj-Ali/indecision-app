import React from 'react';
import Options from './Options';

const Actions = () => {
  const handlePick = () => {
    alert('handle');
  };

  return (
    <div>
      <Options />
      <button type="button" onClick={handlePick}>What should I do?</button>
    </div>
  );
};

export default Actions;
