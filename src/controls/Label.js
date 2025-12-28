import React from 'react';

const Label = (props) => {
  const { field, value } = props;
  const attributes = field.attributes || {};
  
  return (
    <span {...attributes}>
      {value || field.label || ''}
    </span>
  );
};

export default Label;

