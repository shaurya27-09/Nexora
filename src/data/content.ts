import { Project, Capability, ProcessStep, Testimonial } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aura',
    number: '01',
    title: 'AURA',
    client: 'Aura Intelligence Labs',
    category: 'AI-Powered Fashion Intelligence',
    year: '2025',
    tagline: 'Predictive trend modeling meets algorithmic haute couture',
    description:
      'A pioneering machine learning platform synthesizing global style data, textile supply chains, and generative moodboards for tier-1 luxury fashion houses.',
    challenge:
      'Fashion forecasting historically relied on intuition and retrospective data, causing massive overproduction waste and missed micro-trends.',
    solution:
      'We engineered a multimodal neural model parsing over 40M visual social signals weekly, coupled with a tactile 3D browser-based garment simulation engine.',
    metrics: [
      { label: 'Trend Forecast Accuracy', value: '94.2%' },
      { label: 'Sampling Waste Reduction', value: '-68%' },
      { label: 'Latency per Generation', value: '1.4s' },
    ],
    tags: ['Generative AI', 'WebGL 3D', 'Spatial Interface', 'Design System'],
    accentColor: '#38bdf8',
    gradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
  },
  {
    id: 'orbit',
    number: '02',
    title: 'ORBIT',
    client: 'Orbit Capital Infrastructure',
    category: 'Next-Gen Financial Analytics',
    year: '2025',
    tagline: 'High-frequency algorithmic liquidity telemetry',
    description:
      'A mission-critical financial analytics terminal providing sub-millisecond visibility into cross-chain decentralized liquidity pools and institutional hedge funds.',
    challenge:
      'Financial operators were overwhelmed by fragmented dashboards, slow data aggregation, and lack of real-time multi-dimensional risk surfaces.',
    solution:
      'Constructed a bespoke GPU-accelerated visualization engine capable of rendering 500,000 live order-book ticks simultaneously with zero frame-drops.',
    metrics: [
      { label: 'Daily Processed Volume', value: '$4.2B' },
      { label: 'Telemetry Refresh Rate', value: '120 FPS' },
      { label: 'Decision Latency Cut', value: '-45%' },
    ],
    tags: ['FinTech', 'High-Density UI', 'Real-Time Telemetry', 'Canvas 2D'],
    accentColor: '#818cf8',
    gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: 'synth',
    number: '03',
    title: 'SYNTH',
    client: 'Synth Audio Collective',
    category: 'Generative Music Collaboration',
    year: '2024',
    tagline: 'Co-creating harmonic landscapes with ambient neural agents',
    description:
      'A browser-based spatial DAW (Digital Audio Workstation) pairing electronic musicians with real-time neural latent stem synthesis and stem-level collaborative jamming.',
    challenge:
      'Real-time audio processing in web browsers faces strict buffer limitations, phase jitter, and lack of visual feedback for spatial sonic panning.',
    solution:
      'Developed a custom WebAssembly audio graph engine paired with reactive generative particle visuals that bloom directly with frequency changes.',
    metrics: [
      { label: 'Active Songwriters', value: '380k+' },
      { label: 'Audio Buffer Latency', value: '4.2ms' },
      { label: 'User Retention Uplift', value: '+112%' },
    ],
    tags: ['WebAudio API', 'WebAssembly', 'Kinetic Visuals', 'Multiplayer'],
    accentColor: '#a855f7',
    gradient: 'from-purple-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'neon',
    number: '04',
    title: 'NEON',
    client: 'Neon Protocol Global',
    category: 'Immersive Digital Identity System',
    year: '2024',
    tagline: 'Zero-knowledge cryptographic selfhood with organic motion',
    description:
      'An encrypted biometric passport and decentralized identification standard delivering seamless human-first verification across web, mobile, and hardware vaults.',
    challenge:
      'Cryptographic identity systems are notoriously technical, intimidating, and lack tactile human feedback during validation handshakes.',
    solution:
      'Crafted a warm, living biometric visualizer with fluid kinetic glassmorphism and spring physics that reacts dynamically to cryptographically verified states.',
    metrics: [
      { label: 'Identities Secured', value: '2.5M+' },
      { label: 'Verification Velocity', value: '0.8s' },
      { label: 'Friction Drop Rate', value: '89%' },
    ],
    tags: ['Cryptography', 'Biometrics', 'Motion Language', 'Mobile & Web'],
    accentColor: '#2dd4bf',
    gradient: 'from-teal-500/20 via-cyan-500/10 to-transparent',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'strategy',
    title: 'Strategy',
    shortDesc:
      'Navigating technological inflection points with precision product roadmaps and algorithmic positioning.',
    fullDesc:
      'We deconstruct complex market shifts and distill them into actionable, forward-looking architectural blueprints and competitive product moats.',
    tags: ['Market Vision', 'AI Product Roadmapping', 'System Architecture'],
    icon: 'Compass',
    metric: '10x Faster Time to Market',
  },
  {
    id: 'design',
    title: 'Design',
    shortDesc:
      'Museum-grade digital craftsmanship, spatial interface ergonomics, and obsessive typographic discipline.',
    fullDesc:
      'From meticulous micro-interactions to holistic brand design systems, our work commands attention through poise, balance, and radical clarity.',
    tags: ['Spatial UI', 'Design Systems', 'Kinetic Typography'],
    icon: 'Palette',
    metric: 'Award-Winning Craft',
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    shortDesc:
      'Integrating cutting-edge foundation models, autonomous agents, and custom multimodal pipelines.',
    fullDesc:
      'We bridge theoretical machine learning research with human-centered product mechanics, creating AI experiences that feel intuitive rather than synthetic.',
    tags: ['Multimodal Agents', 'Custom Fine-Tuning', 'Edge Inferencing'],
    icon: 'Cpu',
    metric: 'Sub-second Latency',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    shortDesc:
      'Modern web architectures, GPU shaders, microsecond API orchestration, and resilient edge deployments.',
    fullDesc:
      'Our codebases are built for scale, resilience, and maximum performance. We optimize critical render paths and craft deterministic state machines.',
    tags: ['WebGL / WebGPU', 'Distributed Edge', 'Full-Stack TypeScript'],
    icon: 'Code2',
    metric: '99.99% Uptime SLA',
  },
  {
    id: 'motion',
    title: 'Motion',
    shortDesc:
      'Physics-based choreography that breathes tactile soul and spatial context into digital touchpoints.',
    fullDesc:
      'Motion is not an afterthought or decorative flourish—it is our primary tool for communicating state transitions, spatial hierarchy, and delight.',
    tags: ['Spring Physics', 'Fluid Choreography', 'Spatial Transitions'],
    icon: 'Sparkles',
    metric: 'Butter-smooth 60+ FPS',
  },
  {
    id: 'products',
    title: 'Digital Products',
    shortDesc:
      'Full lifecycle engineering from blank canvas conceptualization to market-leading venture deployments.',
    fullDesc:
      'We partner with high-conviction founders and visionary enterprise leaders to build flagship digital flagships that redefine their entire category.',
    tags: ['SaaS Ecosystems', 'Flagship Web Apps', 'Bespoke Platforms'],
    icon: 'Layers',
    metric: '$1.8B+ Value Created',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Deconstruct & Illuminate',
    description:
      'Understand the problem, users and opportunity. We deeply audit user psychology, market voids, and technical boundaries to establish an unshakeable project north star.',
    deliverables: ['Problem Space Mapping', 'Technical Feasibility Matrix', 'Strategic Direction Blueprint'],
    duration: 'Week 1 — 2',
  },
  {
    step: '02',
    title: 'Imagine',
    subtitle: 'Speculate & Synthesize',
    description:
      'Develop the visual direction and product concept. Exploring daring aesthetic frontiers, spatial metaphors, and speculative mechanics before locking in the core vision.',
    deliverables: ['Concept Moodboards', 'Kinetic Proof-of-Concepts', 'Interactive Prototypes'],
    duration: 'Week 2 — 3',
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'Sculpt & Refine',
    description:
      'Transform ideas into meaningful interfaces. Every token, grid unit, transition curve, and accessibility benchmark is engineered with relentless visual fidelity.',
    deliverables: ['Full Design Token System', 'Responsive Screen Matrix', 'Component Animation Choreography'],
    duration: 'Week 3 — 5',
  },
  {
    step: '04',
    title: 'Build',
    subtitle: 'Code & Accelerate',
    description:
      'Engineer fast, scalable digital experiences. Production-grade TypeScript, robust state pipelines, GPU shader optimization, and frictionless continuous integration.',
    deliverables: ['Production Ready Codebase', 'API Orchestration Layer', 'Lighthouse 95+ Performance Audit'],
    duration: 'Week 5 — 8',
  },
  {
    step: '05',
    title: 'Evolve',
    subtitle: 'Calibrate & Compound',
    description:
      'Measure, learn and continuously improve. Real-world telemetry feedback loops, predictive user analytics, and ongoing capability expansions keep products ahead of market entropy.',
    deliverables: ['Behavioral Heatmaps', 'Feature Enhancement Sprints', 'Ongoing Strategic Advisory'],
    duration: 'Continuous',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Nexora did not just redesign our interface—they completely transformed how our enterprise customers perceive data intelligence. The speed, tactile motion, and typographic gravity made our product instantly category-defining.',
    author: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Horizon AI',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
  },
  {
    quote:
      'In 15 years of building venture-backed companies, I have never seen a team bridge radical design beauty and hardcore engineering execution as flawlessly as Nexora. They shipped 3 weeks ahead of schedule with zero compromises.',
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'ArcLight Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
  },
  {
    quote:
      'Working with Nexora felt like looking into the future of digital interaction. The kinetic typography and spatial spring physics gave our brand a living heartbeat that our users constantly praise.',
    author: 'Sarah Lin',
    role: 'Head of Design',
    company: 'Synapse Labs',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80',
  },
];

export const STATS = [
  { value: 50, suffix: '+', label: 'Digital Products', desc: 'Shipped to global scale' },
  { value: 18, suffix: '', label: 'Global Clients', desc: 'Across 9 timezones' },
  { value: 12, suffix: 'M+', label: 'Interactions Created', desc: 'Monthly active user touches' },
  { value: 7, suffix: '', label: 'Design Awards', desc: 'Recognized for craftsmanship' },
];

export const TECH_ITEMS = [
  'Artificial Intelligence',
  'Creative Development',
  'Product Design',
  'Motion Choreography',
  'WebGL & Shaders',
  'Autonomous Agents',
  'Brand Systems',
  'Interactive Experiences',
  'Spatial UI',
  'Neural Synthesis',
];
