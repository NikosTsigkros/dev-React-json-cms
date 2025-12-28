// Products Module - Defines the products list and form views
import React from 'react';
import Manager from '../core/Manager';

const ProductsModule = {
  views: {
    list: {
      api: {
        view: '/api/products'
      },
      template: 'list',
      primaryKey: 'id',
      fields: {
        id: {
          type: 'label',
          alias: 'id',
          label: 'ID'
        },
        name: {
          type: 'text',
          alias: 'name',
          label: 'Product Name'
        },
        price: {
          type: 'label',
          alias: 'price',
          label: 'Price'
        },
        category: {
          type: 'label',
          alias: 'category',
          label: 'Category'
        },
        inStock: {
          type: 'label',
          alias: 'inStock',
          label: 'In Stock'
        },
        view: {
          type: 'button',
          alias: 'view',
          caption: 'View Details',
          attributes: {
            className: 'btn btn-primary'
          },
          events: {
            onClick() {
              // #region agent log
              try {
                fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'products.js:47',message:'onClick handler entry',data:{hasManager:typeof Manager!=='undefined',hasReact:typeof React!=='undefined',managerValue:Manager?.toString?.()?.substring(0,50)||'N/A'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
              } catch(e) {
                fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'products.js:47',message:'Error checking Manager',data:{error:e.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
              }
              // #endregion
              
              const productId = this.props.primaryKeyValue;
              const productData = this.props.data;
              
              // #region agent log
              fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'products.js:56',message:'Before creating tab',data:{productId,productName:productData?.name,hasViewport:!!window['productsViewport']},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
              // #endregion
              
              // Create a new tab (similar to pony app)
              if (window['productsViewport'] && window['productsViewport'].createTabs) {
                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'products.js:61',message:'About to create JSX with Manager',data:{managerType:typeof Manager,reactType:typeof React},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
                // #endregion
                
                try {
                  const tab = {
                    id: `product-${productId}`,
                    title: productData.name || `Product ${productId}`,
                    subTitle: `ID: ${productId}`,
                    canClose: true,
                    content: (
                      <Manager
                        module="products"
                        view="form"
                        params={{ replaceParams: { id: productId } }}
                      />
                    )
                  };
                  
                  // #region agent log
                  fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'products.js:77',message:'Tab created successfully',data:{tabId:tab.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
                  // #endregion
                  
                  window['productsViewport'].createTabs({ tab: tab });
                } catch (jsxError) {
                  // #region agent log
                  fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'products.js:82',message:'Error creating JSX',data:{error:jsxError.message,stack:jsxError.stack?.substring(0,200)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
                  // #endregion
                  throw jsxError;
                }
              } else {
                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'products.js:88',message:'Viewport not available, using fallback',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
                // #endregion
                
                // Fallback if viewport not available
                alert(`Viewing product ID: ${productId}`);
                console.log('Product data:', productData);
              }
            }
          }
        }
      }
    },
    form: {
      api: {
        view: '/api/products/{id}',
        update: '/api/products/{id}'
      },
      template: 'form',
      primaryKey: 'id',
      fields: {
        id: {
          type: 'label',
          alias: 'id',
          label: 'ID',
          attributes: {
            className: 'form-control'
          }
        },
        name: {
          type: 'text',
          alias: 'name',
          label: 'Product Name',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter product name'
          }
        },
        price: {
          type: 'text',
          alias: 'price',
          label: 'Price',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter price',
            type: 'number',
            step: '0.01'
          }
        },
        category: {
          type: 'text',
          alias: 'category',
          label: 'Category',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter category'
          }
        },
        description: {
          type: 'text',
          alias: 'description',
          label: 'Description',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter product description'
          }
        },
        inStock: {
          type: 'text',
          alias: 'inStock',
          label: 'Stock Quantity',
          attributes: {
            className: 'form-control',
            placeholder: 'Enter stock quantity',
            type: 'number'
          }
        }
      }
    }
  }
};

export default ProductsModule;

