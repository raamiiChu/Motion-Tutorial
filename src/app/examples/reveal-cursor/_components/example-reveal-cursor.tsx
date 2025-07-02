"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useMotionTemplate, useSpring } from "motion/react";

const initialCircleSize = 5;

const ExampleRevealCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const opacity = useSpring(0);
  const x = useSpring(0);
  const y = useSpring(0);
  const circleSize = useSpring(initialCircleSize);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!containerRef.current) {
      return;
    }

    opacity.set(1);

    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();

    const xPercentage = ((e.clientX - left) / width) * 100;
    const yPercentage = ((e.clientY - top) / height) * 100;

    x.set(xPercentage);
    y.set(yPercentage);
  };

  const handleMouseLeave = () => {
    if (circleSize.get() === initialCircleSize) {
      opacity.set(0);
    }
  };

  const handleClick = () => {
    circleSize.set(100);
    opacity.set(0);
    setShowVideo(true);
  };

  useEffect(() => {
    if (iframeRef.current && showVideo) {
      const iframe = iframeRef.current;
      const url = new URL(iframe.src);
      url.searchParams.set("autoplay", "1");
      iframe.src = url.toString();
    }
  }, [showVideo]);

  return (
    <figure
      ref={containerRef}
      className="bg-foreground/95 relative aspect-square cursor-none sm:aspect-video"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          opacity,
          clipPath: useMotionTemplate`circle(${circleSize}rem at ${x}% ${y}%)`,
          backgroundImage:
            "url(https://preview.redd.it/what-is-this-shoe-v0-elddsuu46mud1.jpeg?auto=webp&s=2925c9d9de7525283dbddd9e9d89c54aee0f4bff)",
        }}
      />

      {showVideo && (
        <iframe
          ref={iframeRef}
          className="absolute inset-0 size-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </figure>
  );
};

export default ExampleRevealCursor;
