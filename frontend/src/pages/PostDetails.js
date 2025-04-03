import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error("Error fetching post:", error));
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}

export default PostDetails;
