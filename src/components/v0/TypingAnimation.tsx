"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  roles: string[];
}

export default function TypingAnimation({ roles }: TypingAnimationProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="flex items-center gap-2 h-12">
      <span className="text-2xl md:text-4xl font-bold text-white">
        {text}
      </span>
      <span className="w-1 h-8 md:h-10 bg-primary animate-pulse" />
    </div>
  );
}