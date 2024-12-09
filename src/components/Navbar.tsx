import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Package,
  Home,
  ClipboardList,
  Settings,
} from "lucide-react";

function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8" />
              <span className="font-bold text-xl">AgriBurundi</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAdmin ? (
              <>
                <Link
                  to="/admin"
                  className="flex items-center space-x-1 hover:text-green-200"
                >
                  <Home className="h-5 w-5" />
                  <span>Tableau de bord</span>
                </Link>
                <Link
                  to="/admin/orders"
                  className="flex items-center space-x-1 hover:text-green-200"
                >
                  <ClipboardList className="h-5 w-5" />
                  <span>Commandes</span>
                </Link>
                <Link
                  to="/admin/products"
                  className="flex items-center space-x-1 hover:text-green-200"
                >
                  <Settings className="h-5 w-5" />
                  <span>Produits</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/products" className="hover:text-green-200">
                  Produits
                </Link>
                <Link to="/orders" className="hover:text-green-200">
                  Mes Commandes
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center space-x-1 hover:text-green-200"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Panier</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
