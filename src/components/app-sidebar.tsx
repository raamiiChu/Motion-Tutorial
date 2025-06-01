import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
        Icon: Calendar,
      },
      {
        title: "Exit Animation",
        url: "/basics/exit-animation",
        Icon: Search,
      },
      {
        title: "Keyframes",
        url: "/basics/keyframes",
        Icon: Settings,
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
