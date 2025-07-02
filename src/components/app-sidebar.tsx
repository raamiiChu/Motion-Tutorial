import Link from "next/link";

import { ExternalLink } from "lucide-react";

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
import { sideBarGroups } from "@/constants";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <ModeToggle />
          {sideBarGroups.map(({ groupLabel, menuItems }) => (
            <div key={groupLabel}>
              <SidebarGroupLabel className="flex items-center justify-between py-6">
                <p>{groupLabel}</p>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map(({ title, url, Icon, isBlank }) => (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton asChild>
                        <Link href={url} target={isBlank ? "_blank" : "_self"}>
                          <Icon />
                          <span>{title}</span>
                          <span>{isBlank && <ExternalLink size={14} />}</span>
                        </Link>
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
