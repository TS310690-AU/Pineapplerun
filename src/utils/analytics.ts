declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters);
  }
};

export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: title,
    });
  }
};

export const trackAppClick = (appName: string, category: string) => {
  trackEvent('app_click', {
    event_category: 'engagement',
    event_label: appName,
    app_category: category,
    value: 1
  });
};

export const trackCategoryView = (categoryName: string) => {
  trackEvent('category_view', {
    event_category: 'navigation',
    event_label: categoryName,
    value: 1
  });
};

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search', {
    event_category: 'engagement',
    search_term: query,
    results_count: resultsCount,
    value: 1
  });
};
