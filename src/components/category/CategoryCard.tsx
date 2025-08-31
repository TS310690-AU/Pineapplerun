import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Category } from '../../data/categories';
import { SAMPLE_APPS } from '../../data/apps';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  const appCount = SAMPLE_APPS.filter(app => app.category === category.id).length;

  return (
    <Link
      to={`/category/${category.id}`}
      className="group block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
            {category.name}
          </h3>
          <p className="text-sm text-gray-500">
            {appCount} {appCount === 1 ? 'app' : 'apps'}
          </p>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        {category.description}
      </p>

      <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors duration-200">
        Explore Category
        <Icons.ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  );
};

export default CategoryCard;
