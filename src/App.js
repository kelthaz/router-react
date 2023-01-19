import {BrowserRouter,Routes,Route} from 'react-router-dom'
import InicioSesion from './pages/InicioSesion/inicioSesion.js'
import Home from './pages/Home/home.js'

const  App = () => {

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/inicioSesion' element={<InicioSesion />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
