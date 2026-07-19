// =====================================================================
// PlayMotion Events - Core data file
// Update product info, gallery images, videos and event data here.
// Replace Unsplash placeholder image URLs with your own real photos.
// See README.md for instructions on adding real images/videos.
// =====================================================================

import soccerTableImg from '../assets/soccer-table-foosball.jpg'
import multiballImg from '../assets/multiball-interactive-wall.jpg'
import xwallImg from '../assets/xwall-portable-wall.jpg'
import eduImg from '../assets/experience-education.jpg'
import sportsImg from '../assets/experience-sports.jpg'
import fitnessImg from '../assets/experience-fitness.jpg'
import eventsImg from '../assets/experience-events.jpg'
import museumsImg from '../assets/experience-museums.jpg'
import gamingImg from '../assets/experience-gaming-zones.jpg'

export const products = [
  {
    id: 1,
    slug: 'multiball',
    name: 'MultiBall Interactive Sports Wall',
    tagline: 'Throw. Kick. Hit. Compete.',
    color: 'blue',
    image: multiballImg,
    // TODO: Replace image above with a real MultiBall photo/render.
    shortDescription: 'A projector-based interactive sports wall where players throw, kick, hit, and compete through digital games.',
    description: 'MultiBall transforms any flat wall or floor into a full interactive sports arena using projection and motion-tracking technology. Visitors throw, kick, or hit a real ball at the projected wall and instantly see their score, reactions, and mini-games come to life. It is one of the most effective crowd-pulling attractions for exhibition booths and brand activations because it combines physical activity with instant digital feedback.',
    bestFor: 'Exhibitions, corporate booths, malls, sports days',
    spaceRequirement: '3m x 3m wall or floor area, indoor or shaded outdoor',
    setupTime: '30-45 minutes',
    players: '1-4 players per round',
    features: [
      'Multiple built-in sports and party game modes',
      'Real-time scoring and leaderboards on screen',
      'Works with real balls - football, handball, and more',
      'Custom branding and logo overlays for sponsors',
      ],
    officialLink: 'https://multi-ball.com',
    officialLabel: 'multi-ball.com',
    videoChannel: 'https://www.youtube.com/@MultiBall',
    featured: true,
  },
  {
    id: 2,
    slug: 'x-wall',
    name: 'X-Wall Portable Interactive Wall',
    tagline: 'Play anywhere, in minutes.',
    color: 'green',
    image: xwallImg,
    // TODO: Replace image above with a real X-Wall photo/render.
    shortDescription: 'A portable interactive wall experience with multiple games designed for events, exhibitions, schools, and entertainment spaces.',
    description: 'X-Wall is a lightweight, portable interactive wall system built for teams that move from event to event. It packs down quickly, travels easily, and unfolds into a vibrant interactive games wall that keeps visitors engaged with reaction games, sports challenges, and party modes. Its portability makes it a favorite for roadshows, school events, and multi-day exhibitions.',
    bestFor: 'Exhibitions, schools, entertainment zones, mall activations',
    spaceRequirement: 'Portable wall, 2.5m x 2.5m footprint',
    setupTime: '20-30 minutes (portable design)',
    players: '1-2 players per round',
    features: [
      'Fully portable, tool-free setup and breakdown',
      'Library of reaction, sports, and party games',
      'Bright, durable surface built for high foot traffic',
      'Ideal for touring activations and multi-city events',
      ],
    officialLink: 'https://xwall.io',
    officialLabel: 'xwall.io',
    eventsLink: 'https://xwall.io/en/xwall-event',
    videoChannel: 'https://interactivexwall.nl/en',
    featured: true,
  },
  {
    id: 3,
    slug: 'soccer-table',
    name: 'Soccer Table / Foosball Challenge',
    tagline: 'The classic crowd favorite.',
    color: 'orange',
    image: soccerTableImg,
    shortDescription: 'A classic competitive table game for booths, lounges, tournaments, and casual event engagement.',
    description: 'Our professional soccer tables bring a familiar, universally loved game to your event floor. Easy to understand and instantly fun, foosball tables are perfect for creating friendly competition in lounges, break areas, and booths - and they pair perfectly with mini-tournaments and prize giveaways to keep visitors coming back throughout the day.',
    bestFor: 'Booths, lounges, tournaments, corporate breakout areas',
    spaceRequirement: '1.5m x 0.8m per table, plus 1m player clearance on each side',
    setupTime: '10-15 minutes',
    players: '2-4 players per match',
    features: [
      'Tournament-ready professional tables',
      'Simple rules - instantly playable by all ages',
      'Great for scheduled mini-tournaments with prizes',
      'Compact footprint, easy to place in any booth layout',
      ],
    featured: true,
  },
  ]

export const perfectFor = [
  { id: 1, name: 'Exhibitions', icon: '🏢' },
  { id: 2, name: 'Conferences', icon: '🎤' },
  { id: 3, name: 'Corporate Booths', icon: '💼' },
  { id: 4, name: 'Mall Activations', icon: '🛍️' },
  { id: 5, name: 'School Events', icon: '🎓' },
  { id: 6, name: 'Sports Days', icon: '🏆' },
  { id: 7, name: 'Entertainment Zones', icon: '🎡' },
  { id: 8, name: 'Private Events', icon: '🎉' },
  ]

export const whyChooseUs = [
  { icon: '🧲', title: 'Crowd Attraction', desc: 'Bright, active games naturally draw visitors toward your booth or space.' },
  { icon: '🤸', title: 'Physical Engagement', desc: 'Real movement and play create stronger memories than passive displays.' },
  { icon: '📣', title: 'Brand Activation', desc: 'Add your logo, colors, and messaging directly into the game experience.' },
  { icon: '⚡', title: 'Fast Setup', desc: 'Our team delivers, installs, and operates - so you can focus on your event.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Suitable For All Ages', desc: 'Games are designed to be fun and accessible for kids, teens, and adults.' },
  { icon: '🌟', title: 'Memorable Visitor Experience', desc: 'Visitors leave with a story to tell - and a stronger impression of your brand.' },
  ]

export const howItWorks = [
  { step: 1, title: 'Choose the Game', desc: 'Pick MultiBall, X-Wall, Soccer Table, or a combined package for your event.' },
  { step: 2, title: 'Select Event Date & Location', desc: 'Tell us when and where your event is happening, in Saudi Arabia or the GCC.' },
  { step: 3, title: 'We Deliver and Install', desc: 'Our team handles transport, setup, and testing before your guests arrive.' },
  { step: 4, title: 'Guests Play and Engage', desc: 'Visitors enjoy an interactive experience that keeps them at your booth longer.' },
  ]

// Gallery images - real event photos.
// See README.md > "How to add images" for instructions.
export const galleryImages = [
  { id: 1, src: '/images/gallery-multiball-1.jpg', alt: 'MultiBall interactive wall setup', category: 'MultiBall Setup' },
  { id: 2, src: '/images/gallery-multiball-2.jpg', alt: 'MultiBall wall at an exhibition', category: 'MultiBall Setup' },
  { id: 3, src: '/images/gallery-xwall.jpg', alt: 'X-Wall portable interactive wall', category: 'X-Wall Setup' },
  { id: 4, src: '/images/gallery-xwall-2.jpg', alt: 'X-Wall game in action', category: 'X-Wall Setup' },
  { id: 7, src: '/images/gallery-kids-1.jpg', alt: 'Kids playing an interactive game', category: 'Kids Playing' },
  { id: 8, src: '/images/gallery-kids-2.jpg', alt: 'Children enjoying a game zone', category: 'Kids Playing' },
  { id: 11, src: '/images/gallery-soccer-1.jpg', alt: 'Soccer table competition', category: 'Soccer Table Competition' },
  { id: 12, src: '/images/gallery-soccer-2.jpg', alt: 'Guests playing foosball at an event', category: 'Soccer Table Competition' },
]

// Video placeholders - add a real YouTube embed ID to enable the embed.
// Until then, the card links out to the official channel/page.
export const videos = [
  {
    id: 1,
    title: 'MultiBall Demo Video',
    category: 'MultiBall',
    description: 'See MultiBall in action - projection-based sports games for events and exhibitions.',
    embedId: 'WznovG2Yylw', // MultiBall 2026: The Next Generation of Interactive Sports (official MultiBall YouTube channel)
    officialUrl: 'https://www.youtube.com/@MultiBall',
    officialLabel: 'Watch on the official MultiBall YouTube channel',
  },
  {
    id: 2,
    title: 'X-Wall Demo Video',
    category: 'X-Wall',
    description: 'A walkthrough of the portable X-Wall interactive game system.',
    embedId: 'aMkHnW3W8tU', // X-Wall Portable in care: movement through play (official Interactive X-Wall YouTube channel)
    officialUrl: 'https://xwall.io/en/xwall-event',
    officialLabel: 'View X-Wall event examples',
  },
  {
    id: 3,
    title: 'Event Activation Highlights',
    category: 'Events',
    description: 'Highlights from PlayMotion Events activations - add your own event recap video here.',
    embedId: '', // TODO: paste your own event highlight reel YouTube video ID here
    officialUrl: '',
    officialLabel: '',
  },
  ]

// Experience categories - one shared design/image template, each with its own logo initials, name and description.
export const experienceCategories = [
  { id: 1, slug: 'education', name: 'PlayMotion for Education', logo: 'ED', color: 'blue', image: eduImg, description: 'Gamified interactive walls that turn classrooms and school events into playful, hands-on learning experiences.' },
  { id: 2, slug: 'sports', name: 'PlayMotion for Sports', logo: 'SP', color: 'green', image: sportsImg, description: 'Interactive sports-tech games that bring extra energy to training sessions, sports days, and tournaments.' },
  { id: 3, slug: 'fitness', name: 'PlayMotion for Fitness', logo: 'FT', color: 'orange', image: fitnessImg, description: 'Turn everyday workouts into engaging, game-based fitness challenges for gyms and wellness studios.' },
  { id: 4, slug: 'events', name: 'PlayMotion for Events', logo: 'EV', color: 'purple', image: eventsImg, description: 'Crowd-pulling interactive activations designed for exhibitions, malls, and corporate activations.' },
  { id: 5, slug: 'museums', name: 'PlayMotion for Museums & Experience Centers', logo: 'MU', color: 'pink', image: museumsImg, description: 'Immersive interactive displays that bring exhibits and brand stories to life for visitors of all ages.' },
  { id: 6, slug: 'gaming-zones', name: 'PlayMotion for Gaming Zones', logo: 'GZ', color: 'cyan', image: gamingImg, description: 'Competitive, high-energy interactive game zones built for entertainment venues and arcades.' },
  ]

// Gallery highlight photos - real event photo collages showcasing each experience live.
export const galleryHighlights = [
  { id: 1, src: '/images/gallery-highlight-1.jpg', alt: 'MultiBall and Soccer Table gameplay highlights at live events', caption: 'Game Highlights' },
  { id: 2, src: '/images/gallery-highlight-2.jpg', alt: 'PlayMotion brand experience overview - About, Mission, Sport, Fitness and Education', caption: 'Our Experience' },
  { id: 3, src: '/images/gallery-highlight-3.jpg', alt: 'MultiBall, X-Wall, Soccer Table, Event, Education and Fitness experience photos', caption: 'Live At Our Events' },
  { id: 4, src: '/images/gallery-highlight-4.jpg', alt: 'Guests playing MultiBall, X-Wall and Soccer Table at events', caption: 'More Moments' },
  ]
