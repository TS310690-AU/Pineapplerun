export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const CATEGORIES: Record<string, Category> = {
  productivity: {
    id: 'productivity',
    name: 'Productivity',
    icon: 'Zap',
    description: 'Boost your efficiency with powerful tools',
    color: 'bg-blue-500'
  },
  travel: {
    id: 'travel',
    name: 'Travel',
    icon: 'Plane',
    description: 'Explore the world with smart travel apps',
    color: 'bg-sky-500'
  },
  trivia: {
    id: 'trivia',
    name: 'Trivia',
    icon: 'Brain',
    description: 'Test your knowledge and learn new facts',
    color: 'bg-purple-500'
  },
  finance: {
    id: 'finance',
    name: 'Finance',
    icon: 'DollarSign',
    description: 'Manage your money and investments',
    color: 'bg-green-500'
  },
  image: {
    id: 'image',
    name: 'Image Tools',
    icon: 'Image',
    description: 'Create and edit visuals with ease',
    color: 'bg-pink-500'
  },
  storybook: {
    id: 'storybook',
    name: 'Story Book',
    icon: 'BookOpen',
    description: 'Interactive stories and narratives',
    color: 'bg-indigo-500'
  },
  health: {
    id: 'health',
    name: 'Health & Wellness',
    icon: 'Heart',
    description: 'Stay healthy and maintain wellness',
    color: 'bg-red-500'
  },
  cooking: {
    id: 'cooking',
    name: 'Food & Cooking',
    icon: 'ChefHat',
    description: 'Culinary adventures and recipes',
    color: 'bg-orange-500'
  },
  lifestyle: {
    id: 'lifestyle',
    name: 'Everyday Life',
    icon: 'Home',
    description: 'Daily essentials and life management',
    color: 'bg-emerald-500'
  },
  learning: {
    id: 'learning',
    name: 'Learning & Creativity',
    icon: 'Palette',
    description: 'Expand your skills and creativity',
    color: 'bg-yellow-500'
  },
  community: {
    id: 'community',
    name: 'Community & Social',
    icon: 'Users',
    description: 'Connect with others and build communities',
    color: 'bg-teal-500'
  }
};
