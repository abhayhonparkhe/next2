import { inter } from "./ui/fonts";
import "/app/ui/global.css"
import NavLinks from './ui/dashboard/nav-links';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <NavLinks/>
        {children}</body>
    </html>
  );
}
