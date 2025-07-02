import { SiYoutube } from "@icons-pack/react-simple-icons";
import {
  ArrowRightLeft,
  BookMarked,
  BookOpenText,
  Diamond,
  Grab,
  Home,
  Inbox,
  LassoSelect,
  Origami,
  Scroll,
  Sparkles,
  SplinePointer,
  SquareMousePointer,
  Unplug,
  View,
  WandSparkles,
} from "lucide-react";

type MenuItem = {
  title: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
  isBlank?: boolean;
};

type SideBarGroup = {
  groupLabel: string;
  menuItems: MenuItem[];
};

export const sideBarGroups: SideBarGroup[] = [
  {
    groupLabel: "Introduction",
    menuItems: [
      {
        title: "What is Motion ?",
        url: "/",
        Icon: Home,
      },
    ],
  },
  {
    groupLabel: "Basics",
    menuItems: [
      {
        title: "Motion Components",
        url: "/basics/motion-components",
        Icon: Inbox,
      },
      {
        title: "Transition",
        url: "/basics/transition",
        Icon: ArrowRightLeft,
      },
      {
        title: "Keyframes",
        url: "/basics/keyframes",
        Icon: Diamond,
      },
      {
        title: "Exit Animation",
        url: "/basics/exit-animation",
        Icon: Unplug,
      },
    ],
  },
  {
    groupLabel: "Gestures",
    menuItems: [
      {
        title: "While Props",
        url: "/gestures/while-props",
        Icon: SquareMousePointer,
      },
      {
        title: "Drag",
        url: "/gestures/drag",
        Icon: Grab,
      },
      {
        title: "View Based Animations",
        url: "/gestures/view-based-animations",
        Icon: View,
      },
    ],
  },
  {
    groupLabel: "Hooks",
    menuItems: [
      {
        title: "useMotionValue",
        url: "/hooks/use-motion-value",
        Icon: BookOpenText,
      },
      {
        title: "useScroll",
        url: "/hooks/use-scroll",
        Icon: Scroll,
      },
    ],
  },
  {
    groupLabel: "Examples",
    menuItems: [
      {
        title: "Hover Tilt Card",
        url: "/examples/hover-tilt-card",
        Icon: SplinePointer,
      },
      {
        title: "Text Scroll Animations",
        url: "/examples/text-scroll-animations",
        Icon: Origami,
      },
      {
        title: "Reveal Cursor",
        url: "/examples/reveal-cursor",
        Icon: LassoSelect,
      },
    ],
  },
  {
    groupLabel: "Recommended UI Collections",
    menuItems: [
      {
        title: "Aceternity UI",
        url: "https://ui.aceternity.com/",
        Icon: WandSparkles,
        isBlank: true,
      },
      {
        title: "Motion Primitives",
        url: "https://motion-primitives.com/",
        Icon: Sparkles,
        isBlank: true,
      },
    ],
  },
  {
    groupLabel: "Reference",
    menuItems: [
      {
        title: "Motion Docs",
        url: "https://motion.dev/",
        Icon: BookMarked,
        isBlank: true,
      },
      {
        title: "Lenis Docs",
        url: "https://lenis.darkroom.engineering/",
        Icon: BookMarked,
        isBlank: true,
      },
      {
        title: "Motion Crash Course",
        url: "https://youtu.be/znbCa4Rr054?si=6cGe9US2m4hOyHyg",
        Icon: SiYoutube,
        isBlank: true,
      },
      {
        title: "Text on an SVG Path",
        url: "https://youtu.be/UxiLC9XFvuM?si=no0O6mj4gRU18OYf",
        Icon: SiYoutube,
        isBlank: true,
      },
      {
        title: "Lenis in Next.js",
        url: "https://youtu.be/fpyNjX-dVBs?si=CVav6tnsWnvtu55p",
        Icon: SiYoutube,
        isBlank: true,
      },
    ],
  },
];
