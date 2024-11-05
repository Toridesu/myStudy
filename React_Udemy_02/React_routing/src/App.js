import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';
import { UrlParameter } from './UrlParameter';
import { Page404 } from './Page404';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to='/'>HOME</Link>
        <br />
        <Link to='page1'>Page1</Link>
        <br />
        <Link to='page2'>Page2</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page1/DetailA' element={<Page1DetailA />} />
        <Route path='/page1/DetailB' element={<Page1DetailB />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page2/:id" element={<Page2 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
