import './App.css';
import Login from './pages/login.js'; 
import Register from './pages/register';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Accueil from './pages/accueil';
import { PrivateRoute } from './component/privateroute';
import Nav from './pages/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute> <Accueil /> </PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nav" element={<Nav />} />
        </Routes>
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
