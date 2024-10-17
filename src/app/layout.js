
import { Inter, Roboto_Mono, Source_Code_Pro } from "next/font/google";
import "./globals.css";


const inter = Roboto_Mono({ subsets: ["latin"] });


export const metadata = {
  title: "Matías Wasyluk",
  description: "My portfolio and curriculum site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

    </html>
  );
}
