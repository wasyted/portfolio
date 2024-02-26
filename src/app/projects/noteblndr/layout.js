export const metadata = {
  title: "noteblndr",
  description: "noteblndr project about section",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
