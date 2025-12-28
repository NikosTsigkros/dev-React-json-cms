import React from 'react';

const List = (props) => {
  const { data, module } = props;
  
  return (
    <div>
      {data.length === 0 && (
        <div>No data available</div>
      )}
      {data.map((item, index) => (
        <div key={index} className="list-item">
          {Object.keys(item).map((fieldName) => (
            <div key={fieldName} style={{ marginBottom: '8px' }}>
              {item[fieldName].field.label && (
                <strong>{item[fieldName].field.label}: </strong>
              )}
              {item[fieldName].component}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;

