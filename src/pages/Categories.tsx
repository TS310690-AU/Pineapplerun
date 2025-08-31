import React from 'react';
import SEO from '../components/common/SEO';
import CategoryCard from '../components/category/CategoryCard';
import { CATEGORIES } from '../data/categories';

const Categories: React.FC = () => {
  const categoryList = Object.values(CATEGORIES);

  return (
    <>
      <SEO 
        title="All Categories"
        description="Browse all app categories including productivity, travel, finance, image tools, and more. Find the perfect web application for your needs."
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">All Categories</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our complete collection of web application categories. 
                Each category is carefully curated to help you find the right tools.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryList.map((category, index) => (
                <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
