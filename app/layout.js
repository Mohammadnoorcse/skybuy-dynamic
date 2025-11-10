// RootLayout.jsx
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { CartWishlistProvider } from "./components/global/CartWishlistContext";
import { AuthProvider } from "./components/global/AuthContext";

export const metadata = {
  title: "My App",
  description: "Awesome store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <AuthProvider>
          <CartWishlistProvider>
            <ClientLayout>{children}</ClientLayout>
          </CartWishlistProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
