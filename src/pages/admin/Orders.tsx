import React from "react";
import { Package, Search, Filter } from "lucide-react";

function AdminOrders() {
  const orders = [
    {
      id: "CMD-001",
      date: "2024-03-15",
      client: "Jean Ndayishimiye",
      status: "pending",
      total: 165000,
      items: [
        { name: "NPK 17-17-17", quantity: 2, price: 75000 },
        { name: "Maïs Hybride", quantity: 1, price: 15000 },
      ],
    },
    {
      id: "CMD-002",
      date: "2024-03-14",
      client: "Marie Niyonkuru",
      status: "processing",
      total: 65000,
      items: [{ name: "Urée 46%", quantity: 1, price: 65000 }],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Package className="h-8 w-8 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold">Gestion des Commandes</h1>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Filter className="h-5 w-5 mr-2" />
            Filtrer
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  N° Commande
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium">{order.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status === "pending"
                        ? "En attente"
                        : "En traitement"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.total.toLocaleString()} BIF
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        Voir
                      </button>
                      <button className="text-green-600 hover: text-green-800">
                        Valider
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Annuler
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminOrders;
