import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { categoryId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/category/${categoryId}`)
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching posts:", error));
  }, [categoryId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{categoryId} Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="p-4 border rounded mb-2">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
