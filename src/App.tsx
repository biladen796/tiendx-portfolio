import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

/**
 * Init react app
 * @return {JSX.Element}
 */
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
