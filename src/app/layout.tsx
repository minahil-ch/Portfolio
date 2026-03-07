import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minahil Anjum | MERN Stack & Mobile App Developer",
  description: "Senior Software Engineering student and passionate MERN Stack & Mobile App Developer (Flutter). Explore my portfolio featuring high-impact projects in POS systems, Task management, and AI.",
  keywords: ["Minahil Anjum", "Software Engineer", "MERN Stack Developer", "Mobile App Developer", "Flutter Developer", "Portfolio", "Vehari", "COMSATS"],
  authors: [{ name: "Minahil Anjum" }],
  openGraph: {
    title: "Minahil Anjum | Software Engineer Portfolio",
    description: "Cutting-edge portfolio showcasing the intersection of minimalist design and high-impact software engineering.",
    url: "https://minahilanjum.com",
    siteName: "Minahil Anjum Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minahil Anjum | Software Engineer Portfolio",
    description: "MERN Stack & Mobile App Developer Portfolio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col relative`}
      >
        <div className="noise-overlay fixed inset-0 pointer-events-none z-50" />
        <ScrollProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <div className="flex-grow flex flex-col min-w-0 lg:pl-72 uppercase-headings">
            <main className="flex-grow relative z-10 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

