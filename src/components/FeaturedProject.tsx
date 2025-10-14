"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Step {
  name: string;
  done: boolean;
}

export const FeaturedProject: React.FC = () => {
  const screenshots = [
    "/screenshots/admin-1.png",
    "/screenshots/admin-2.png",
    "/screenshots/admin-3.png",
    "/screenshots/admin-4.png",
    "/screenshots/admin-5.png",
  ];

  const roadmap: Step[] = [
    { name: "Setup Raspberry Pi4 webserver (Ubuntu)", done: true },
    { name: "Public IP access with CGNAT tunnel & SSL", done: true },
    { name: "Basic photographer website layout", done: true },
    { name: "Users management (dashboard)", done: true },
    { name: "Orders management (dashboard)", done: true },
    { name: "Add galleries and services", done: false },
    { name: "Photo upload section for orders (dashboard)", done: false },
    { name: "Site management (dashboard)", done: false },
    { name: "Notifications (dashboard)", done: false },
    { name: "Analytics (dashboard)", done: false },
    { name: "Microservices architecture", done: false },
    { name: "CI/CD pipeline setup", done: false },
    { name: "Arduino temp/humidity sensors → webserver", done: false },
    { name: "Android app for sokirka.com users & orders", done: false },
    { name: "Android app to read Arduino/webserver data", done: false },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = useCallback(() => {
    setSelected((prev) => (prev === null ? 0 : (prev + 1) % screenshots.length));
  }, [screenshots.length]);

  const prevImage = useCallback(() => {
    setSelected((prev) => (prev === null ? 0 : (prev - 1 + screenshots.length) % screenshots.length));
  }, [screenshots.length]);

  const closeLightbox = useCallback(() => setSelected(null), []);

  // Clean keyboard navigation
  useEffect(() => {
    if (selected === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected, nextImage, prevImage, closeLightbox]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl text-gray-200 text-justify mt-8 md:mt-16 w-full"
    >
      <h2 className="text-3xl font-semibold mb-6 text-cyan-400 text-center">Featured Project</h2>
      <p>
        Check out my{" "}
        <a href="https://sokirka.com" className="text-cyan-400 underline" target="_blank" rel="noopener noreferrer">
          live portfolio
        </a>{" "}
        hosted on a Raspberry Pi 4 with Ubuntu Server. It features booking and a lightweight order management system. 
        More features are in progress — see the roadmap below.
      </p>

      {/* Screenshots */}
      <div className="flex flex-wrap justify-center mb-6 pt-6">
        <h2 className="text-xl font-normal">Dashboard screenshots:</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {screenshots.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-lg overflow-hidden border border-gray-700 shadow-lg cursor-pointer"
            onClick={() => setSelected(i)}
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              width={220}
              height={140}
              className="object-cover w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white text-sm sm:text-base font-semibold">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center"
              >
                <Image
                  src={screenshots[selected]}
                  alt={`Screenshot ${selected + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain w-full max-h-[80vh] rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white px-3 py-2 rounded-full"
              >
                ◀
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white px-3 py-2 rounded-full"
              >
                ▶
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="absolute top-4 right-4 bg-gray-800/70 hover:bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Roadmap */}
      <div className="flex flex-wrap justify-center mb-6 pt-6">
        <h2 className="text-xl font-normal">Project roadmap:</h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-l border-gray-600 pl-6">
          {roadmap.map((step, index) => (
            <div key={index} className="mb-6 relative">
              <span
                className={`absolute -left-6 top-0 w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  step.done ? "bg-green-500 text-white" : "bg-gray-700 text-gray-400"
                }`}
              >
                {step.done ? "✓" : "---"}
              </span>
              <span className={`${step.done ? "text-gray-200" : "text-gray-500"} ml-2`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
