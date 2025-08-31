export interface WebApp {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  url: string;
  thumbnail: string;
  screenshots: string[];
  tags: string[];
  featured: boolean;
  dateAdded: string;
  popularity: number;
}

export const SAMPLE_APPS: WebApp[] = [
  {
    id: 'focus-timer',
    name: 'Focus Timer Pro',
    description: 'Advanced Pomodoro timer with analytics and team collaboration features',
    longDescription: 'Boost your productivity with our advanced Pomodoro timer. Track your focus sessions, analyze productivity patterns, and collaborate with your team to achieve better work-life balance.',
    category: 'productivity',
    url: 'https://example.com/focus-timer',
    thumbnail: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
    screenshots: [
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['timer', 'productivity', 'focus', 'pomodoro'],
    featured: true,
    dateAdded: '2024-12-15',
    popularity: 95
  },
  {
    id: 'travel-planner',
    name: 'Smart Travel Planner',
    description: 'AI-powered trip planning with budget tracking and local recommendations',
    longDescription: 'Plan your perfect trip with AI assistance. Get personalized recommendations, track your budget, and discover hidden gems wherever you go.',
    category: 'travel',
    url: 'https://example.com/travel-planner',
    thumbnail: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400',
    screenshots: [
      'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['travel', 'planning', 'ai', 'budget'],
    featured: true,
    dateAdded: '2024-12-10',
    popularity: 88
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master 3000',
    description: 'Create and play interactive quizzes with friends and global leaderboards',
    longDescription: 'Challenge yourself and friends with custom quizzes. Compete on global leaderboards and discover new topics through community-created content.',
    category: 'trivia',
    url: 'https://example.com/quiz-master',
    thumbnail: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=400',
    screenshots: [
      'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['quiz', 'trivia', 'education', 'multiplayer'],
    featured: true,
    dateAdded: '2024-12-08',
    popularity: 82
  },
  {
    id: 'budget-tracker',
    name: 'Personal Budget Tracker',
    description: 'Comprehensive expense tracking with smart categorization and insights',
    longDescription: 'Take control of your finances with intelligent expense tracking, automated categorization, and detailed financial insights to help you save more.',
    category: 'finance',
    url: 'https://example.com/budget-tracker',
    thumbnail: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    screenshots: [
      'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['budget', 'finance', 'tracking', 'savings'],
    featured: false,
    dateAdded: '2024-12-05',
    popularity: 76
  },
  {
    id: 'photo-editor',
    name: 'InstantEdit Pro',
    description: 'Professional photo editing in your browser with AI-powered enhancements',
    longDescription: 'Transform your photos with professional-grade editing tools, AI-powered enhancements, and one-click filters. No software installation required.',
    category: 'image',
    url: 'https://example.com/photo-editor',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    screenshots: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['photo', 'editing', 'ai', 'filters'],
    featured: true,
    dateAdded: '2024-12-12',
    popularity: 91
  },
  {
    id: 'interactive-stories',
    name: 'StoryWeaver',
    description: 'Create and explore branching interactive stories with beautiful visuals',
    longDescription: 'Craft immersive interactive narratives with branching storylines, character development, and beautiful visual accompaniments.',
    category: 'storybook',
    url: 'https://example.com/story-weaver',
    thumbnail: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400',
    screenshots: [
      'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tags: ['stories', 'interactive', 'creative', 'narrative'],
    featured: false,
    dateAdded: '2024-12-01',
    popularity: 73
  }
];
