"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const categories = [
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

export default function AdminGalleryPage() {
  const [image, setImage] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState<string>("");

  const [category, setCategory] =
    useState("Rooms");

  const [loading, setLoading] =
    useState(false);

  const [galleryItems, setGalleryItems] =
    useState<GalleryItem[]>([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  // FETCH GALLERY
  const fetchGallery = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "gallery")
      );

      const data = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<
            GalleryItem,
            "id"
          >),
        })
      );

      setGalleryItems(data);

    } catch (error) {
      console.log(error);
    }
  };

  // HANDLE IMAGE SELECT
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // IMAGE SIZE VALIDATION
    const maxSize = 300 * 1024; // 300KB

    if (file.size > maxSize) {
      alert(
        "Image size must be less than 300KB"
      );
      return;
    }

    setImage(file);

    // PREVIEW
    const imagePreview =
      URL.createObjectURL(file);

    setPreview(imagePreview);
  };

  // UPLOAD IMAGE
  const handleUpload = async () => {
    if (!image) {
      alert("Please select image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", image);

      formData.append(
        "upload_preset",
        process.env
          .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
      );

      // CLOUDINARY UPLOAD
      const cloudinaryRes =
        await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );

      const imageUrl =
        cloudinaryRes.data.secure_url;

      // FIRESTORE SAVE
      await addDoc(
        collection(db, "gallery"),
        {
          image: imageUrl,
          category,
          createdAt: Date.now(),
        }
      );

      alert("Image uploaded successfully");

      setImage(null);
      setPreview("");
      setCategory("Rooms");

      fetchGallery();

    } catch (error) {
      console.log(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // DELETE IMAGE
  const handleDelete = async (
    id: string
  ) => {
    try {
      const confirmDelete = confirm(
        "Delete this image?"
      );

      if (!confirmDelete) return;

      await deleteDoc(
        doc(db, "gallery", id)
      );

      setGalleryItems((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );

      alert("Image deleted");

    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* UPLOAD SECTION */}
      <div className="bg-white p-6 rounded-3xl shadow-xl max-w-md mx-auto mb-10">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Gallery
        </h1>

        <div className="space-y-5">

          {/* FILE INPUT */}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border p-3 rounded-xl"
            />

            <p className="text-sm text-gray-500 mt-2">
              Maximum image size: 300KB
            </p>
          </div>

          {/* IMAGE PREVIEW */}
          {preview && (
            <div className="border rounded-2xl overflow-hidden">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          >
            {categories.map((cat) => (
              <option key={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* BUTTON */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading
              ? "Uploading..."
              : "Upload Image"}
          </button>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">
            All Photos
          </h2>

          <p className="text-gray-600">
            Total: {galleryItems.length}
          </p>
        </div>

        {galleryItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow">
            <p className="text-gray-500">
              No images found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <div className="flex items-center justify-between mb-4">

                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="w-full bg-red-500 text-white py-2.5 rounded-xl hover:bg-red-600 transition"
                  >
                    Delete Image
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}