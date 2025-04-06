import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: '',
    offerType: ''
  });

  const propertyTypes = [
    { value: 'apartment', label: 'Appartement' },
    { value: 'house', label: 'Maison' },
    { value: 'studio', label: 'Studio' },
    { value: 'room', label: 'Chambre' }
  ];

  const offerTypes = [
    { value: 'sale', label: 'Vente' },
    { value: 'rent', label: 'Location' },
    { value: 'sharing', label: 'Colocation' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(searchParams);
    navigate(`/annonces?${queryParams.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:space-x-4">
        {/* Localisation */}
        <div className="flex-1">
          <div className="relative">
            <i className="fas fa-map-marker-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Où cherchez-vous ?"
              className="input-field pl-10"
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
            />
          </div>
        </div>

        {/* Type de bien */}
        <div className="md:w-1/4">
          <select
            className="input-field"
            value={searchParams.type}
            onChange={(e) => setSearchParams({...searchParams, type: e.target.value})}
          >
            <option value="">Type de bien</option>
            {propertyTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Type d'offre */}
        <div className="md:w-1/4">
          <select
            className="input-field"
            value={searchParams.offerType}
            onChange={(e) => setSearchParams({...searchParams, offerType: e.target.value})}
          >
            <option value="">Type d'offre</option>
            {offerTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bouton de recherche */}
        <button type="submit" className="w-full md:w-auto btn-primary">
          <i className="fas fa-search mr-2"></i>
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default SearchBar;