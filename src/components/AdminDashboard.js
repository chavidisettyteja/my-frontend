import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import AdminPage from './AdminPage';      // Your existing project form
import PlotsInput from './PlotsInput';    // Your existing plot form

function AdminDashboard() {
  const [formType, setFormType] = useState('project');

  const handleToggle = (_, newType) => {
    if (newType !== null) setFormType(newType);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8d2dc' }}>
      {/* Toggle Button */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <ToggleButtonGroup
          value={formType}
          exclusive
          onChange={handleToggle}
          aria-label="form toggle"
          color="primary"
        >
          <ToggleButton value="project">Projects</ToggleButton>
          <ToggleButton value="plot">Plots</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Conditional Form Rendering */}
      {formType === 'project' ? <AdminPage /> : <PlotsInput />}
    </div>
  );
}

export default AdminDashboard;
