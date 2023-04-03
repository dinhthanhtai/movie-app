import { Routes, Route } from 'react-router-dom';

import Catalog from '../components/templates/Catalog';
import Detail from '../components/templates/detail/Detail';
import Home from '../components/templates/Home';

const RoutesConfig = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Catalog/>}/>
        <Route path='/movie/:id' element={<Detail/>} />
        <Route path='/tv' element={<Catalog/>}/>
        <Route path='/tv/:id' element={<Detail/>} />
    </Routes>
  )
}

export default RoutesConfig