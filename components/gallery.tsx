"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const categories = [
  "All",
  "Rooms",
  "Pool",
  "Events",
  "Dining",
  "Exterior",
];

interface GalleryItem {
  id: string;
  image: string;
  category: string;
}

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<
    GalleryItem[]
  >([]);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "gallery")
      );

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<GalleryItem, "id">),
      }));

      setGalleryItems(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category === activeCategory
        );

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Resort Gallery
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center">
            Loading gallery...
          </p>
        )}

        {/* Empty */}
        {!loading &&
          filteredItems.length === 0 && (
            <p className="text-center">
              No images found
            </p>
          )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-72 object-cover hover:scale-105 transition duration-300"
              />

              <div className="p-4">
                <p className="text-sm font-semibold">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}