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
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
