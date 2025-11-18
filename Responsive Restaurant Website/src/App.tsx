import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { OrderSection } from "./components/OrderSection";
import { Contact } from "./components/Contact";
import { CartProvider } from "./context/CartContext";
import { CartModal } from "./components/CartModal";
import { CheckoutModal } from "./components/CheckoutModal";
import { AddToCartToast } from "./components/AddToCartToast";
import { OpenStatusIndicator } from "./components/OpenStatusIndicator";
import { useState } from "react";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastProduct, setToastProduct] = useState<any>(null);

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleAddToCart = (product: any) => {
    setToastProduct(product);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <OrderSection />
        <Contact />
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
        <AddToCartToast show={showToast} product={toastProduct} />
        <OpenStatusIndicator />
      </div>
    </CartProvider>
  );
}