import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subset: ["latin"]}) 




export const metadata = {
  title: "Sensai - Career coach",
  description: "Adnan and Ifty",

};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} `}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />

            {/* main content */}
            <main className="min-h-screen">{children}</main>

            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto p-4 text-center text-gray-200">
                <p>© 2023 My Website</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
