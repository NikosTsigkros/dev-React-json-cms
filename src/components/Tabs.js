import React, { Component } from 'react';
import Tab from './Tab';

class Tabs extends Component {
  state = {
    tabs: this.props.tabs || [],
    activeTabId: this.props.activeTabId || (this.props.tabs && this.props.tabs.length > 0 ? this.props.tabs[0].id : null)
  };

  componentDidUpdate(prevProps) {
    if (prevProps.tabs !== this.props.tabs || prevProps.activeTabId !== this.props.activeTabId) {
      const newTabs = this.props.tabs || [];
      const newActiveTabId = this.props.activeTabId !== undefined 
        ? this.props.activeTabId 
        : (newTabs.length > 0 && !newTabs.find(t => t.id === this.state.activeTabId)
          ? newTabs[0].id
          : this.state.activeTabId || (newTabs.length > 0 ? newTabs[0].id : null));
      
      this.setState({ 
        tabs: newTabs,
        activeTabId: newActiveTabId
      });
    }
  }

  handleTabClick = (tabId) => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tabs.js:35',message:'Tab click handler',data:{tabId,currentActive:this.state.activeTabId,hasOnTabClick:!!this.props.onTabClick},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    if (this.props.onTabClick) {
      this.props.onTabClick(tabId);
    } else {
      this.setState({ activeTabId: tabId });
    }
  };

  render() {
    const { tabs, activeTabId } = this.state;

    if (tabs.length === 0) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
          No tabs open. Click on a product to open it in a new tab.
        </div>
      );
    }

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/3879f34b-ab3f-4ac2-abcf-e3c38d4b8e4d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tabs.js:48',message:'Tabs render',data:{tabCount:tabs.length,activeTabId,tabIds:tabs.map(t=>t.id)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

    return (
      <div>
        <ul
          className="nav nav-tabs"
          role="tablist"
          style={{
            borderBottom: '1px solid #dee2e6',
            marginBottom: '20px'
          }}
        >
          {tabs.map((item) => {
            const isActive = item.id === activeTabId;
            return (
              <li
                className={`nav-item ${isActive ? 'active' : ''}`}
                key={`tab-li-${item.id}`}
              >
                <a
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  href={`#tab-${item.id}`}
                  role="tab"
                  id={`tab-link-${item.id}`}
                  aria-controls={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleTabClick(item.id);
                  }}
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent'
                  }}
                >
                  <Tab item={item} onClose={this.props.onClose} />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="tab-content">
          {tabs.map((item) => {
            const isActive = item.id === activeTabId;
            return (
              <div
                className={`tab-pane ${isActive ? 'active' : ''}`}
                id={`tab-${item.id}`}
                role="tabpanel"
                key={`tab-content-${item.id}`}
              >
                <div style={{ padding: '20px' }}>
                  {Array.isArray(item.content)
                    ? item.content.map((itemRow, indexRow) => (
                        <div key={indexRow}>{itemRow}</div>
                      ))
                    : item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;

