import 'swiper/css';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './components/organisms';

import RoutesConfig from './routes/Routes';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
  )
}

export default App
