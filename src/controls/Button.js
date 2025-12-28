import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    if (this.props.field.events && this.props.field.events.onClick) {
      // Bind 'this' context and pass primaryKeyValue
      this.props.field.events.onClick.call({
        props: {
          primaryKeyValue: this.props.primaryKeyValue,
          data: this.props.data
        }
      });
    }
  };

  render() {
    const { field, value } = this.props;
    const attributes = field.attributes || {};
    
    return (
      <button
        {...attributes}
        onClick={this.handleClick}
        type="button"
      >
        {field.caption || value || 'Button'}
      </button>
    );
  }
}

export default Button;

