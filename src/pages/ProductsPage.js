import React, { Component } from 'react';
import Manager from '../core/Manager';
import ProductsViewport from '../components/ProductsViewport';

class ProductsPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Products Management</h1>
        
        <div className="card">
          <h2>Products List</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Click "View Details" on any product to open it in a new tab.
          </p>
          <Manager module="products" view="list" />
        </div>

        <div className="card" style={{ marginTop: '20px' }}>
          <h2>Tabs</h2>
          <ProductsViewport
            ref={refComponent => {
              window['productsViewport'] = refComponent;
            }}
          />
        </div>
      </div>
    );
  }
}

export default ProductsPage;

