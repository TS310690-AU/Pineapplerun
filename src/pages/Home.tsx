import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import SEO from '../components/common/SEO';
import CategoryCard from '../components/category/CategoryCard';
import AppGrid from '../components/app/AppGrid';
import Button from '../components/ui/Button';
import { CATEGORIES } from '../data/categories';
import { SAMPLE_APPS } from '../data/apps';

const Home: React.FC = () => {
  const featuredApps = SAMPLE_APPS.filter(app => app.featured);
  const categoryList = Object.values(CATEGORIES).slice(0, 8);

  const stats = [
    { label: 'Web Apps', value: '50+', icon: Zap },
    { label: 'Categories', value: '11', icon: Sparkles },
    { label: 'Happy Users', value: '10K+', icon: Users },
  ];

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Discover Amazing{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                WebApps
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Explore our curated collection of innovative web applications for productivity, 
              creativity, and entertainment. Find your next favorite tool in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <Link to="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Categories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/featured">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Featured Apps
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked apps that showcase the best of what's available
            </p>
          </div>
          
          <AppGrid apps={featuredApps} showFeatured={true} />
          
          <div className="text-center mt-12">
            <Link to="/featured">
              <Button variant="outline" size="lg">
                View All Featured Apps
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for with our organized categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryList.map((category, index) => (
              <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/categories">
              <Button variant="outline" size="lg">
                View All Categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About PineappleRun</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We believe great web applications should be discoverable and accessible to everyone. 
            PineappleRun curates the best tools and apps across various categories, making it easy 
            for you to find exactly what you need to enhance your digital life.
          </p>
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To connect people with innovative web applications that solve real problems, 
              boost productivity, and spark creativity. Every app in our collection is 
              carefully tested and selected for quality and usefulness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
