import React from 'react';
import Controls from '../controls/controls';

const Functions = {
  enrichData(args) {
    const { inputData, module } = args;
    const enrichedData = [];

    inputData.forEach((item) => {
      const record = {};
      
      // Process each field defined in the module
      Object.keys(module.fields).forEach((fieldName) => {
        const fieldConfig = module.fields[fieldName];
        const fieldValue = item[fieldName] || '';
        
        // Get the control component for this field type
        const ControlComponent = Controls[fieldConfig.type];
        
        if (ControlComponent) {
          record[fieldConfig.alias || fieldName] = {
            value: fieldValue,
            name: fieldName,
            field: fieldConfig,
            component: (
              <ControlComponent
                field={fieldConfig}
                value={fieldValue}
                primaryKeyValue={item[module.primaryKey]}
                data={item}
              />
            )
          };
        }
      });

      enrichedData.push(record);
    });

    return enrichedData;
  }
};

export default Functions;

