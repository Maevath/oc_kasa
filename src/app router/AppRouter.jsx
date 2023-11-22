import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Error from '../pages/error/Error';
import Lodging from '../pages/lodging/Lodging';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/lodging/:id' element={<Lodging />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;



