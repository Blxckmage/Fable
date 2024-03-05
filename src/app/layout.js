import Header from "@/components/Header";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "Fable",
  description: "Blog website",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en">
        <body className="bg-ctp-base">
          <Header />
          <section className="min-h-screen bg-ctp-base text-ctp-text">
            <div className="m-auto mb-2 w-full max-w-4xl px-6 py-3 md:mb-12 md:px-32">
              {children}
            </div>
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
