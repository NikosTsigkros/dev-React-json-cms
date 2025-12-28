import React from 'react';

const Form = (props) => {
  const { data, module } = props;
  
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const item = data[0];

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formObject = {};
      for (let [key, value] of formData.entries()) {
        formObject[key] = value;
      }
      console.log('Form submitted:', formObject);
      alert('Form submitted! Check console for data.');
    }}>
      {Object.keys(item).map((fieldName) => {
        const fieldData = item[fieldName];
        return (
          <div key={fieldName} className="form-group">
            {fieldData.field.label && (
              <label className="form-label">
                {fieldData.field.label}
              </label>
            )}
            {fieldData.component}
          </div>
        );
      })}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

