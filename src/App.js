import React, { useState } from 'react';
import HomePage from './components/home';
import LoginPage from './components/login';
import ThirdPage from './components/blank';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleGetStarted = () => {
    setCurrentPage('login');
  };
  
  const handleLogin = () => {
    setCurrentPage('third');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onGetStarted={handleGetStarted} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'third':
        return <ThirdPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;
