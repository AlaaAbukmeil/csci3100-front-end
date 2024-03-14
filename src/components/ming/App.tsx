// App.tsx (Main entry point for the React application)
import React from 'react';
import ShoppingCart from './checkout';

const App: React.FC = () => {
  return (
    <div>
      <h1>My Shopping Cart</h1>
      <ShoppingCart />
    </div>
  );
};

export default App;