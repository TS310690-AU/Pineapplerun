import { useState, useMemo } from 'react';
import { WebApp, SAMPLE_APPS } from '../data/apps';

export interface SearchFilters {
  category?: string;
  tags?: string[];
  featured?: boolean;
}

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});

  const results = useMemo(() => {
    let filteredApps = SAMPLE_APPS;

    // Apply text search
    if (query.trim()) {
      const searchTerm = query.toLowerCase().trim();
      filteredApps = filteredApps.filter(app =>
        app.name.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Apply category filter
    if (filters.category) {
      filteredApps = filteredApps.filter(app => app.category === filters.category);
    }

    // Apply featured filter
    if (filters.featured !== undefined) {
      filteredApps = filteredApps.filter(app => app.featured === filters.featured);
    }

    // Apply tag filters
    if (filters.tags && filters.tags.length > 0) {
      filteredApps = filteredApps.filter(app =>
        filters.tags!.some(tag => app.tags.includes(tag))
      );
    }

    return filteredApps;
  }, [query, filters]);

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({});
    setQuery('');
  };

  return {
    query,
    setQuery,
    filters,
    updateFilter,
    clearFilters,
    results
  };
};
