import React, { Component } from 'react';
import Tabs from './Tabs';

class ProductsViewport extends Component {
  state = {
    tabs: []
  };

  createTabs = (args) => {
    // Check if tab already exists
    const existingTab = this.state.tabs.find(tab => tab.id === args.tab.id);
    
    if (existingTab) {
      // Switch to existing tab
      this.setState({ activeTabId: args.tab.id });
      return;
    }

    // Add new tab
    const newTabs = [...this.state.tabs, args.tab];
    this.setState({ 
      tabs: newTabs,
      activeTabId: args.tab.id  // Set new tab as active
    });
  };

  closeTab = (tabId) => {
    const tabs = this.state.tabs.filter(tab => tab.id !== tabId);
    const wasActive = this.state.activeTabId === tabId;
    const newActiveTabId = wasActive && tabs.length > 0 ? tabs[0].id : this.state.activeTabId;
    
    this.setState({ 
      tabs,
      activeTabId: wasActive ? (tabs.length > 0 ? tabs[0].id : null) : this.state.activeTabId
    });
  };

  componentDidMount() {
    // Make createTabs available globally (like pony app)
    window['productsViewport'] = this;
  }

  componentWillUnmount() {
    delete window['productsViewport'];
  }

  render() {
    return (
      <div>
        <Tabs 
          tabs={this.state.tabs} 
          onClose={this.closeTab}
          activeTabId={this.state.activeTabId}
          onTabClick={(tabId) => this.setState({ activeTabId: tabId })}
        />
      </div>
    );
  }
}

export default ProductsViewport;

