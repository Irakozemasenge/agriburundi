import React from "react";
import { Plus, Package, Edit, Trash2 } from "lucide-react";

function AdminProducts() {
  const products = [
    {
      id: 1,
      name: "NPK 17-17-17",
      category: "Engrais",
      price: 75000,
      stock: 50,
      unit: "sac 50kg",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      name: "Urée 46%",
      category: "Engrais",
      price: 65000,
      stock: 30,
      unit: "sac 50kg",
      image:
        "https://images.unsplash.com/photo-1592978857577-32c88fc457f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Maïs Hybride",
      category: "Semences",
      price: 15000,
      stock: 100,
      unit: "kg",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Package className="h-8 w-8 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold">Gestion des Produits</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Plus className="h-5 w-5 mr-2" />
          Nouveau Produit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-sm text-green-600 font-semibold">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  {product.price.toLocaleString()} BIF / {product.unit}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Stock disponible:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.stock > 20
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.stock} {product.unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;
