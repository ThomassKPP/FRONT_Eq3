import './App.css';
import Login from './pages/login'; 
import Register from './pages/register';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './component/privateroute';
import ChatBody from './Chat/chatBody/ChatBody';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <Login /> 
                  
            } />
          <Route path="/Chat" element={<ChatBody />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
