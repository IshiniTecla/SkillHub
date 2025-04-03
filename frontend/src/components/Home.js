import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const categories = ['Coding', 'Photography', 'Cooking', 'DIY', 'Music'];

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
