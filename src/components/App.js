import React from 'react';
import AppRouter from "./Router";

function App() {
  return (
    <>
      <AppRouter/>
      <footer>&copy; gps {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
