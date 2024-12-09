import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "NPK 17-17-17",
      price: 75000,
      quantity: 2,
      unit: "sac 50kg",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Maïs Hybride",
      price: 15000,
      quantity: 5,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mon Panier</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price.toLocaleString()} BIF / {item.unit}</p>
                <div className="flex items-center mt-2">
                  <select 
                    value={item.quantity}
                    className="border rounded-lg px-2 py-1"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button className="ml-4 text-red-500 hover:text-red-700">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">
                  {(item.price * item.quantity).toLocaleString()} BIF
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Sous-total</span>
              <span>{total.toLocaleString()} BIF</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Livraison</span>
              <span>5,000 BIF</span>
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{(total + 5000).toLocaleString()} BIF</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                Commander
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;