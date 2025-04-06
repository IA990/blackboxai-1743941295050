import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              <i className="fas fa-home mr-2"></i>
              ImmoConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/annonces" className="text-gray-600 hover:text-primary">
              Annonces
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary">
              Blog
            </Link>
            <Link to="/connexion" className="btn-secondary">
              Connexion
            </Link>
            <Link to="/inscription" className="btn-primary">
              Inscription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/annonces"
              className="block text-gray-600 hover:text-primary py-2"
            >
              Annonces
            </Link>
            <Link
              to="/blog"
              className="block text-gray-600 hover:text-primary py-2"
            >
              Blog
            </Link>
            <Link
              to="/connexion"
              className="block text-gray-600 hover:text-primary py-2"
            >
              Connexion
            </Link>
            <Link
              to="/inscription"
              className="block text-gray-600 hover:text-primary py-2"
            >
              Inscription
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;