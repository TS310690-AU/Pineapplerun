import React from 'react';
import AppCard from './AppCard';
import { WebApp } from '../../data/apps';

interface AppGridProps {
  apps: WebApp[];
  showFeatured?: boolean;
}

const AppGrid: React.FC<AppGridProps> = ({ apps, showFeatured = false }) => {
  if (apps.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No apps found</h3>
        <p className="text-gray-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {apps.map((app) => (
        <div key={app.id} className="animate-fade-in">
          <AppCard app={app} featured={showFeatured && app.featured} />
        </div>
      ))}
    </div>
  );
};

export default AppGrid;
