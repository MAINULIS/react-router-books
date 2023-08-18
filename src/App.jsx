import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      {/* Header section */}
      <Header></Header>
    <Outlet></Outlet>
    {/* Footer section */}
    </div>
  );
};

export default App;