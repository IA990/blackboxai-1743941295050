import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen-90 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trouvez votre prochain chez-vous
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            Des milliers d'annonces immobilières vous attendent
          </p>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir ImmoConnect ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-home text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Large choix de biens</h3>
              <p className="text-gray-600">
                Des milliers d'annonces mises à jour quotidiennement
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-shield-alt text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Sécurité garantie</h3>
              <p className="text-gray-600">
                Toutes nos annonces sont vérifiées par nos équipes
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-comments text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Contact direct</h3>
              <p className="text-gray-600">
                Échangez directement avec les propriétaires
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Dernières annonces</h2>
            <Link to="/annonces" className="btn-primary">
              Voir toutes les annonces
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="card hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg"
                alt="Appartement moderne"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <span className="text-primary font-semibold">250 000 €</span>
                <h3 className="text-xl font-semibold mt-2">Appartement moderne</h3>
                <p className="text-gray-600">Paris 11ème - 65m²</p>
                <div className="flex items-center mt-4 text-gray-500">
                  <span className="flex items-center mr-4">
                    <i className="fas fa-bed mr-2"></i> 2
                  </span>
                  <span className="flex items-center mr-4">
                    <i className="fas fa-bath mr-2"></i> 1
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-ruler-combined mr-2"></i> 65m²
                  </span>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="card hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                alt="Maison avec jardin"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <span className="text-primary font-semibold">420 000 €</span>
                <h3 className="text-xl font-semibold mt-2">Maison avec jardin</h3>
                <p className="text-gray-600">Bordeaux - 120m²</p>
                <div className="flex items-center mt-4 text-gray-500">
                  <span className="flex items-center mr-4">
                    <i className="fas fa-bed mr-2"></i> 4
                  </span>
                  <span className="flex items-center mr-4">
                    <i className="fas fa-bath mr-2"></i> 2
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-ruler-combined mr-2"></i> 120m²
                  </span>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="card hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Studio meublé"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <span className="text-primary font-semibold">800 € /mois</span>
                <h3 className="text-xl font-semibold mt-2">Studio meublé</h3>
                <p className="text-gray-600">Lyon - 30m²</p>
                <div className="flex items-center mt-4 text-gray-500">
                  <span className="flex items-center mr-4">
                    <i className="fas fa-bed mr-2"></i> 1
                  </span>
                  <span className="flex items-center mr-4">
                    <i className="fas fa-bath mr-2"></i> 1
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-ruler-combined mr-2"></i> 30m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vous êtes propriétaire ?
          </h2>
          <p className="text-xl mb-8">
            Publiez votre annonce gratuitement et trouvez rapidement votre locataire ou acheteur
          </p>
          <Link to="/inscription" className="btn-secondary bg-white text-primary hover:bg-gray-100">
            Publier une annonce
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;