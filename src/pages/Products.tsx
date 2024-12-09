import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "NPK 17-17-17",
    category: "Engrais",
    price: 75000,
    unit: "sac 50kg",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Urée 46%",
    category: "Engrais",
    price: 65000,
    unit: "sac 50kg",
    image: "https://images.unsplash.com/photo-1592978857577-32c88fc457f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Maïs Hybride",
    category: "Semences",
    price: 15000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Haricot Select",
    category: "Semences",
    price: 12000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1551529834-525807d6b4f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos Produits</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-green-600 font-semibold">{product.category}</span>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price.toLocaleString()} BIF / {product.unit}</p>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;