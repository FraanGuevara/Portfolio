import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ButtonInicio from './components/Inicio/ButtonInicio';
import Inicio from './components/Inicio/Inicio';

import { useTranslation } from 'react-i18next';
import Home from './components/Home/Home';
import Container from './components/Container/Container';

function App() {

  const [t, i18n] = useTranslation('global');



  return (
    < >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio t={t} />} />
        <Route path='/' element={<ButtonInicio/>}/>
        <Route exact path='/portfolio' element={<Container t={t} />}/>
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
