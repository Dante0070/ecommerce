  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <- ESTA ES LA LÍNEA QUE FALTA
  import Navbar from './components/Navbar';
  import Productos from './components/Productos';
  import Carrito from './components/Carrito';
  import Carrusel from './components/Carrusel';
  import Historial from './paginas/historial';

  function App() {
    return (
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Carrusel />
                  <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
                    Tienda de Higiene Mecánica
                  </h1>
                  <Productos />
                  <Carrito />
                </>
              } 
            />
            <Route path="paginas/historial" element={< historial />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
