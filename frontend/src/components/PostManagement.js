import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../api/api';

const PostManagement = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then((res) => setPosts(res.data));
    }, []);

    const handleDelete = (id) => {
        deletePost(id).then(() => {
            setPosts(posts.filter((post) => post.id !== id));
        });
    };

    return (
        <div>
            <h1>Manage Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PostManagement;
