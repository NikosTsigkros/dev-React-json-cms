import React, { Component } from 'react';
import ControlComponents from './ControlComponents';
import Modules from '../modules/modules';

class Manager extends Component {
  loadModule() {
    return Modules[this.props.module];
  }

  grooming() {
    let module = this.loadModule();
    let view = this.props.view || 'list';
    module = module.views[view];
    return module;
  }

  render() {
    return (
      <ControlComponents
        module={this.grooming()}
        params={this.props.params}
      />
    );
  }
}

export default Manager;

