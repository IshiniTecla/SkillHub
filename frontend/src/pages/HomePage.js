import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "coding", name: "Coding", image: "/images/coding.jpg" },
  { id: "photography", name: "Photography", image: "/images/photography.jpg" },
  { id: "cooking", name: "Cooking", image: "/images/cooking.jpg" },
  { id: "diy", name: "DIY Crafts", image: "/images/diy.jpg" },
  { id: "music", name: "Music", image: "/images/music.jpg" },
];

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Explore Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="block border rounded-lg overflow-hidden shadow-lg"
          >
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
