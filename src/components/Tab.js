import React, { Component } from 'react';

class Tab extends Component {
  state = {
    title: this.props.item.title || 'Untitled',
    subTitle: this.props.item.subTitle || '',
    canClose: this.props.item.canClose !== undefined ? this.props.item.canClose : true
  };

  closeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (this.props.onClose) {
      this.props.onClose(this.props.item.id);
    }
  };

  render() {
    const { title, subTitle, canClose } = this.state;

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</div>
          {subTitle && (
            <div style={{ fontSize: '12px', color: '#666' }}>{subTitle}</div>
          )}
        </div>
        {canClose && (
          <span
            onClick={this.closeClick}
            style={{
              cursor: 'pointer',
              color: '#999',
              fontSize: '16px',
              marginLeft: '5px'
            }}
            title="Close tab"
          >
            ×
          </span>
        )}
      </div>
    );
  }
}

export default Tab;

