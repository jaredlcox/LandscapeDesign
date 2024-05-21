import './index.css';
import React from 'react';
import LandscapeCanvas from './components/landscapeCanvass/landscapeCanvass.js';
import Design3dTab from './components/plantSection/design3dTab.js';

function App() {
  return (
    <div>
      <LandscapeCanvas />
      <Design3dTab />
    </div>
  );
}

export default App;
