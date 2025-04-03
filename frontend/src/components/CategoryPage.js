import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { category } = useParams();

    return (
        <div>
            <h2>Posts in {category}</h2>
            <p>Display posts related to {category} here.</p>
        </div>
    );
};

export default CategoryPage;
