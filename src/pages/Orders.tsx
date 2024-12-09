import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const orders = [
  {
    id: "CMD-001",
    date: "2024-03-15",
    status: "completed",
    total: 165000,
    items: [
      { name: "NPK 17-17-17", quantity: 2, price: 75000 },
      { name: "Maïs Hybride", quantity: 1, price: 15000 }
    ]
  },
  {
    id: "CMD-002",
    date: "2024-03-14",
    status: "pending",
    total: 65000,
    items: [
      { name: "Urée 46%", quantity: 1, price: 65000 }
    ]
  }
];

const statusIcons = {
  pending: <Clock className="h-5 w-5 text-yellow-500" />,
  completed: <CheckCircle className="h-5 w-5 text-green-500" />,
  cancelled: <XCircle className="h-5 w-5 text-red-500" />
};

const statusLabels = {
  pending: "En attente",
  completed: "Complétée",
  cancelled: "Annulée"
};

function Orders() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Package className="h-8 w-8 text-green-600 mr-3" />
        <h1 className="text-3xl font-bold">Mes Commandes</h1>
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
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Détails
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
                    <div className="flex items-center">
                      {statusIcons[order.status]}
                      <span className="ml-2">{statusLabels[order.status]}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.total.toLocaleString()} BIF
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-800">
                      Voir détails
                    </button>
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

export default Orders;