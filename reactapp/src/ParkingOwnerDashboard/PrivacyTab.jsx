import React from 'react';
import './dashboard-styles/privateTab.css';

const PrivacyTab = () => {
  return (
    <div className="tab-panel privacy">
      <h2>Privacy Settings</h2>
      <div className="privacy-option">
        <label>Allow search engines to index your profile</label>
        <input type="checkbox" />
      </div>
      <div className="privacy-option">
        <label>Receive promotional emails</label>
        <input style={{marginLeft:"80px"}} type="checkbox" />
      </div>
      <div className="privacy-option">
        <label>Enable two-factor authentication</label>
        <input style={{marginLeft:"70px"}} type="checkbox" />
      </div>
    </div>
  );
};

export default PrivacyTab;
