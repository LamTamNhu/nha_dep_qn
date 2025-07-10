import React from "react";

const socialLinks = [
  {
    href: "https://www.youtube.com/",
    img: "/youtube.png",
    alt: "YouTube",
    external: true,
  },
  {
    href: "https://m.me/",
    img: "/messenger.png",
    alt: "Messenger",
    external: true,
  },
  {
    href: "tel:0123456789",
    img: "/phone.png",
    alt: "Phone",
    external: false,
  },
  {
    href: "https://zalo.me/",
    img: "/zalo.png",
    alt: "Zalo",
    external: true,
  },
];

export default function ContactFloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {socialLinks.map((item) => (
        <a
          key={item.alt}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <img src={item.img} alt={item.alt} className="w-10 h-10" />
        </a>
      ))}
      <a
        href="#contact"
        className="mt-2 w-14 h-14 rounded-full bg-orange-400 shadow-xl flex items-center justify-center hover:bg-orange-500 transition-colors"
      >
        <span className="text-white font-bold text-xl">Liên hệ</span>
      </a>
    </div>
  );
}
