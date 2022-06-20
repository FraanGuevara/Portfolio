import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ButtonInicio from './components/Inicio/ButtonInicio';
import Inicio from './components/Inicio/Inicio';

import { useTranslation } from 'react-i18next';
import Home from './components/Home/Home';
import Container from './components/Container/Container';
import NotFound from './components/NotFound/NotFound';

function App() {

  const [t, i18n] = useTranslation('global');



  return (
    < >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio t={t} />} />
        <Route path='/' element={<ButtonInicio/>}/>
        <Route exact path='/portfolio' element={<Container t={t} />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
