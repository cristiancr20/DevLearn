
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './core/Home';
import Signin from './core/Signin';
import Signup from './core/Signup';
import Team from './pages/Team';
import Cursos from './pages/Cursos';
import Inicio from './pages/Inicio';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Rutas de la carpeta core */}
          <Route path="/" element={<Home/>}></Route>
          <Route path ="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>

          {/* Rutas de la carpeta pages */}
          <Route path = "/inicio" element={<Inicio/>}></Route>
          <Route path = "/cursos" element={<Cursos/>}></Route>
          <Route path='/equipo' element={<Team/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
