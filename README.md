# JSON Schema UI Prototype

This is a simplified prototype demonstrating a **JSON Schema-based UI generation system** for React applications.

## Architecture Overview

This system allows you to define UI pages entirely through JSON configuration, without writing React components for each page. Here's how it works:

### Core Concepts

1. **Modules** - Define page configurations (like a page schema)
   - API endpoints for data fetching
   - Template type (grid, list, form, etc.)
   - Field definitions (what controls/widgets to use)
   - Events and actions
   - Validation rules

2. **Controls** - Reusable UI components (Button, Text, Label, etc.)
   - Receive field configuration from modules
   - Handle events (onClick, onChange, etc.)
   - Support HTML attributes (className, placeholder, etc.)

3. **Widgets** - Complex reusable components (Pagination, Search, etc.)
   - More sophisticated than controls
   - Can have their own state and logic

4. **Templates** - Layout components (Grid, List, Form)
   - Define how data is displayed
   - Use controls/widgets based on field definitions
   - Handle data rendering logic

5. **Themes** - Visual styling and layout definitions
   - Define how templates look
   - Can be swapped to change entire app appearance

6. **Manager** - The orchestrator
   - Loads module configurations
   - Fetches data from APIs
   - Enriches data with React components
   - Renders appropriate template

### Data Flow

```
1. App.js → Manager (specifies which module/view to load)
2. Manager → ControlComponents (loads module config)
3. ControlComponents → API (fetches data)
4. ControlComponents → Functions.enrichData (converts JSON data to React components)
5. ControlComponents → Template (renders using appropriate template)
6. Template → Controls/Widgets (renders individual UI elements)
```

### Example Module Configuration

```javascript
const UserListModule = {
  views: {
    list: {
      api: {
        view: "/api/users"
      },
      template: "list",  // Uses List template
      fields: {
        name: {
          type: "text",      // Uses Text control
          alias: "name",
          label: "Name"
        },
        email: {
          type: "text",
          alias: "email",
          label: "Email"
        },
        edit: {
          type: "button",
          alias: "edit",
          caption: "Edit",
          events: {
            onClick() {
              // Handle click event
              console.log("Edit clicked for:", this.props.primaryKeyValue);
            }
          }
        }
      }
    }
  }
};
```

### How It Works

1. **Module Definition**: You define a module with:
   - API endpoints
   - Template type (list, form, grid)
   - Fields with control types and configurations
   - Events and validation rules

2. **Data Fetching**: System fetches data from API endpoint

3. **Data Enrichment**: Raw JSON data is enriched with React components:
   - Each field value gets wrapped in its corresponding control component
   - Events are bound to controls
   - Attributes are applied

4. **Template Rendering**: Template component receives enriched data and renders:
   - List template: renders items in a grid/list
   - Form template: renders form fields
   - Grid template: renders table/grid

5. **Control Rendering**: Each control renders itself based on:
   - Field configuration
   - Data value
   - Events
   - Attributes

### Benefits

- **Declarative**: Define UI through JSON/JS config, not code
- **Reusable**: Controls and widgets can be used across modules
- **Themeable**: Swap themes to change entire app appearance
- **Maintainable**: Changes to UI structure don't require component changes
- **Scalable**: Easy to add new controls, widgets, and templates

### Running the Prototype

```bash
npm install
npm start
```

The prototype includes:
- Sample module configurations
- Basic controls (Button, Text, Label)
- Basic templates (List, Form)
- Simple theme
- Mock API data

