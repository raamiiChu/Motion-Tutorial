import {
  ArrowRightLeft,
  BookOpenText,
  Diamond,
  Grab,
  Home,
  Inbox,
  Origami,
  Scroll,
  SplinePointer,
  SquareMousePointer,
  Unplug,
  View,
} from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const sideBarItems = [
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
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <ModeToggle />
          {sideBarItems.map(({ groupLabel, menuItems }) => (
            <div key={groupLabel}>
              <SidebarGroupLabel className="flex items-center justify-between py-6">
                <p>{groupLabel}</p>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map(({ title, url, Icon }) => (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton asChild>
                        <a href={url}>
                          <Icon />
                          <span>{title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </div>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
