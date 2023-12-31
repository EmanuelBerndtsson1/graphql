import './App.css';
import './components/auth'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/auth';
import ProfileWrapper from './components/profileWrapper';

function App() {
  return (
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/profile" element={<ProfileWrapper />} />
          </Routes>
        </div>
    );
}

export default App;
