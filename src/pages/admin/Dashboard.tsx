import React from "react";
import { TrendingUp, Users, Package, DollarSign } from "lucide-react";

function AdminDashboard() {
  const stats = [
    {
      title: "Commandes du jour",
      value: "12",
      icon: <Package className="h-6 w-6 text-purple-600" />,
      trend: "+20%",
    },
    {
      title: "Clients actifs",
      value: "45",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      trend: "+5%",
    },
    {
      title: "Produits en stock",
      value: "28",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      trend: "-2%",
    },
    {
      title: "Revenu du mois",
      value: "2.5M BIF",
      icon: <DollarSign className="h-6 w-6 text-yellow-600" />,
      trend: "+15%",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tableau de Bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gray-100 rounded-lg p-3">{stat.icon}</div>
              <span
                className={`text-sm font-semibold ${
                  stat.trend.startsWith("+") ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.trend}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Commandes Récentes</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <p className="font-semibold">CMD-00{index + 1}</p>
                  <p className="text-sm text-gray-600">
                    Il y a {index + 1} heures
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                  En attente
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Stock Faible</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <p className="font-semibold">NPK 17-17-17</p>
                  <p className="text-sm text-gray-600">5 sacs restants</p>
                </div>
                <button className="px-3 py-1 rounded-lg text-sm font-semibold bg-green-600 text-white hover:bg-green-700">
                  Commander
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
