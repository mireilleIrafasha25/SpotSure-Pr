import React from 'react';
import './dashboard-styles/preferenceTab.css';

const SystemPreferencesTab = () => {
  return (
    <div className="tab-panel system-preferences">
      <h2>System Preferences</h2>
      <div className="preference-item">
        <label>Language</label>
        <select>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <div className="preference-item">
        <label>Time Zone</label>
        <select>
          <option value="gmt">GMT</option>
          <option value="est">EST</option>
          <option value="pst">PST</option>
        </select>
      </div>
    </div>
  );
};

export default SystemPreferencesTab;
