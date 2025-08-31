import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SAMPLE_APPS } from '../../data/apps';
import { CATEGORIES } from '../../data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(SAMPLE_APPS.slice(0, 5));

  useEffect(() => {
    if (!query.trim()) {
      setResults(SAMPLE_APPS.slice(0, 5));
      return;
    }

    const filtered = SAMPLE_APPS.filter(app =>
      app.name.toLowerCase().includes(query.toLowerCase()) ||
      app.description.toLowerCase().includes(query.toLowerCase()) ||
      app.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setResults(filtered.slice(0, 8));
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-16">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search apps, categories, or tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-lg outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                {query ? `Results for "${query}"` : 'Popular Apps'}
              </h3>
              <div className="space-y-2">
                {results.map((app) => (
                  <Link
                    key={app.id}
                    to={`/category/${app.category}`}
                    onClick={onClose}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <img
                      src={app.thumbnail}
                      alt={app.name}
                      className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                        {app.name}
                      </h4>
                      <p className="text-sm text-gray-500 truncate">
                        {app.description}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {CATEGORIES[app.category]?.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No apps found for "{query}"</p>
              <p className="text-sm mt-2">Try searching for productivity, travel, or image tools</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
