import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import { AppSidebar } from "@/components/app-sidebar";
import ScrollbarProgress from "@/components/component/scrollbar-progress";
import { LenisProvider } from "@/components/lenis-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motion Tutorial",
  description: "Basic tutorial about motion. 2025 © Ramy Chu",
  authors: [{ name: "Ramy Chu", url: "https://github.com/raamiiChu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LenisProvider>
        <body className={`${notoSans.className} mx-auto antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <main className="relative w-full">
                <ScrollbarProgress />
                <SidebarTrigger className="bg-background border-accent sticky top-0 z-50 border-2 md:border-0" />
                <article className="container mx-auto px-4 py-12 md:px-12 lg:px-24 xl:px-40 2xl:px-64">
                  {children}
                </article>
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </LenisProvider>
    </html>
  );
}
