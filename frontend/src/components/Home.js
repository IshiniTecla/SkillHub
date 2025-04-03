import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to SkillHub</h1>
            <p>Select a category to explore:</p>
            <ul>
                <li><Link to="/category/Coding">Coding</Link></li>
                <li><Link to="/category/Photography">Photography</Link></li>
                <li><Link to="/category/Cooking">Cooking</Link></li>
                <li><Link to="/category/DIY">DIY</Link></li>
                <li><Link to="/category/Music">Music</Link></li>
            </ul>
        </div>
    );
};

export default Home;
