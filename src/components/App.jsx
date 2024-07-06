import React from 'react';
import { createRoot } from 'react-dom/client';
import SignIn from 'components/SignIn/SignIn';

const App = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
