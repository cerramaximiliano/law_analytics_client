import './App.css'
import { Route, Routes } from "react-router-dom";
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Laboral from './views/Laboral/Laboral';
import Civil from './views/Civil/Civil';
import Previsional from './views/Previsional/Previsional';
import Interes from './views/Interes/Interes';
import Notificaciones from './views/Notificaciones/Notificaciones';
import Favoritos from './views/Favoritos/Favoritos';
import Calendario from './views/Calendario/Calendario';
import NotFound from './views/NotFound/NotFound';

function App() {

  return (
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/laboral' element={<Laboral/>}></Route>
        <Route path='/civil' element={<Civil/>}></Route>
        <Route path='/previsional' element={<Previsional/>}></Route>
        <Route path='/interes' element={<Interes/>}></Route>
        <Route path='/notificaciones' element={<Notificaciones/>}></Route>
        <Route path='/favoritos' element={<Favoritos/>}></Route>
        <Route path='/calendario' element={<Calendario/>}></Route>
        <Route path="*" element={<NotFound />} /> {/* Ruta para la página 404 */}
        <Route path='/' element={<Landing/>}/>
      </Routes>
  )
}

export default App
