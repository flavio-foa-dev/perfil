
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Tools from './pages/tools';
import NotFound from './pages/notFound';
import Perfil from './pages/perfil';
import Project from './pages/project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact path="/"
          element={<Perfil/>}
        />
        <Route
          exact path="/project"
          element={<Project/>}
        />
        <Route
          exact path="/tools"
          element={<Tools/>}
        />
        <Route
        exact path="*"
        element={<NotFound/>}
        />
      </Routes>
    </div>
  );
}

export default App;
