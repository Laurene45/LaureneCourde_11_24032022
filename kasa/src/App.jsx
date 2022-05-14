import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import About from './pages/About';
import Error404 from './pages/Error';

import './sass/main.scss';

// Route exact path="/" element={<Home />} => écriture nouvelle version Router

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Location />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
