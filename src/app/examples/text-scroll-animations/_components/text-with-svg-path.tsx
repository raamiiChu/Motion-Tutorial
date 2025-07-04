"use client";

import { useEffect, useRef } from "react";

import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { motion, useScroll, useTransform } from "motion/react";

const socialIcons = [
  {
    name: "Facebook",
    Icon: SiFacebook,
  },
  {
    name: "Github",
    Icon: SiGithub,
  },
  {
    name: "Instagram",
    Icon: SiInstagram,
  },
  {
    name: "Linkedin",
    Icon: SiYoutube,
  },
  {
    name: "Twitter",
    Icon: SiX,
  },
];

const TextWithSvgPath = ({ children }: { children: string }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<SVGTextPathElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const footerY = useTransform(scrollYProgress, [0, 1], ["150%", "0%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      textRefs.current.forEach((textRef, index) => {
        textRef.setAttribute(
          "startOffset",
          `${latest * 40 + (-40 + index * 40)}%`
        );
      });
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <figure ref={targetRef}>
      <svg className="py-20" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="fill-blue-400 text-[0.375rem] uppercase">
          {Array.from({ length: 3 }).map((_, index) => (
            <textPath
              key={index}
              href="#curve"
              startOffset={`${index * 40}%`}
              ref={(ref) => {
                if (ref) {
                  textRefs.current[index] = ref;
                }
              }}
            >
              {children}
            </textPath>
          ))}
        </text>
      </svg>

      <footer className="bg-foreground/95 h-24 overflow-hidden">
        <motion.div
          role="presentation"
          style={{ y: footerY }}
          className="text-background flex h-full items-center justify-center gap-4"
        >
          {socialIcons.map(({ name, Icon }) => (
            <Icon key={name} className="size-6" />
          ))}
        </motion.div>
      </footer>
    </figure>
  );
};

export default TextWithSvgPath;
