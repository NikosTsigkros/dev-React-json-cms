# Quick Start Guide

## Understanding the System

This prototype demonstrates a **JSON Schema-based UI generation system**. Here's a simple walkthrough:

### Step 1: Define a Module

In `src/modules/modules.js`, you define what a page should look like:

```javascript
const UsersModule = {
  views: {
    list: {
      api: { view: '/api/users' },  // Where to get data
      template: 'list',              // How to display it
      fields: {                      // What fields to show
        name: {
          type: 'text',              // Use Text control
          label: 'Name'
        },
        edit: {
          type: 'button',            // Use Button control
          caption: 'Edit',
          events: {
            onClick() {              // What happens on click
              alert('Edit clicked!');
            }
          }
        }
      }
    }
  }
};
```

### Step 2: Use the Module

In `src/App.js`, you simply reference the module:

```jsx
<Manager module="users" view="list" />
```

### Step 3: The System Does the Rest

1. **Manager** loads the module configuration
2. **ControlComponents** fetches data (or uses mock data)
3. **Functions.enrichData()** converts JSON data into React components
4. **Template** (List/Form) renders the components
5. **Controls** (Button/Text/Label) render themselves

## Key Files to Explore

### Module Configuration
- `src/modules/modules.js` - See how pages are defined

### Core System
- `src/core/Manager.js` - Entry point
- `src/core/ControlComponents.js` - Data fetching & template selection
- `src/core/Functions.js` - Data enrichment logic

### UI Components
- `src/controls/Button.js` - Example control with events
- `src/controls/Text.js` - Example input control
- `src/themes/List.js` - Example list template
- `src/themes/Form.js` - Example form template

## Try It Yourself

### Add a New Field

Edit `src/modules/modules.js` and add a new field to the list view:

```javascript
phone: {
  type: 'text',
  alias: 'phone',
  label: 'Phone Number',
  attributes: {
    className: 'form-control'
  }
}
```

### Add a New Control

1. Create `src/controls/Email.js`:
```javascript
import React from 'react';

const Email = (props) => {
  const { field, value } = props;
  return <input type="email" defaultValue={value} name={field.alias} />;
};

export default Email;
```

2. Register in `src/controls/controls.js`:
```javascript
import Email from './Email';
const Controls = {
  // ... existing
  email: Email
};
```

3. Use in module:
```javascript
email: {
  type: 'email',  // Now available!
  label: 'Email'
}
```

### Add a New Template

1. Create `src/themes/Grid.js`:
```javascript
import React from 'react';

const Grid = (props) => {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map(key => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell, j) => (
              <td key={j}>{cell.component}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
```

2. Register in `src/themes/templates.js`:
```javascript
import Grid from './Grid';
const Templates = {
  // ... existing
  grid: Grid
};
```

3. Use in module:
```javascript
{
  template: 'grid',  // Now available!
  // ...
}
```

## Running the Prototype

```bash
cd json-schema-ui-prototype
npm install
npm start
```

Open http://localhost:3000 to see:
- User List example (shows how list template works)
- User Form example (shows how form template works)

## Key Takeaways

1. **No page-specific components needed** - Just define module configs
2. **Controls are reusable** - Use same Button/Text across all modules
3. **Templates handle layout** - List/Form/Grid templates work with any data
4. **Events are declarative** - Define onClick handlers in module config
5. **Easy to extend** - Add controls/templates without touching existing code

This is the power of declarative, schema-driven UI generation!

