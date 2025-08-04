'use client'
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import React, { useState } from "react";
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/sanity/lib/client';
import { projectId, dataset } from '@/sanity/env';

export default function ConstructionVideo({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  const toEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") {
        return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
      } else if (parsed.pathname.startsWith("/shorts/")) {
        return `https://www.youtube.com/embed/${parsed.pathname.split("/")[2]}`;
      } else if (parsed.searchParams.has("v")) {
        return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
      }
    } catch (err) {
      console.error("Invalid URL:", url);
    }
    return url;
  };

  // ✅ Fallback Data
  const fallback = {
    heading: "Video công trình",
    description:
      "Mỗi năm, NHÀ ĐẸP QUẢNG NAM thực hiện hàng trăm công trình thiết kế ở mọi miền đất nước. Phong cách thiết kế chính là hiện đại - tối giản - tiện nghi - thông thoáng. Ngoài ra, những ý tưởng và sở thích của gia chủ cũng được ưu tiên hàng đầu, để tạo nên một công trình nhà ở độc bản, mang đậm dấu ấn cá nhân.",
    videos: [
      { img: "/thumbnails/7.jpg", alt: "Project 1", youtube: "https://www.youtube.com/shorts/9ThLIZmrLGQ" },
      { img: "/thumbnails/8.jpg", alt: "Project 2", youtube: "https://www.youtube.com/shorts/9ThLIZmrLGH" },
      { img: "/thumbnails/9.jpg", alt: "Project 3", youtube: "https://www.youtube.com/shorts/9ThLIZmrLGQ" },
      { img: "/thumbnails/10.jpg", alt: "Project 4", youtube: "https://www.youtube.com/shorts/9ThLIZmrLGQ" },
      { img: "/thumbnails/11.jpg", alt: "Project 5", youtube: "https://www.youtube.com/shorts/9ThLIZmrLGQ" },
      { img: "/thumbnails/12.jpg", alt: "Project 6", youtube: "https://www.youtube.com/shorts/9ThLIZmrLGQ" }
    ]
  };

  // ✅ Merge Sanity data with fallback (refactored for next-sanity-image)
  const heading = data?.heading || fallback.heading;
  const description = data?.description || fallback.description;
  const videos = data?.videos?.length
    ? data.videos.map((v, i) => ({
        // Keep the original Sanity image object for next-sanity-image
        thumbnail: v.thumbnail || null,
        // Fallback to URL only if no Sanity image exists
        img: !v.thumbnail ? (fallback.videos[i]?.img || null) : null,
        alt: v.title || fallback.videos[i]?.alt,
        youtube: v.youtubeUrl || fallback.videos[i]?.youtube
      }))
    : fallback.videos.map(v => ({
        thumbnail: null, // No Sanity image for fallback items
        img: v.img,
        alt: v.alt,
        youtube: v.youtube
      }));

  // Component for rendering individual video thumbnails
  const VideoThumbnail = ({ video, index, onOpenModal }) => {
    // Create sanity config object for next-sanity-image
    const sanityConfig = { projectId, dataset };
    
    // Use next-sanity-image if we have a Sanity image object
    const sanityImageProps = video.thumbnail 
      ? useNextSanityImage(sanityConfig, video.thumbnail)
      : null;

    return (
      <div
        key={index}
        onClick={() => onOpenModal(toEmbedUrl(video.youtube))}
        className="group aspect-[3/2] bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        {/* Render Sanity image with optimization */}
        {video.thumbnail && sanityImageProps ? (
          <Image
            {...sanityImageProps}
            alt={video.alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-full object-cover"
          />
        ) : (
          /* Fallback to regular Next.js Image for non-Sanity images */
          <Image
            src={video.img}
            alt={video.alt}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  };

  return (
    <>
      <section className="py-12 px-4 md:px-10 bg-gray-50">
        <div className="max-w-370 grid grid-cols-1 md:grid-cols-4 gap-8 ml-auto">
          {/* Text Column */}
          <div className="md:col-span-1 flex flex-col h-full">
            <div>
              <SectionHeading className="text-left">{heading}</SectionHeading>
              <p className="text-base mb-8 leading-relaxed">{description}</p>
            </div>
            <a
              href="/completed-projects"
              className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 w-max"
            >
              Xem thêm
              <ArrowUpRight />
            </a>
          </div>
          {/* Images Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 puff-in-center">
            {videos.map((video, i) => (
              <VideoThumbnail 
                key={i}
                video={video}
                index={i}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-5xl aspect-video mx-4">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoUrl}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}