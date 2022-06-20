import './App.css';
import Login from './pages/login.js'; 
import Register from './pages/register';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Accueil from './pages/accueil';
import PrivateRoute from './component/privateroute';
import Nav from './pages/navbar';
import Message from './pages/message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Accueil /> 
            </PrivateRoute>
                  
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
