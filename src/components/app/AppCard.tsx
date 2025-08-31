import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { WebApp } from '../../data/apps';
import { CATEGORIES } from '../../data/categories';

interface AppCardProps {
  app: WebApp;
  featured?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ app, featured = false }) => {
  const category = CATEGORIES[app.category];

  const handleAppClick = () => {
    // Track analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'app_click', {
        event_category: 'engagement',
        event_label: app.name,
        value: 1
      });
    }
    window.open(app.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300 ${featured ? 'ring-2 ring-primary-200' : ''}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-gradient-to-r from-primary-400 to-accent-400 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={app.thumbnail}
          alt={app.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${category?.color || 'bg-gray-500'} text-white`}>
            {category?.name || 'Uncategorized'}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
            Online
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {app.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {app.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {app.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
            >
              {tag}
            </span>
          ))}
          {app.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-md">
              +{app.tags.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleAppClick}
          className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group-hover:shadow-md"
        >
          Launch App
          <ExternalLink className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AppCard;
