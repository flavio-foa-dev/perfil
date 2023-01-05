
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact';
import Perfil from './pages/perfil';
import Project from './pages/project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Perfil/>}
        />
        <Route
          path="/project"
          element={<Project/>}
        />
        <Route
          path="/contact"
          element={<Contact/>}
          ></Route>
      </Routes>
    </div>
  );
}

export default App;
