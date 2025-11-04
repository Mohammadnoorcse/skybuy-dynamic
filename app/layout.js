// RootLayout.jsx
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { CartWishlistProvider } from "./components/global/CartWishlistContext";

export const metadata = {
  title: "My App",
  description: "Awesome store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <CartWishlistProvider>
            <ClientLayout>{children}</ClientLayout>
          </CartWishlistProvider>
        </div>
      </body>
    </html>
  );
}
