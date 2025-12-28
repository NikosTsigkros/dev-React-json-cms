import React from 'react';

const Text = (props) => {
  const { field, value } = props;
  const attributes = field.attributes || {};
  
  return (
    <input
      type="text"
      {...attributes}
      defaultValue={value}
      name={field.alias}
    />
  );
};

export default Text;

