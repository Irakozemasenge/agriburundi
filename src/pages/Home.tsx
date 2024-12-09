import React from 'react';
import { ArrowRight, Leaf, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Engrais et Semences de Qualité au Burundi
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Accédez aux meilleurs produits agricoles pour optimiser vos cultures
        </p>
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Voir nos produits
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Leaf className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Produits Certifiés</h3>
          <p className="text-gray-600">
            Tous nos engrais et semences sont certifiés et approuvés par les autorités compétentes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Qualité Garantie</h3>
          <p className="text-gray-600">
            Nous garantissons la qualité et l'authenticité de tous nos produits agricoles.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Meilleurs Rendements</h3>
          <p className="text-gray-600">
            Optimisez vos récoltes avec nos produits sélectionnés pour le climat burundais.
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Comment commander ?
        </h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-green-600">1</span>
            </div>
            <p>Parcourez nos produits</p>
          </div>
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-green-600">2</span>
            </div>
            <p>Ajoutez au panier</p>
          </div>
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-green-600">3</span>
            </div>
            <p>Validez la commande</p>
          </div>
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-green-600">4</span>
            </div>
            <p>Suivez la livraison</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;