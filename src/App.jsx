// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Headers from './Components/header'; "./Components/header"
import Home from "./Components/home"

function Acerca(){
  return <><h1>hola Acerca</h1></>;
}

function Servicios(){
  return <><h1>hola Servicios</h1></>;
}

const App = () => {
  return (
    <Router>
    <div>
      <Headers/>
      <Navbar />

      {/* Usamos <Routes> para envolver nuestras rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
