import React from 'react';
import { Star } from 'lucide-react';
import SEO from '../components/common/SEO';
import AppGrid from '../components/app/AppGrid';
import { SAMPLE_APPS } from '../data/apps';

const Featured: React.FC = () => {
  const featuredApps = SAMPLE_APPS.filter(app => app.featured);

  return (
    <>
      <SEO 
        title="Featured Apps"
        description="Discover our handpicked collection of the best web applications. These featured apps represent the highest quality tools available."
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary-50 to-accent-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Applications</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                Our team has handpicked these exceptional web applications for their 
                outstanding design, functionality, and user experience.
              </p>
              <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center">
                <span className="text-sm font-medium text-gray-700">
                  {featuredApps.length} featured {featuredApps.length === 1 ? 'app' : 'apps'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppGrid apps={featuredApps} showFeatured={true} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Featured;
