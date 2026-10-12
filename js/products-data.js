// Sasya Sanjeevini - Complete Authentic Product Catalogue Data
// Sourced directly from physical store inventory & PDF catalogue
// Mobile / WhatsApp: +91 8296599392 | Location: Hanumantha Nagar, Bangalore

var CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'sparkles', count: 38 },
  { id: 'manures-fertilizers', name: 'Manures & Fertilizers', icon: 'sprout', count: 11 },
  { id: 'growing-media', name: 'Potting Mix & Media', icon: 'mountain', count: 7 },
  { id: 'pots-planters', name: 'Pots & Planters', icon: 'flower2', count: 6 },
  { id: 'hanging-pots', name: 'Hanging Planters', icon: 'anchor', count: 4 },
  { id: 'metal-stands', name: 'Metal Plant Stands', icon: 'layers', count: 8 },
  { id: 'plates-accessories', name: 'Drip Trays & Saucers', icon: 'disc', count: 2 }
];

var PRODUCTS = [
  // ---------------- MANURES & FERTILIZERS ----------------
  {
    id: 'goat-manure-powder',
    slug: 'goat-manure-powder',
    name: 'Goat Manure Powder',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: '100% Organic • Best Seller',
    image: 'assets/products/goat-manure-powder.png',
    shortDesc: 'Aged natural goat manure powder rich in balanced NPK and micro-flora for rapid vegetative growth.',
    fullDesc: 'Pure, organically fermented and powdered goat manure. Exceptionally rich in organic nitrogen, phosphorus, and potassium. Non-burning, pleasant earthy scent, and ideal for revitalizing tired potting soil and terrace garden containers.',
    variants: [
      { label: '5 Kg', price: 90 },
      { label: '25 Kg (Bulk Wholesale)', price: 250 }
    ],
    basePrice: 90,
    specs: ['Natural organic manure', 'Slow release balanced NPK', 'Safe for all plants', 'Improves soil aeration'],
    application: 'Apply 2-3 tablespoons per 10-12 inch pot every 15 days. Mix well into topsoil and water thoroughly.',
    cataloguePage: 2,
    badge: 'Popular',
    keywords: ['goat', 'manure', 'powder', 'organic', 'fertilizer', 'npk', 'feed', 'soil food']
  },
  {
    id: 'vermicompost',
    slug: 'vermicompost',
    name: 'Vermi Compost (Black Gold)',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Living Soil Food',
    image: 'assets/products/vermicompost.png',
    shortDesc: 'High-grade earthworm cast compost packed with living microbial flora, enzymes, and water-soluble minerals.',
    fullDesc: 'Premium quality vermicompost produced by beneficial earthworms feeding on organic farm matter. Retains moisture, aerates compacted soil, and fosters robust root systems in indoor flora, terrace vegetables, and flowering beds.',
    variants: [
      { label: '5 Kg', price: 80 },
      { label: '25 Kg (Bulk Wholesale)', price: 200 }
    ],
    basePrice: 80,
    specs: ['Earthworm bio-digested humus', 'Zero chemical additives', 'High moisture holding capacity', 'Rich in active bio-enzymes'],
    application: 'Top-dress 50g-100g around the drip zone monthly, or mix 25-30% into your potting soil during repotting.',
    cataloguePage: 2,
    badge: 'Essential',
    keywords: ['vermi', 'vermicompost', 'earthworm', 'compost', 'organic', 'humus', 'black gold']
  },
  {
    id: 'cow-manure',
    slug: 'cow-manure',
    name: 'Composted Cow Manure',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Traditional Bio-Enricher',
    image: 'assets/products/cow-manure.png',
    shortDesc: 'Fully decomposed Desi cow dung manure that restores depleted soil structure and builds beneficial humus.',
    fullDesc: 'Traditional organic cow dung manure naturally decomposed to perfection. High in beneficial cellulose and organic matter that aerates the soil and promotes healthy root respiration without attracting pests or weed seeds.',
    variants: [
      { label: '5 Kg', price: 90 },
      { label: '25 Kg (Bulk Wholesale)', price: 250 }
    ],
    basePrice: 90,
    specs: ['Composted organic cow dung', 'Odorless & weed-seed free', 'Improves soil carbon & humus', 'Safe for edible herbs & veggies'],
    application: 'Mix 100g into topsoil per pot once a month, or blend 20% into garden bed soil.',
    cataloguePage: 2,
    badge: null,
    keywords: ['cow', 'manure', 'dung', 'gobar', 'organic', 'fertilizer', 'carbon', 'humus']
  },
  {
    id: 'neem-powder',
    slug: 'neem-powder',
    name: 'Pure Neem Cake Powder',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Natural Pest Barrier & Feed',
    image: 'assets/products/neem-powder.png',
    shortDesc: 'Cold-pressed neem seed cake powder that guards against nematodes, soil grubs, and fungal root infections.',
    fullDesc: 'Residual organic neem cake powder after cold-pressing neem seeds. Works dual-duty: enriches soil with nitrogen and sulfur while naturally repelling soil pathogens, termite larvae, white grubs, and nematodes.',
    variants: [
      { label: '1 Kg', price: 35 }
    ],
    basePrice: 35,
    specs: ['Cold pressed neem seeds', 'Natural anti-nematode protection', 'Prevents root grubs & termites', 'Slow release nitrogen source'],
    application: 'Mix 2 tablespoons (25g) into potting soil surface once every 3-4 weeks.',
    cataloguePage: 2,
    badge: 'Protector',
    keywords: ['neem', 'powder', 'cake', 'pest', 'nematode', 'fungus', 'organic', 'soil protection']
  },
  {
    id: 'bone-meal',
    slug: 'bone-meal',
    name: 'Organic Bone Meal',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Phosphorus & Calcium Booster',
    image: 'assets/products/bone-meal.png',
    shortDesc: 'Crushed steamed bone meal powder supplying organic phosphorus and calcium for prolific blooms and sturdy root anchors.',
    fullDesc: 'The gold standard natural organic fertilizer for root stimulation and heavy flowering. Provides long-lasting phosphorus and calcium that encourage heavy bud set in roses, hibiscuses, bougainvilleas, and fruiting plants.',
    variants: [
      { label: '1 Kg', price: 50 }
    ],
    basePrice: 50,
    specs: ['Slow release phosphorus (P)', 'Rich in bio-calcium (Ca)', 'Promotes massive flower clusters', 'Strengthens root architecture'],
    application: 'Work 1-2 tablespoons around the root drip zone once a month during budding and flowering cycles.',
    cataloguePage: 2,
    badge: 'Bloom Booster',
    keywords: ['bone', 'meal', 'phosphorus', 'calcium', 'roses', 'flowering', 'root builder']
  },
  {
    id: 'mustard-cake',
    slug: 'mustard-cake',
    name: 'Mustard Cake Fertilizer (Sarson Khali)',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Potent Flower & Fruit Catalyst',
    image: 'assets/products/mustard-cake.png',
    shortDesc: 'Traditional cold-pressed mustard oil cake powder for explosive flowering, lush foliage, and vegetable yield.',
    fullDesc: 'A powerhouse organic fertilizer packed with protein, nitrogen, potassium, and micronutrients. Highly recommended for flowering plants (marigolds, chrysanthemums, roses) and kitchen garden vegetable beds.',
    variants: [
      { label: '1 Kg', price: 80 }
    ],
    basePrice: 80,
    specs: ['100% Pure mustard cake', 'Rapid chlorophyll stimulation', 'High potassium and protein', 'Can be made into liquid tea'],
    application: 'Method 1 (Liquid Tea): Soak 500g in 20L water for 24-48 hours. Dilute 1:5 and apply 1 cup per plant weekly. Method 2: Mix 1 tbsp dry into topsoil.',
    cataloguePage: 3,
    badge: null,
    keywords: ['mustard', 'cake', 'sarson', 'khali', 'fertilizer', 'flowering', 'tea', 'liquid manure']
  },
  {
    id: 'honge-cake',
    slug: 'honge-cake',
    name: 'Honge Cake (Pongamia Cake)',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Symbiotic Nitrogen Fixer',
    image: 'assets/products/honge-cake.png',
    shortDesc: 'Natural Pongamia cake fertilizer with symbiotic bacteria that boost nitrogen retention and moisture holding capacity.',
    fullDesc: 'Eco-friendly organic fertilizer cake made from Pongamia pinnata seeds. Increases soil microbial density, aerates heavy clays, and deters underground soil pests.',
    variants: [
      { label: '1 Kg', price: 60 }
    ],
    basePrice: 60,
    specs: ['100% Natural Pongamia seed cake', 'Symbiotic nitrogen fixing action', 'Increases moisture holding capacity', 'Improves soil physical texture'],
    application: 'Mix 30-50g into the root zone every month for potted ornamental and garden trees.',
    cataloguePage: 3,
    badge: null,
    keywords: ['honge', 'cake', 'pongamia', 'nitrogen', 'organic', 'soil texture']
  },
  {
    id: 'compost-maker',
    slug: 'compost-maker',
    name: 'Compost Maker Microbes (Anaerobic)',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Odor-Free Kitchen Composting',
    image: 'assets/products/compost-maker.png',
    shortDesc: 'Specialized natural microbial culture designed for fast, odor-free kitchen and food waste composting at home.',
    fullDesc: 'A concentrated powder blend of naturally developed composting microbes and bio-catalysts with woody aroma. Specifically formulated for indoor kitchen waste bins and anaerobic composting containers without foul smells or fruit flies.',
    variants: [
      { label: '500 g', price: 80 }
    ],
    basePrice: 80,
    specs: ['Woody & mix fruit natural aroma', 'Accelerates food scrap breakdown', 'Completely odor-free process', 'Ideal for balcony & indoor bins'],
    application: 'Sprinkle 1-2 teaspoons over each fresh layer of vegetable peels and food scraps inside your airtight composting bin.',
    cataloguePage: 3,
    badge: 'Eco Living',
    keywords: ['compost', 'maker', 'microbes', 'anaerobic', 'kitchen waste', 'food composting', 'bokashi', 'odorless']
  },
  {
    id: 'epsom-salt',
    slug: 'epsom-salt',
    name: 'Horticultural Epsom Salt (100% Pure)',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Leaf Greening & Chlorophyll Catalyst',
    image: 'assets/products/epsom-salt.png',
    shortDesc: 'Water-soluble magnesium sulphate crystals that cure yellow leaves and boost lush emerald pigmentation.',
    fullDesc: 'Pure horticultural-grade magnesium sulfate crystals. Magnesium is the central molecule in chlorophyll production. Cures magnesium deficiency, intensifies rose blooms, and helps tomatoes take up vital nutrients.',
    variants: [
      { label: '1 Kg', price: 50 }
    ],
    basePrice: 50,
    specs: ['100% Soluble magnesium sulphate', 'Cures interveinal chlorosis (yellow leaves)', 'Stimulates lush dark green foliage', 'Enhances flower bud formation'],
    application: 'Dissolve 1 teaspoon (5g) in 1 litre of water. Spray directly on leaves or drench soil once every 2 weeks.',
    cataloguePage: 2,
    badge: null,
    keywords: ['epsom', 'salt', 'magnesium', 'sulphate', 'yellow leaves', 'roses', 'foliar spray']
  },
  {
    id: 'silk-worm-compost',
    slug: 'silk-worm-compost',
    name: 'Silk Worm Compost',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Specialty Bio-Nutrient',
    image: 'assets/products/silk-worm-compost.png',
    shortDesc: 'Rare nutrient-dense silkworm frass compost packed with bio-active amino acids, trace minerals, and beneficial microbes.',
    fullDesc: 'A unique organic amendment derived from silkworm excrement fed on pure mulberry leaves. Exceptionally rich in bioavailable nitrogen, phosphorus, potassium, and amino acid complexes that supercharge exotic plant vitality.',
    variants: [
      { label: '1 Kg', price: 80 }
    ],
    basePrice: 80,
    specs: ['Pure mulberry-fed silkworm frass', 'Dense in amino acids & enzymes', 'Supercharges root absorption', '100% Natural organic bio-stimulant'],
    application: 'Top-dress 25-50g per planter monthly around root zone.',
    cataloguePage: 3,
    badge: 'Rare Find',
    keywords: ['silk', 'worm', 'compost', 'frass', 'organic', 'amino acids', 'fertilizer']
  },
  {
    id: 'rock-mineral-fertiliser',
    slug: 'rock-mineral-fertiliser',
    name: 'Organic Rock Mineral & Soil Improver',
    category: 'manures-fertilizers',
    categoryName: 'Organic Manures',
    tag: 'Volcanic Micronutrient Dust',
    image: 'assets/products/rock-mineral-fertiliser.png',
    shortDesc: 'Finely ground volcanic mineral rock dust replenishing over 60 essential trace elements and silica in depleted garden soil.',
    fullDesc: 'Natural rock mineral fertilizer and soil conditioner. Supplies vital silica, iron, manganese, zinc, boron, and calcium to harden plant cellular walls against drought, insect bite, and fungal disease.',
    variants: [
      { label: '1 Kg', price: 50 }
    ],
    basePrice: 50,
    specs: ['60+ Trace minerals & rare earth elements', 'High available silica for stem rigidity', 'Remineralizes tired potting soils', 'Enhances drought & heat resistance'],
    application: 'Mix 2 tablespoons into soil twice a year during regular soil turning or pot repotting.',
    cataloguePage: 3,
    badge: null,
    keywords: ['rock', 'mineral', 'volcanic', 'silica', 'trace minerals', 'soil improver']
  },

  // ---------------- GROWING MEDIA & SOIL ----------------
  {
    id: 'potting-soil',
    slug: 'potting-soil',
    name: 'Gaarden Pros All-Purpose Potting Soil',
    category: 'growing-media',
    categoryName: 'Growing Media',
    tag: 'Ready-To-Plant Complete Mix',
    image: 'assets/products/potting-soil.png',
    shortDesc: 'Pre-blended, balanced potting soil with rich organic compost, red loam, and natural aerators for instant planting.',
    fullDesc: 'The ultimate hassle-free soil mix for urban gardeners. Crafted with aged compost, red soil, and porous natural conditioners. Retains optimum moisture while allowing excess water to drain cleanly through bottom pot holes.',
    variants: [
      { label: '5 Kg', price: 90 },
      { label: '25 Kg (Bulk Wholesale)', price: 300 }
    ],
    basePrice: 90,
    specs: ['Pre-mixed ready to plant', 'Sterilized & weed-free', 'Balanced drainage and water retention', 'Suitable for flowers, herbs & indoor plants'],
    application: 'Fill directly into planters with drain holes. Place plant root ball gently and water thoroughly.',
    cataloguePage: 2,
    badge: 'Best Value',
    keywords: ['potting', 'soil', 'gaarden pros', 'red soil', 'ready mix', 'soil bag', 'balcony garden']
  },
  {
    id: 'cocopeat-powder',
    slug: 'cocopeat-powder',
    name: 'Organic Cocopeat Powder',
    category: 'growing-media',
    categoryName: 'Growing Media',
    tag: 'Low-EC Washed Coir Pith',
    image: 'assets/products/cocopeat-powder.png',
    shortDesc: 'Fine loose washed cocopeat powder for soft seed germination, cutting propagation, and lightweight planter mixes.',
    fullDesc: 'Ready-to-use loose coir pith powder washed to remove excess salts. Provides remarkable porosity and water retention (holds up to 8x its weight in water) without weighing down balcony slabs.',
    variants: [
      { label: '5 Kg', price: 90 },
      { label: '25 Kg (Bulk Wholesale)', price: 250 }
    ],
    basePrice: 90,
    specs: ['Low electrical conductivity (Low EC)', 'Holds 8x water volume', 'Lightweight terrace gardening base', 'Ideal for microgreens & seed trays'],
    application: 'Mix 30-40% cocopeat powder with 40% soil and 20% compost for an optimal potting blend.',
    cataloguePage: 2,
    badge: null,
    keywords: ['cocopeat', 'powder', 'coir pith', 'seed starting', 'lightweight soil']
  },
  {
    id: 'cocopeat-block',
    slug: 'cocopeat-block',
    name: 'Compressed Cocopeat Block',
    category: 'growing-media',
    categoryName: 'Growing Media',
    tag: 'Expands 5x Volume with Water',
    image: 'assets/products/cocopeat-block.png',
    shortDesc: 'High-density compressed coconut coir block that expands into fluffy growing medium when hydrated with water.',
    fullDesc: 'Space-saving compressed cocopeat brick. Convenient to carry and store in apartment closets. Just add water to watch it expand into lush, spongy organic peat for kitchen gardens and ornamental planters.',
    variants: [
      { label: '1.5 Kg', price: 90 },
      { label: '3 Kg', price: 150 },
      { label: '5 Kg (Giant Block)', price: 250 }
    ],
    basePrice: 90,
    specs: ['100% Biodegradable coconut coir', 'Expands 5-6x initial dry size', 'Saves apartment storage space', 'Perfect pH 5.8 - 6.8'],
    application: 'Place block in a tub, add 10-25L water depending on block size, and wait 15 minutes for complete expansion.',
    cataloguePage: 2,
    badge: 'Popular',
    keywords: ['cocopeat', 'block', 'brick', 'compressed coir', 'expandable peat', 'moisture lock']
  },
  {
    id: 'rose-mix',
    slug: 'rose-mix',
    name: 'Natures Plus Rose Mix',
    category: 'growing-media',
    categoryName: 'Growing Media',
    tag: 'Specially Formulated for Roses',
    image: 'assets/products/rose-mix.png',
    shortDesc: 'Nutrient-rich growing mix loaded with organic granules and root enhancers for heavy blooming rose bushes.',
    fullDesc: 'A specialized soil formulation specifically tuned for hybrid teas, floribundas, and miniature climbing roses. Enriched with slow-release trace nutrients, bone meal, and beneficial fungi to keep roses vigorous and blooming round the year.',
    variants: [
      { label: '1 Kg', price: 50 }
    ],
    basePrice: 50,
    specs: ['Formulated for rose root physiology', 'Enriched with organic bloom granules', 'Promotes continuous flowering flushes', 'Prevents root rot and soil hardening'],
    application: 'Add 100g around rose bushes every 20 days or blend 30% into new rose planting holes.',
    cataloguePage: 3,
    badge: null,
    keywords: ['rose', 'mix', 'natures plus', 'rose food', 'blooming', 'rose fertilizer']
  },
  {
    id: 'succulent-cactus-mix',
    slug: 'succulent-cactus-mix',
    name: 'Succulent & Cactus Potting Soil Mix',
    category: 'growing-media',
    categoryName: 'Growing Media',
    tag: 'Ultra-Fast Free Draining Formula',
    image: 'assets/products/succulent-cactus-mix.png',
    shortDesc: 'Gritty mineral blend engineered with volcanic grit, perlite, and coarse sand to completely prevent root rot in cacti.',
    fullDesc: 'Custom formulated for dry-loving succulents, sansevierias, hawarthias, jade, and desert cacti. Prevents wet-feet and soggy soil that causes root rot while providing gentle root aeration and moisture control.',
    variants: [
      { label: '1 Kg', price: 60 }
    ],
    basePrice: 60,
    specs: ['Coarse gritty texture', 'Zero water stagnation', 'Prevents succulent stem rot', 'Infused with activated minerals'],
    application: 'Pot succulents into containers with drain holes; water only when the medium is bone-dry (every 7-10 days).',
    cataloguePage: 3,
    badge: 'Succulent Lovers',
    keywords: ['succulent', 'cactus', 'potting mix', 'drainage', 'sand', 'pumice', 'jade plant']
  },
  {
    id: 'perlite',
    slug: 'perlite',
    name: 'Horticultural Perlite (Aeration Improver)',
    category: 'growing-media',
    categoryName: 'Growing Media',
    tag: 'Lightweight Drainage Booster',
    image: 'assets/products/perlite.png',
    shortDesc: 'Expanded sterile white volcanic granules that permanently loosen heavy clay soils and prevent compaction.',
    fullDesc: 'Horticultural-grade perlite expanded at high temperatures to form microscopic air cavities. Keeps potting soil permanently aerated, lightens container weight, and stimulates fine feeder root branching.',
    variants: [
      { label: '500 g', price: 60 }
    ],
    basePrice: 60,
    specs: ['100% Sterile volcanic glass', 'Permanent soil aeration (never decomposes)', 'Prevents soil crusting & compaction', 'Neutral pH 7.0'],
    application: 'Add 10-20% perlite by volume into your potting soil for houseplants, aroids, and seed starting.',
    cataloguePage: 3,
    badge: null,
    keywords: ['perlite', 'drainage', 'aeration', 'volcanic', 'soil conditioner', 'propagation']
  },
  {
    id: 'vermiculite',
    slug: 'vermiculite',
    name: 'Horticultural Vermiculite (Moisture & Cation Buffer)',
    category: 'growing-media',
    categoryName: 'Growing Media',
    tag: 'Nutrient & Moisture Sponge',
    image: 'assets/products/vermiculite.png',
    shortDesc: 'Golden expanded mica mineral flakes that retain moisture and draw soluble fertilizer minerals right to root hairs.',
    fullDesc: 'Golden accordion-like expanded mica minerals possessing high cation-exchange capacity (CEC). Stores plant nutrients and releases them as roots need them while maintaining gentle aeration.',
    variants: [
      { label: '1 Kg', price: 60 }
    ],
    basePrice: 60,
    specs: ['Golden expanded mineral flakes', 'High cation exchange capacity (CEC)', 'Exceptional moisture buffering', 'Accelerates seed germination & cuttings'],
    application: 'Blend 10-15% into potting mixes or use 50:50 with perlite for rooting cutting stems.',
    cataloguePage: 3,
    badge: null,
    keywords: ['vermiculite', 'moisture', 'cec', 'seed starting', 'propagation', 'soil amendment']
  },

  // ---------------- POTS & PLANTERS ----------------
  {
    id: 'normal-pots',
    slug: 'normal-pots',
    name: 'Classic Terracotta Style Normal Pots',
    category: 'pots-planters',
    categoryName: 'Pots & Planters',
    tag: 'UV-Stabilized Nursery Heavyweight',
    image: 'assets/products/normal-pots-feature.png',
    shortDesc: 'Heavy-duty UV-resistant classic round planter pots in authentic terracotta tone with multiple drain vents.',
    fullDesc: 'The dependable everyday container for Bangalore home gardens. Thick-walled, weather-hardy plastic resistant to cracking under intense terrace heat. Features broad base stability and generous root chamber.',
    variants: [
      { label: '8 Inch Pot', price: 25 },
      { label: '10 Inch Pot', price: 50 },
      { label: '12 Inch Pot', price: 75 },
      { label: '14 Inch Pot', price: 100 },
      { label: '16 Inch Pot', price: 160 },
      { label: '18 Inch Pot', price: 210 },
      { label: '20 Inch Giant Pot', price: 370 }
    ],
    basePrice: 25,
    specs: ['Terracotta reddish-brown finish', 'UV-stabilized polymer', 'Heavy duty multi-hole drainage', 'Sizes from 8" up to 20" giant'],
    application: 'Pair with round plastic drip saucers for clean indoor and balcony arrangements.',
    cataloguePage: 4,
    badge: 'Bestseller Pot',
    keywords: ['normal pots', 'plastic pots', 'terracotta pot', '8 inch pot', '12 inch pot', 'garden containers']
  },
  {
    id: 'nursery-pots',
    slug: 'nursery-pots',
    name: 'Nursery Heavy-Duty Rim Pots',
    category: 'pots-planters',
    categoryName: 'Pots & Planters',
    tag: 'Flanged Heavy-Duty Grip Rim',
    image: 'assets/products/nursery-pots-feature.png',
    shortDesc: 'Reinforced lip-rim pots designed for easy lifting, re-potting, and commercial nursery container gardening.',
    fullDesc: 'Professional grower nursery pots with an extra-sturdy rolled rim that makes carrying full, soil-laden containers effortless. Engineered for long-term terrace sun exposure without brittle degradation.',
    variants: [
      { label: '8 Inch Pot', price: 35 },
      { label: '10 Inch Pot', price: 60 },
      { label: '12 Inch Pot', price: 70 },
      { label: '14 Inch Pot', price: 90 },
      { label: '16 Inch Pot', price: 170 },
      { label: '18 Inch Pot', price: 350 },
      { label: '20 Inch Pot', price: 370 }
    ],
    basePrice: 35,
    specs: ['Strong rolled easy-carry rim', 'Impact-resistant flexible plastic', 'Optimized multi-port drainage holes', 'Great for fruit plants, palms & shrubs'],
    application: 'Ideal for medium to large fruit plants, flowering shrubs, and nursery saplings.',
    cataloguePage: 4,
    badge: null,
    keywords: ['nursery pot', 'grow pot', 'heavy duty pot', 'garden nursery', 'rolled rim']
  },
  {
    id: 'royal-pots',
    slug: 'royal-pots',
    name: 'Royal Rectangular Trough Planters',
    category: 'pots-planters',
    categoryName: 'Pots & Planters',
    tag: 'Balcony Parapet Trough with Tray',
    image: 'assets/products/royal-pots-feature.png',
    shortDesc: 'Fluted rectangular planter boxes with fitted bottom drip tray, perfect for herb troughs and balcony borders.',
    fullDesc: 'Architectural ribbed trough planters designed to maximize linear balcony space. Each planter comes with an integrated under-tray to catch excess drainage water and protect tiles.',
    variants: [
      { label: 'Royal Pot - 2', price: 80 },
      { label: 'Royal Pot - 3', price: 170 },
      { label: 'Royal Pot - 4', price: 250 },
      { label: 'Royal Pot - 5 (Extra Large)', price: 370 }
    ],
    basePrice: 80,
    specs: ['Fluted ribbed exterior styling', 'Integrated matching drip saucer tray', 'Space-efficient rectangular layout', 'Terracotta stone tone'],
    application: 'Superb for growing kitchen herbs (mint, coriander, basil) or creating colorful petunia borders.',
    cataloguePage: 4,
    badge: 'Balcony Favorite',
    keywords: ['royal pot', 'rectangular planter', 'trough pot', 'window box', 'balcony herbs', 'saucer tray']
  },
  {
    id: 'square-pots',
    slug: 'square-pots',
    name: 'Modern Square Planter Pots',
    category: 'pots-planters',
    categoryName: 'Pots & Planters',
    tag: 'Space-Saving Corner & Wall Design',
    image: 'assets/products/square-pots-feature.png',
    shortDesc: 'Crisp geometric square pots with raised bottom corner feet for elevated airflow and clean drainage.',
    fullDesc: 'Clean modern square silhouette that fits flush along patio borders and balcony corners without wasted gap space. Features elevated corner feet that lift the pot base 5mm above the floor for superior air circulation.',
    variants: [
      { label: '8 Inch Square', price: 50 },
      { label: '10 Inch Square', price: 85 },
      { label: '12 Inch Square', price: 130 },
      { label: '14 Inch Square', price: 270 }
    ],
    basePrice: 50,
    specs: ['Modern square footprint', 'Raised corner drainage feet', 'Fits neatly into balcony corners', 'Terracotta finish'],
    application: 'Pair with square brown drip plates for a sleek architectural garden look.',
    cataloguePage: 5,
    badge: null,
    keywords: ['square pot', 'geometric planter', 'corner pot', 'modern planter', 'square plate']
  },
  {
    id: 'divinity-pots',
    slug: 'divinity-pots',
    name: 'Divinity Designer Planters (Slate & Ruby)',
    category: 'pots-planters',
    categoryName: 'Pots & Planters',
    tag: 'Premium Interior Boutique Pots',
    image: 'assets/products/divinity-pots.png',
    shortDesc: 'Dual-tone luxury cylindrical planters available in matte slate grey and vibrant ruby gloss finishes.',
    fullDesc: 'High-end decorative indoor planters that make fiddle leaf figs, crotons, aglaonemas, and monstera plants look sensational. Ceramic-look lightweight styling with heavy structural durability.',
    variants: [
      { label: 'Divinity 500', price: 60 },
      { label: 'Divinity 600', price: 70 },
      { label: 'Divinity 800', price: 110 },
      { label: 'Divinity 1000', price: 240 },
      { label: 'Divinity 1200', price: 350 },
      { label: 'Divinity 1400 (Large Statement)', price: 500 }
    ],
    basePrice: 60,
    specs: ['Ceramic-look finish', 'Available in Slate Grey & Ruby Gloss', 'Chic straight cylinder profile', 'UV-resistant non-fading pigments'],
    application: 'Ideal for living rooms, reception areas, and covered balcony cozy seating corners.',
    cataloguePage: 6,
    badge: 'Interior Choice',
    keywords: ['divinity', 'designer pots', 'indoor planter', 'slate grey', 'ruby pot', 'living room plants']
  },
  {
    id: 'galaxy-pots',
    slug: 'galaxy-pots',
    name: 'Galaxy Series Stone-Finish Planters',
    category: 'pots-planters',
    categoryName: 'Pots & Planters',
    tag: 'Textured Artisanal Stone Finish',
    image: 'assets/products/galaxy-pots.png',
    shortDesc: 'Heavy-gauge planters featuring speckled organic sandstone and granite textures with matching drip trays.',
    fullDesc: 'Organic textured planters that replicate hand-chiselled sandstone and granite. Adds tactile warmth to entrance foyers, verandahs, and modern indoor green corners.',
    variants: [
      { label: '10 Inch Galaxy', price: 700 },
      { label: '12 Inch Galaxy', price: 900 },
      { label: '14 Inch Galaxy', price: 1100 }
    ],
    basePrice: 700,
    specs: ['Artisanal stone-textured finish', 'Comes with matching saucer plate', 'Heavy gauge fiber-composite build', 'Subtle natural earth tones'],
    application: 'Statement indoor plant centerpiece for monsteras, snake plants, and palms.',
    cataloguePage: 6,
    badge: 'Luxury',
    keywords: ['galaxy pots', 'stone planter', 'granite pot', 'sandstone finish', 'luxury planter']
  },

  // ---------------- HANGING POTS ----------------
  {
    id: 'classic-hanging-pot',
    slug: 'classic-hanging-pot',
    name: 'Classic Balcony Railing Hook Planters',
    category: 'hanging-pots',
    categoryName: 'Hanging Planters',
    tag: 'Direct Clip-On Balcony Grill Hook',
    image: 'assets/products/classic-hanging-pot.png',
    shortDesc: 'Vibrant, colorful curved railing hook planters that attach instantly onto any apartment balcony grill without tools.',
    fullDesc: 'Instantly transform bare metal balcony grills into hanging vertical flower gardens. Features reinforced curved handle hooks that grip railings tightly. Available in joyful colors (lime green, canary yellow, sky blue, ruby red, crisp white).',
    variants: [
      { label: 'Single Pot (Choice of Colors)', price: 90 }
    ],
    basePrice: 90,
    specs: ['Tool-free direct grill clip hook', 'Vibrant UV-stable color selection', 'Built-in overflow drainage base', 'Durable non-brittle polypropylene'],
    application: 'Hang across balcony safety grills, stair railings, or terrace fences for cascading trailing vines.',
    cataloguePage: 4,
    badge: 'Balcony Hit',
    keywords: ['classic hanging pot', 'railing planter', 'balcony hook', 'grill pot', 'hanging flowers']
  },
  {
    id: 'double-hook-planter',
    slug: 'double-hook-planter',
    name: 'Double Hook Balcony Trough Planter',
    category: 'hanging-pots',
    categoryName: 'Hanging Planters',
    tag: 'Wide Dual-Hook Stability',
    image: 'assets/products/double-hook-planter.png',
    shortDesc: 'Wide horizontal balcony railing planter with dual heavy-duty hanging brackets for trailing petunias and ferns.',
    fullDesc: 'Twin reinforced hanging brackets provide rock-solid stability even in gusty balcony winds. Extra soil chamber volume allows root space for 2-3 trailing flowering plants or culinary herbs.',
    variants: [
      { label: 'Single Unit', price: 180 }
    ],
    basePrice: 180,
    specs: ['Dual reinforced hanging hooks', 'Wide rectangular trough basin', 'Wind-stable balanced suspension', 'Integrated moisture reservoir'],
    application: 'Hang over apartment railings for lush trailing petunias, portulaca, and ferns.',
    cataloguePage: 5,
    badge: null,
    keywords: ['double hook', 'railing trough', 'twin hook planter', 'hanging trough', 'balcony planter']
  },
  {
    id: 'stick-hanging-pot',
    slug: 'stick-hanging-pot',
    name: 'Stick Hanging Pot (3-Strand Balance)',
    category: 'hanging-pots',
    categoryName: 'Hanging Planters',
    tag: 'Lightweight Ceiling & Wall Hook Hanger',
    image: 'assets/products/stick-hanging-pot.png',
    shortDesc: 'Deep round hanging basket with 3 snap-in rigid support sticks and top swivel hook for indoor trailing plants.',
    fullDesc: 'Lightweight hanging basket equipped with three rigid snap-in balance sticks that meet at a sturdy top hanging loop. Easy to unhook for watering and cleaning.',
    variants: [
      { label: 'Single Unit', price: 60 }
    ],
    basePrice: 60,
    specs: ['3-Stick snap-lock suspension', 'Gentle swivel hanging hook', 'Ultra-lightweight on ceiling hooks', 'Great for money plants, spider plants & ivy'],
    application: 'Hang from ceiling hooks, wall brackets, or window curtain rods.',
    cataloguePage: 5,
    badge: null,
    keywords: ['stick hanging', 'hanging pot', 'pothos hanger', 'ceiling pot', 'spider plant']
  },
  {
    id: 'chain-hanging-pot',
    slug: 'chain-hanging-pot',
    name: 'Woven Texture Chain Hanging Pot',
    category: 'hanging-pots',
    categoryName: 'Hanging Planters',
    tag: 'Triple Metal Chain & Wicker Texture',
    image: 'assets/products/chain-hanging-pot.png',
    shortDesc: 'Charming wicker-weave textured hanging bowl complete with triple rust-resistant metal chains and hanging hook.',
    fullDesc: 'Artisanal basket weave textured bowl suspended by heavy-duty triple galvanized metal chains. Brings romantic cottage garden vibes to porches, balconies, and pergolas.',
    variants: [
      { label: 'Single Unit (With Chain & Hook)', price: 120 }
    ],
    basePrice: 120,
    specs: ['Triple rust-proof suspension chains', 'Woven rattan textured bowl', 'Heavy duty steel top hook', 'Bottom drainage plug'],
    application: 'Hang beneath porch eaves, balcony roofs, or garden pergolas.',
    cataloguePage: 5,
    badge: 'Rustic Charm',
    keywords: ['chain hanging', 'woven pot', 'rattan hanging pot', 'metal chain planter', 'cottage garden']
  },

  // ---------------- METAL PLANT STANDS ----------------
  {
    id: 'part-1-stand',
    slug: 'part-1-stand',
    name: 'Part-1 Circular Ring Metal Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'Single Pot Elevator (Floor Protector)',
    image: 'assets/products/part-1-stand.png',
    shortDesc: 'Solid round wrought iron ring stand with welded tripod legs to keep single heavy pots elevated off delicate flooring.',
    fullDesc: 'Lifts potted plants 4 inches off the floor to prevent moisture rings, fungus, and dirt stains on balcony tiles and marble floors. Powder-coated in matte black for rust protection.',
    variants: [
      { label: 'Single Stand', price: 100 }
    ],
    basePrice: 100,
    specs: ['Solid round steel ring design', 'Tripod stable leg geometry', 'Matte black anti-rust coating', 'Protects floor tiles from moisture'],
    application: 'Place under indoor ceramic pots or outdoor terracotta planters.',
    cataloguePage: 5,
    badge: null,
    keywords: ['part 1 stand', 'ring stand', 'pot elevator', 'metal stand', 'floor protector']
  },
  {
    id: 'boxer-stand',
    slug: 'boxer-stand',
    name: 'Boxer Heavy-Duty Square Metal Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'High Weight Capacity Stand',
    image: 'assets/products/boxer-stand.png',
    shortDesc: 'Heavy-gauge square tube steel frame designed to safely support large ceramic, concrete, and soil containers.',
    fullDesc: 'Engineered for hefty plants and heavy pots. Cross-welded steel bars distribute weight evenly across four stout square legs, preventing tile cracking and ensuring stable pot placement.',
    variants: [
      { label: '8 Inch Stand', price: 210 },
      { label: '10 Inch Stand', price: 300 },
      { label: '12 Inch Stand', price: 360 }
    ],
    basePrice: 210,
    specs: ['Heavy-gauge square tubular steel', 'Anti-slip cross top bars', 'Heavy load capacity (up to 60kg)', 'Corrosion-resistant powder finish'],
    application: 'Supports large heavy clay and ceramic pots outdoors.',
    cataloguePage: 5,
    badge: null,
    keywords: ['boxer stand', 'square metal stand', 'heavy duty pot stand', 'iron stand']
  },
  {
    id: 'indigo-stand',
    slug: 'indigo-stand',
    name: 'Indigo Geometric Metal Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'Open Lattice Drainage Base',
    image: 'assets/products/indigo-stand.png',
    shortDesc: 'Low-profile rectangular iron stand with open lattice top for unrestricted drainage and neat pot grouping.',
    fullDesc: 'A sturdy welded frame featuring an open metal grid that lets drainage water drop straight through to saucers without pooling underneath your pots.',
    variants: [
      { label: 'Standard Size', price: 250 }
    ],
    basePrice: 250,
    specs: ['Open lattice top grid', 'Welded rectangular iron profile', 'Even weight balancing', 'Powder-coated rust prevention'],
    application: 'Elevates multiple medium pots or rectangular planters.',
    cataloguePage: 5,
    badge: null,
    keywords: ['indigo stand', 'lattice stand', 'metal pot stand', 'balcony iron stand']
  },
  {
    id: 'indigo-elite-stand',
    slug: 'indigo-elite-stand',
    name: 'Indigo Elite Curved Metal Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'Curved Frame Heavy Support',
    image: 'assets/products/indigo-elite-stand.png',
    shortDesc: 'Premium curved profile wrought iron stand with enhanced crossbar support for extra stability and aesthetic charm.',
    fullDesc: 'Features sleek rounded outer framing that prevents sharp corner scrapes in tight balconies. Heavy gauge crossbars comfortably bear heavy planter weight.',
    variants: [
      { label: 'Standard Size', price: 270 }
    ],
    basePrice: 270,
    specs: ['Smooth rounded corner frame', 'Enhanced reinforced crossbars', 'Matte black weather-hardy paint', 'Modern urban aesthetic'],
    application: 'Fits stylishly into apartment balconies and covered patios.',
    cataloguePage: 5,
    badge: null,
    keywords: ['indigo elite', 'curved pot stand', 'metal planter stand', 'black iron stand']
  },
  {
    id: 'stand-2ft-box',
    slug: 'stand-2ft-box',
    name: '2-Feet Box Metal Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'Balcony Trough & Planter Bench',
    image: 'assets/products/stand-2ft-box.png',
    shortDesc: '2-foot long rectangular welded steel bench stand, tailored for rectangular royal pots and multiple round planters.',
    fullDesc: 'Compact 60cm length metal bench that fits neatly beneath balcony window ledges and parapet walls. Accommodates 1-2 large rectangular planters or 3 medium round pots.',
    variants: [
      { label: '2 Feet Stand', price: 500 }
    ],
    basePrice: 500,
    specs: ['2 Feet (60cm) length', 'Heavy-duty steel cross rails', 'Ideal for rectangular trough planters', 'Lifts pots 20cm above floor'],
    application: 'Align along balcony parapet or wall for a clean row of herb planters.',
    cataloguePage: 6,
    badge: 'Popular',
    keywords: ['2 feet box stand', 'box stand', 'trough stand', 'metal bench', 'balcony stand']
  },
  {
    id: 'stand-1mtr-tier',
    slug: 'stand-1mtr-tier',
    name: '1-Meter Single Tier Long Metal Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'Long Wall-Runner Plant Bench',
    image: 'assets/products/stand-1mtr-tier.png',
    shortDesc: '100cm (approx 3.3 ft) long elevated single-tier steel bench stand. Holds 4 to 5 large pots in a clean line.',
    fullDesc: 'The ultimate space-organizer for sunny balcony walls. Holds a full row of 4-5 pots off the floor, allowing easy floor sweeping, mopping, and drainage cleanup underneath.',
    variants: [
      { label: '1 Meter Stand', price: 1200 }
    ],
    basePrice: 1200,
    specs: ['100 cm (3.3 ft) long runner', 'Supports up to 5 large pots (100kg+)', 'Heavy welded steel construction', 'Weatherproof matte black coating'],
    application: 'Position along the sunniest balcony wall for maximum plant sunlight exposure.',
    cataloguePage: 6,
    badge: 'Organizer',
    keywords: ['1 meter stand', 'single tier stand', 'long metal stand', 'balcony pot rack', '1mtr tier']
  },
  {
    id: 'stand-2-step',
    slug: 'stand-2-step',
    name: '2-Step Heavy Duty Metal Step Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'Cascading 2-Tier Sunlight Staircase',
    image: 'assets/products/stand-2-step.png',
    shortDesc: 'Cascading 2-step stair metal stand that arranges plants on two heights so every leaf absorbs direct sunlight.',
    fullDesc: 'Double your vertical plant capacity without consuming extra floor area. Two stepped platforms prevent tall plants from shading smaller ones while creating a lush cascading green wall effect.',
    variants: [
      { label: '2 Step Stand', price: 2000 }
    ],
    basePrice: 2000,
    specs: ['2-Tier cascading stair levels', 'Heavy square steel tubing', 'High stability against tipping', 'Accommodates 6 to 8 pots total'],
    application: 'Perfect for apartment balconies wanting lush vertical depth.',
    cataloguePage: 6,
    badge: 'High Value',
    keywords: ['2 step stand', '2 tier plant stand', 'stair stand', 'step rack', 'vertical garden stand']
  },
  {
    id: 'stand-3-step',
    slug: 'stand-3-step',
    name: '3-Step Heavy Duty Metal Step Stand',
    category: 'metal-stands',
    categoryName: 'Metal Plant Stands',
    tag: 'Ultimate Terrace Garden Tower',
    image: 'assets/products/stand-3-step.png',
    shortDesc: 'Magnificent 3-tier stepped staircase metal display stand. Holds 10 to 14 plants in breathtaking vertical harmony.',
    fullDesc: 'The flagship centerpiece for terrace gardens and urban balconies. Three cascading tiers give you a full miniature botanical garden in less than 1 square meter of floor space. Solid welded steel construction designed for decades of durability.',
    variants: [
      { label: '3 Step Stand', price: 2600 }
    ],
    basePrice: 2600,
    specs: ['3 Cascading vertical steps', 'Ultra heavy-gauge steel framework', 'Holds 10 to 14 pots easily', 'Maximum sunlight distribution for every tier'],
    application: 'Creates an entire vertical display for flowering plants, succulents, and foliage.',
    cataloguePage: 6,
    badge: 'Showstopper',
    keywords: ['3 step stand', '3 tier stand', 'terrace plant tower', 'metal plant stairs', 'grand stand']
  },

  // ---------------- DRIP PLATES & ACCESSORIES ----------------
  {
    id: 'round-plates',
    slug: 'round-plates',
    name: 'Round Plastic Drip Plates (Saucers)',
    category: 'plates-accessories',
    categoryName: 'Plates & Saucers',
    tag: 'Floor & Furniture Protection',
    image: 'assets/products/round-plates.png',
    shortDesc: 'Sturdy terracotta-toned plastic saucers that catch drain runoff and keep your flooring, carpets, and deck pristine.',
    fullDesc: 'Essential accessory for every potted plant. Heavy-duty circular saucers with concentric ridges that elevate the pot base slightly above drained runoff water, preventing root waterlogging while keeping tiles clean.',
    variants: [
      { label: '8 Inch Plate', price: 15 },
      { label: '10 Inch Plate', price: 20 },
      { label: '12 Inch Plate', price: 25 },
      { label: '14 Inch Plate', price: 35 },
      { label: '16 Inch Plate', price: 45 }
    ],
    basePrice: 15,
    specs: ['Deep catchment reservoir lip', 'Terracotta matching color', 'Concentric bottom drainage ridges', 'Sizes 8" to 16"'],
    application: 'Match plate size to the base diameter of your round pots.',
    cataloguePage: 6,
    badge: 'Essential',
    keywords: ['round plates', 'saucers', 'drip plate', 'pot tray', 'floor protector']
  },
  {
    id: 'square-brown-plates',
    slug: 'square-brown-plates',
    name: 'Square Brown Drip Trays',
    category: 'plates-accessories',
    categoryName: 'Plates & Saucers',
    tag: 'Designed for Square Pots & Troughs',
    image: 'assets/products/square-brown-plates.png',
    shortDesc: 'Matching square and rectangular brown drip trays with raised perimeter lip to catch runoff beneath square planters.',
    fullDesc: 'Tailored specifically for square pots and royal planters. Prevents water runoff and muddy stains from seeping into balcony tiles, wood decking, or indoor parquet flooring.',
    variants: [
      { label: '10 Inch Square Tray', price: 40 },
      { label: '12 Inch Square Tray', price: 50 },
      { label: '14 Inch Square Tray', price: 80 }
    ],
    basePrice: 40,
    specs: ['Raised perimeter overflow edge', 'Engineered for square planter bases', 'Heavy-duty brown plastic', 'Easy to empty and clean'],
    application: 'Place under square pots and modular planter boxes.',
    cataloguePage: 6,
    badge: null,
    keywords: ['square plate', 'brown plate', 'square tray', 'drip tray', 'planter saucer']
  }
];

// Soil recipe generator data
var SOIL_CALCULATOR_PRESETS = {
  potSizes: [
    { id: '8', name: '8" Small Pot', volumeLiters: 4, soilKg: 3, compostKg: 1, cocopeatKg: 0.5 },
    { id: '10', name: '10" Medium Pot', volumeLiters: 8, soilKg: 6, compostKg: 2, cocopeatKg: 1 },
    { id: '12', name: '12" Standard Pot', volumeLiters: 14, soilKg: 10, compostKg: 3.5, cocopeatKg: 1.5 },
    { id: '14', name: '14" Large Pot', volumeLiters: 22, soilKg: 16, compostKg: 5, cocopeatKg: 2.5 },
    { id: '16', name: '16" Extra Large', volumeLiters: 35, soilKg: 25, compostKg: 8, cocopeatKg: 4 },
    { id: 'trough', name: 'Royal Balcony Trough', volumeLiters: 18, soilKg: 12, compostKg: 4, cocopeatKg: 2 }
  ],
  plantTypes: [
    { id: 'general', name: '🌿 Foliage & Balcony Plants', ratioSoil: 50, ratioCompost: 30, ratioCocopeat: 20, special: 'Goat Manure Powder + Epsom Salt' },
    { id: 'flowering', name: '🌸 Flowering (Roses, Hibiscus)', ratioSoil: 45, ratioCompost: 35, ratioCocopeat: 20, special: 'Bone Meal + Mustard Cake' },
    { id: 'vegetables', name: '🍅 Kitchen Veggies & Herbs', ratioSoil: 40, ratioCompost: 40, ratioCocopeat: 20, special: 'Vermi Compost + Neem Powder' },
    { id: 'succulents', name: '🌵 Succulents & Cacti', ratioSoil: 30, ratioCompost: 10, ratioCocopeat: 20, special: 'Perlite (40%) + Grit' }
  ]
};


