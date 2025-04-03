import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByCategory } from '../api/api';

const CategoryPage = () => {
    const { category } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPostsByCategory(category).then((res) => setPosts(res.data));
    }, [category]);

    return (
        <div>
            <h2>{category} Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;
