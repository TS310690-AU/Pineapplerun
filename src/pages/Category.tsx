import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SortAsc, Grid, List } from 'lucide-react';
import * as Icons from 'lucide-react';
import SEO from '../components/common/SEO';
import AppGrid from '../components/app/AppGrid';
import { CATEGORIES } from '../data/categories';
import { SAMPLE_APPS } from '../data/apps';

const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState<'name' | 'popularity' | 'date'>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const category = categoryId ? CATEGORIES[categoryId] : null;
  const IconComponent = category ? Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }> : null;

  const filteredApps = useMemo(() => {
    let apps = SAMPLE_APPS.filter(app => app.category === categoryId);
    
    switch (sortBy) {
      case 'name':
        apps.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
        apps.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'date':
        apps.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
    }
    
    return apps;
  }, [categoryId, sortBy]);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={category.name}
        description={`${category.description}. Discover ${filteredApps.length} amazing ${category.name.toLowerCase()} apps on PineappleRun.`}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Category Header */}
        <section className="bg-gradient-to-r from-white to-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.name}</h1>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                {filteredApps.length} {filteredApps.length === 1 ? 'app' : 'apps'} available
              </span>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {/* Sort Controls */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Sort by:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'popularity' | 'date')}
                  className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="name">Name</option>
                  <option value="date">Date Added</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-white text-primary-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-white text-primary-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppGrid apps={filteredApps} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Category;
