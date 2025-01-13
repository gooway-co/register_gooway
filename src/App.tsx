import React from 'react';
import  SignUpPage from './pages/signup-page';
import './style.css'; // o el nombre de tu archivo CSS
import { BrowserRouter as Router } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <SignUpPage></SignUpPage>
    </Router>
  );
};

export default App;
