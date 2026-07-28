"use client";

import { usePathname } from "next/navigation";
import {
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import { useState } from "react";
import { SITE_URL } from "@/utils/constants";

export default function ShareButtons({
  shareText,
  title,
  text,
}: {
  shareText?: string;
  title: string;
  text?: string;
}) {
  const pathname = usePathname();
  const url = `${SITE_URL}${pathname}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text || "");
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
      <span className="font-medium text-gray-700 flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        {(shareText && shareText) || "Share:"}
      </span>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition"
      >
        <Twitter className="w-4 h-4" /> X
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition"
      >
        <Linkedin className="w-4 h-4" /> LinkedIn
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition"
      >
        <Facebook className="w-4 h-4" /> Facebook
      </a>

      <button
        onClick={handleCopy}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition"
      >
        <LinkIcon className="w-4 h-4" /> {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
