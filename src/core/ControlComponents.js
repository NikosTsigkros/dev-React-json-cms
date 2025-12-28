import React, { Component } from 'react';
import Templates from '../themes/templates';
import Functions from './Functions';

class ControlComponents extends Component {
  state = {
    loading: true,
    data: null,
    template: null
  };

  componentDidMount() {
    // Simulate API call with mock data
    setTimeout(() => {
      const mockData = this.getMockData();
      const enrichedData = Functions.enrichData({
        inputData: mockData,
        module: this.props.module
      });
      
      const template = this.fetchTemplate({
        inputData: enrichedData,
        module: this.props.module
      });

      this.setState({
        loading: false,
        data: enrichedData,
        template: template
      });
    }, 500);
  }

  getMockData() {
    // Mock API response - determine data based on module context
    // We can check the API endpoint or use a more sophisticated method
    const apiUrl = this.props.module.api?.view || '';
    
    // Products module mock data
    if (apiUrl.includes('/api/products')) {
      if (this.props.module.template === 'list') {
        return [
          { id: 1, name: 'Laptop Pro', price: '$1,299', category: 'Electronics', inStock: 'Yes' },
          { id: 2, name: 'Wireless Mouse', price: '$29.99', category: 'Accessories', inStock: 'Yes' },
          { id: 3, name: 'Mechanical Keyboard', price: '$149', category: 'Accessories', inStock: 'No' },
          { id: 4, name: 'Monitor 27"', price: '$399', category: 'Electronics', inStock: 'Yes' }
        ];
      } else {
        return [
          { id: 1, name: 'Laptop Pro', price: '1299.00', category: 'Electronics', description: 'High-performance laptop for professionals', inStock: '50' }
        ];
      }
    }
    
    // Users module mock data (default)
    if (this.props.module.template === 'list') {
      return [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
      ];
    } else {
      return [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', bio: 'Software developer' }
      ];
    }
  }

  fetchTemplate(args) {
    const { inputData, module } = args;
    const TemplateTagName = Templates[module.template];
    
    return (
      <TemplateTagName
        data={inputData}
        module={module}
      />
    );
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return this.state.template;
  }
}

export default ControlComponents;

