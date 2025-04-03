import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import PostManagement from './components/PostManagement';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/manage" element={<PostManagement />} />
            </Routes>
        </Router>
    );
}

export default App;
