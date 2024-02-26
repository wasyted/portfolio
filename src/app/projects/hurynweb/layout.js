export const metadata = {
  title: "HurynWeb",
  description: "HurynWeb project about section",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
