import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites Icon Issue Test Page"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
