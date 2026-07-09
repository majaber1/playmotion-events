// =====================================================================
// PlayMotion Events - Core data file
// Update product info, gallery images, videos and event data here.
// Replace Unsplash placeholder image URLs with your own real photos.
// See README.md for instructions on adding real images/videos.
// =====================================================================

export const products = [
  {
    id: 1,
    slug: 'multiball',
    name: 'MultiBall Interactive Sports Wall',
    tagline: 'Throw. Kick. Hit. Compete.',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80',
    // TODO: Replace image above with a real photo of your foosball tables.
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
  { id: 4, slug: 'ar-vr-experience', name: 'AR / VR Interactive Experience', tagline: 'Step into another world.', color: 'purple', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80', shortDescription: 'Immersive augmented and virtual reality stations that let visitors explore branded 3D worlds, mini-games, and product showcases.', description: 'Our AR/VR experience stations bring cutting-edge immersive technology to your event. Guests put on a headset and step into a fully branded virtual environment, from interactive product demos to competitive mini-games, creating a futuristic, high-tech impression that sets your activation apart. Ideal for brands that want to be seen as innovative and forward-thinking.', bestFor: 'Tech expos, product launches, corporate innovation days', spaceRequirement: '2m x 2m per VR station, indoor', setupTime: '20-30 minutes per station', players: '1 player per headset, multiple stations available', features: ['Custom-built branded VR/AR environments and mini-games', 'Multiple headset stations for shorter queue times', 'Works for product demos, training, and entertainment', 'Eye-catching, futuristic booth centerpiece'], detailPath: '/ai-experience-platform', featured: true },
  { id: 5, slug: 'hologram-display', name: 'Holographic Display Showcase', tagline: 'Bring your brand to life in 3D.', color: 'pink', image: 'https://images.unsplash.com/photo-1604355714851-c1d5990e1696?w=800&q=80', shortDescription: 'A striking 3D holographic display that projects lifelike floating visuals to showcase products, messages, and brand stories.', description: 'Holographic displays turn ordinary presentations into unforgettable visual moments. Floating 3D visuals appear to hang in mid-air, drawing crowds from across the venue floor and holding their attention far longer than a flat screen. Perfect for product reveals, brand storytelling, and creating a premium, futuristic atmosphere at your booth or stage.', bestFor: 'Product launches, exhibitions, retail windows, stage presentations', spaceRequirement: '1.5m x 1.5m display unit', setupTime: '30-45 minutes', players: 'Unlimited viewers', features: ['Eye-catching floating 3D visuals visible from a distance', 'Custom content for product reveals and brand storytelling', 'No glasses or headsets required for viewing', 'Great for stages, retail windows, and booth centerpieces'], detailPath: '/ai-experience-platform', featured: true },
  { id: 6, slug: 'ai-photo-booth', name: 'AI Photo Booth', tagline: 'Smart, instant, shareable memories.', color: 'cyan', image: 'https://images.unsplash.com/photo-1778641603107-850c6a5f66c0?w=800&q=80', shortDescription: 'An AI-powered photo booth that creates instant branded photos, GIFs, and digital souvenirs guests can share on social media.', description: 'Our AI Photo Booth combines smart backgrounds, filters, and instant branding overlays to turn every guest into a walking promoter of your event. Visitors step up, strike a pose, and receive an instantly shareable photo or GIF, branded with your logo and campaign hashtag, that they can post straight to social media, extending your reach far beyond the venue.', bestFor: 'Exhibitions, product launches, malls, private events', spaceRequirement: '2m x 2m booth area', setupTime: '20-30 minutes', players: 'Individuals or groups', features: ['AI-generated backgrounds, filters, and branded overlays', 'Instant digital sharing via QR code, email, or social media', 'Custom logo, frame, and campaign hashtag branding', 'Fun, high-engagement activity that boosts social reach'], detailPath: '/ai-experience-platform', featured: true },
  { id: 7, slug: 'gamification-zone', name: 'Gamification Zone', tagline: 'Turn engagement into a game.', color: 'yellow', image: 'https://images.unsplash.com/photo-1558271697-dd9f331ca8b3?w=800&q=80', shortDescription: 'A digital leaderboard and mini-game system that turns booth visits, challenges, and check-ins into a competitive, rewarding experience.', description: 'Gamification transforms passive visitors into active participants. Guests complete challenges, scan QR codes, or play quick mini-games to earn points that appear on a live leaderboard, encouraging friendly competition and repeat visits throughout the event. Pair it with prizes or giveaways to maximize dwell time and word-of-mouth buzz at your booth.', bestFor: 'Exhibitions, corporate activations, malls, school events', spaceRequirement: '2m x 2m screen and kiosk area', setupTime: '20-30 minutes', players: 'Unlimited participants, live leaderboard', features: ['Live leaderboard with real-time score updates', 'Custom challenges, quizzes, and mini-games', 'QR code check-ins and social sharing integration', 'Boosts dwell time with prize and giveaway tie-ins'], detailPath: '/ai-experience-platform', featured: true },
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

// Gallery placeholder images - replace src with real event photos.
// See README.md > "How to add images" for instructions.
export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&q=80', alt: 'MultiBall interactive wall setup', category: 'MultiBall Setup' },
  { id: 2, src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&q=80', alt: 'MultiBall wall at an exhibition', category: 'MultiBall Setup' },
  { id: 3, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80', alt: 'X-Wall portable interactive wall', category: 'X-Wall Setup' },
  { id: 4, src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&q=80', alt: 'X-Wall game in action', category: 'X-Wall Setup' },
  { id: 5, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80', alt: 'Branded event booth activation', category: 'Event Booth Activation' },
  { id: 6, src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=700&q=80', alt: 'Exhibition booth with visitors', category: 'Event Booth Activation' },
  { id: 7, src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80', alt: 'Kids playing an interactive game', category: 'Kids Playing' },
  { id: 8, src: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=700&q=80', alt: 'Children enjoying a game zone', category: 'Kids Playing' },
  { id: 9, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80', alt: 'Corporate team challenge', category: 'Corporate Team Challenge' },
  { id: 10, src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80', alt: 'Corporate employees competing at an event', category: 'Corporate Team Challenge' },
  { id: 11, src: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=700&q=80', alt: 'Soccer table competition', category: 'Soccer Table Competition' },
  { id: 12, src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=700&q=80', alt: 'Guests playing foosball at an event', category: 'Soccer Table Competition' },
]

// Video placeholders - add a real YouTube embed ID to enable the embed.
// Until then, the card links out to the official channel/page.
export const videos = [
  {
    id: 1,
    title: 'MultiBall Demo Video',
    category: 'MultiBall',
    description: 'See MultiBall in action - projection-based sports games for events and exhibitions.',
    embedId: '', // TODO: paste a MultiBall YouTube video ID here, e.g. "dQw4w9WgXcQ"
    officialUrl: 'https://www.youtube.com/@MultiBall',
    officialLabel: 'Watch on the official MultiBall YouTube channel',
  },
  {
    id: 2,
    title: 'X-Wall Demo Video',
    category: 'X-Wall',
    description: 'A walkthrough of the portable X-Wall interactive game system.',
    embedId: '', // TODO: paste an X-Wall YouTube video ID here
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
