import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pokemon",
  description: "Pokemon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={roboto.className}>
        <div className="w-screen h-screen dark:bg-zinc-950">{children}</div>
      </body>
    </html>
  );
}
