import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/containers/Layout';

const Home = lazy(() => import('@/containers/Home'));
const About = lazy(() => import('@/containers/About'));
const Page404 = lazy(() => import('@/containers/Page404'));

function App() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
