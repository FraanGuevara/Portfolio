import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ButtonHome from './components/Home/ButtonHome';
import Home from './components/Home/Home';
import NavbarOrDrawer from './components/Navbar/NavbarOrDrawer';
import { useTranslation } from 'react-i18next';

function App() {

  const [t, i18n] = useTranslation('global');



  return (
    < >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home t={t} />} />
      <Route path='/' element={<ButtonHome/>}/>
      <Route path="/portfolio" element={<NavbarOrDrawer t={t}/>} />
    </Routes>
    {/* <NavbarOrDrawer/> */}
    
    </BrowserRouter>
    </>
  );
}

export default App;
