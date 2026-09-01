import { ServiceItem, LocationItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'RM Detailing',
  legalName: 'RM Detailing LLC',
  phone: '+1 778-878-3577',
  displayPhone: '+1 (778) 878-3577',
  phoneHref: 'tel:+17788783577',
  whatsappRaw: '17788783577',
  whatsappDisplay: '+1 (778) 878-3577',
  whatsappHref: 'https://wa.me/17788783577?text=Hi%20RM%20Detailing!%20I%20would%20like%20to%20inquire%20about%20a%20detailing%20quote%20in%20Abbotsford.',
  location: 'Abbotsford, British Columbia, Canada',
  primaryCity: 'Abbotsford, BC',
  googleRating: 5.0,
  reviewCount: 48,
  hours: 'Monday – Friday: 9:00 AM – 6:00 PM | Sunday: 9:00 AM – 5:00 PM',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ceramic-coating',
    slug: 'ceramic-coating-abbotsford',
    title: 'CERAMIC COATING',
    headlineTitle: 'Ceramic Coatings',
    subtitle: 'Industry Leading Protection and Breath-Taking Finish',
    metaTitle: 'Ceramic Coating in Abbotsford, BC | RM Detailing',
    metaDescription: 'Professional ceramic coating services in Abbotsford, BC. Durable hydrophobic paint protection, high-gloss shine, and environmental resistance.',
    h1: 'Professional Ceramic Coating in Abbotsford',
    shortDescription:
      'Long-lasting hydrophobic paint protection providing deep gloss, UV resistance, and ease of washing for daily drivers and performance vehicles.',
    fullDescription:
      'Our Ceramic Coating packages offer professional-grade paint protection. By bonding directly with your vehicle’s clear coat, ceramic coatings create a semi-permanent sacrificial layer that resists road grime, UV fading, light chemical staining, and bird droppings while providing an intense candy-like gloss and remarkable hydrophobic water-beading performance.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    altText: 'Ceramic coating application on luxury red vehicle with deep gloss reflection',
    included: [
      'Multi-stage exterior foam pre-wash and two-bucket contact wash',
      'Chemical iron decontamination and clay bar treatment',
      'Single or multi-stage paint correction to remove imperfections',
      'Isopropyl alcohol surface prep to remove polishing oils',
      'Professional ceramic coating hand application to all painted surfaces',
      'Complimentary wheel face coating and glass repellent application',
      'Complimentary basic interior wipe-down and vacuum',
    ],
    benefits: [
      {
        title: 'Hydrophobic Self-Cleaning Effect',
        desc: 'Water, mud, and road grime slide effortlessly off the surface, making regular washes quicker and safer.',
      },
      {
        title: 'UV & Oxidation Defense',
        desc: 'Protects the factory clear coat against harmful UV solar rays, clear coat breakdown, and paint fading.',
      },
      {
        title: 'Unrivaled Mirror Gloss',
        desc: 'Enhances optical clarity and depth of color for a wet look that lasts significantly longer than conventional waxes.',
      },
      {
        title: 'Long-Term Value Preservation',
        desc: 'Helps preserve your vehicle’s factory finish and resale value with durable, semi-permanent protection.',
      },
    ],
    faqs: [
      {
        question: 'What exactly is a ceramic coating?',
        answer:
          'A ceramic coating is a liquid polymer applied by hand to the exterior of a vehicle. The coating chemically bonds with the vehicle factory paint, creating a protective layer and hydrophobic surface.',
      },
      {
        question: 'How do I care for my vehicle after ceramic coating?',
        answer:
          'We recommend waiting 7 days before the first wash to allow complete curing. Afterwards, maintain it with pH-neutral car shampoos and avoid harsh brush-based automated car washes.',
      },
      {
        question: 'Is paint correction required before ceramic coating?',
        answer:
          'Yes. Because ceramic coatings seal in the existing state of your paint, we perform decontamination and paint correction prior to application to ensure maximum clarity and bonding.',
      },
      {
        question: 'How long does the application process take?',
        answer:
          'Typically 1 to 2 days depending on the vehicle size and the level of paint correction required before coating.',
      },
    ],
    relatedServiceSlugs: ['paint-correction-abbotsford', 'exterior-car-detailing-abbotsford', 'full-car-detailing-abbotsford'],
  },
  {
    id: 'exterior-detailing',
    slug: 'exterior-car-detailing-abbotsford',
    title: 'PREMIUM EXTERIOR CLEANING',
    headlineTitle: 'Premium Exterior Cleaning',
    subtitle: 'Elegant Reset & Deep Decontamination',
    metaTitle: 'Exterior Car Detailing in Abbotsford, BC | RM Detailing',
    metaDescription: 'Professional exterior car detailing in Abbotsford, BC. Foam hand wash, iron decontamination, wheel cleaning, tire dressing, and paint sealant.',
    h1: 'Professional Exterior Car Detailing in Abbotsford',
    shortDescription:
      'Thorough multi-step exterior wash, wheel deep cleaning, iron decontamination, bug and tar removal, trim dressing, and durable paint sealant.',
    fullDescription:
      'Does your vehicle look dull from road grime, brake dust, and Fraser Valley weather? Our Premium Exterior Cleaning is the ideal reset to restore clarity and luster. No exterior component is overlooked: paint, wheels, fender liners, exhaust tips, door jambs, glass, and exterior trim are thoroughly cleaned and conditioned.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    altText: 'Exterior foam wash and hand detailing on black truck',
    included: [
      'Gentle snow foam pre-wash to lift loose grit safely',
      'Two-bucket scratch-free hand wash with plush microfiber mitts',
      'Wheel faces, barrels, wheel wells, and caliper cleaning',
      'Tire cleaning, degreasing, and satin sling-free dressing',
      'Bug splatter, road tar, and tree sap spot removal',
      'Streak-free exterior window cleaning',
      'Door jambs, trunk sills, and fuel door detailing',
      'High-grade spray sealant or protective gloss wax application',
    ],
    benefits: [
      {
        title: 'Safe Scratch-Free Wash Method',
        desc: 'Our specialized washing techniques prevent swirl marks and spiderweb scratches caused by automated drive-through washes.',
      },
      {
        title: 'Deep Brake Dust Removal',
        desc: 'Specialized iron removers safely dissolve stubborn brake dust embedded into alloy wheels and painted panels.',
      },
      {
        title: 'Restored Trim & Rubber',
        desc: 'UV-inhibiting conditioners protect and revitalize faded plastic trim, rubber moldings, and tire sidewalls.',
      },
      {
        title: 'Enhanced Gloss & Water Repellency',
        desc: 'Leaves a silky smooth protective layer that repels rain and everyday road contaminants.',
      },
    ],
    faqs: [
      {
        question: 'Why choose hand detailing over a drive-through wash?',
        answer:
          'Drive-through car washes frequently use abrasive brushes or harsh recycling water containing micro-grit that gouge swirl marks into your paint. Our multi-bucket microfiber methods protect your finish.',
      },
      {
        question: 'How often should I get an exterior detail?',
        answer:
          'For daily drivers in British Columbia, we recommend a thorough exterior detail every 3 to 4 months to protect against road salt, seasonal pollen, and rain fallout.',
      },
      {
        question: 'Do you clean the engine bay during exterior detailing?',
        answer:
          'Engine bay detailing can be included as an add-on or within our Full Car Detailing package upon request.',
      },
    ],
    relatedServiceSlugs: ['ceramic-coating-abbotsford', 'interior-car-detailing-abbotsford', 'full-car-detailing-abbotsford'],
  },
  {
    id: 'interior-detailing',
    slug: 'interior-car-detailing-abbotsford',
    title: 'PREMIUM INTERIOR CLEANING',
    headlineTitle: 'Premium Interior Cleaning',
    subtitle: 'Prepare To Be Amazed with a Fresh Cabin',
    metaTitle: 'Interior Car Detailing in Abbotsford, BC | RM Detailing',
    metaDescription: 'Professional interior car detailing in Abbotsford, BC. Steam cleaning, carpet shampooing, leather conditioning, dust removal, and cabin refresh.',
    h1: 'Professional Interior Car Detailing in Abbotsford',
    shortDescription:
      'Deep steam sanitation, carpet & seat shampooing, leather cleaning & conditioning, meticulous crevice vacuuming, and UV interior protection.',
    fullDescription:
      'High-traffic vehicle interiors accumulate dirt, food crumbs, pet hair, moisture, and odors over time. Our Premium Interior Cleaning gives your cabin a meticulous revitalization. Whether you drive a compact commuter, family SUV, work truck, or sports coupe, our interior process restores freshness, hygiene, and comfort.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    altText: 'Immaculately detailed modern car interior dashboard and leather seats',
    included: [
      'Comprehensive vacuuming of carpets, seats, trunk, and crevices',
      'Hot water extraction and shampooing of fabric floor mats and seats',
      'Gentle leather seat cleaning and pH-balanced conditioner',
      'Detailing of steering wheel, dashboard, console, buttons, and vents',
      'Door panels, cup holders, glove compartment, and storage pockets',
      'Streak-free interior glass, rear-view mirror, and touchscreen cleaning',
      'Odor neutralizer and air freshening treatment',
    ],
    benefits: [
      {
        title: 'Allergen & Bacteria Reduction',
        desc: 'Removes deep-seated dust, pollen, and bacteria trapped in upholstery and air conditioning vent crevices.',
      },
      {
        title: 'Leather Preservation',
        desc: 'Cleans body oils from leather surfaces and feeds natural conditioners to prevent dry cracking.',
      },
      {
        title: 'Stain & Spot Treatment',
        desc: 'Targets coffee spills, salt stains, and everyday grime using dedicated automotive fabric cleaners.',
      },
      {
        title: 'Matte OEM Finish',
        desc: 'Leaves interior plastics and vinyls looking clean and factory-fresh with non-greasy, non-reflective UV protection.',
      },
    ],
    faqs: [
      {
        question: 'Can you remove pet hair and stubborn stains?',
        answer:
          'Yes, we use specialized rubber brushes, pet hair extractors, and hot water extraction to remove as much pet hair and staining as safely possible.',
      },
      {
        question: 'Will my vehicle seats be wet when I pick it up?',
        answer:
          'We use commercial high-velocity moisture extraction equipment and air movers so your upholstery is dry or nearly dry by the time detailing is complete.',
      },
      {
        question: 'Do you use greasy dressings on the dashboard?',
        answer:
          'No. We only apply premium matte-finish interior protectants that shield against UV rays without sticky residues or windshield glare.',
      },
    ],
    relatedServiceSlugs: ['full-car-detailing-abbotsford', 'exterior-car-detailing-abbotsford', 'ceramic-coating-abbotsford'],
  },
  {
    id: 'full-detailing',
    slug: 'full-car-detailing-abbotsford',
    title: 'FULL CAR DETAILING',
    headlineTitle: 'Full Car Detailing',
    subtitle: 'The Complete Interior & Exterior Transformation',
    metaTitle: 'Full Car Detailing in Abbotsford, BC | RM Detailing',
    metaDescription: 'Complete full car detailing services in Abbotsford, BC. Comprehensive interior deep clean paired with full exterior wash, decontamination, and protection.',
    h1: 'Complete Car Detailing Services in Abbotsford',
    shortDescription:
      'Our all-inclusive package combining our premium exterior wash and decontamination with a deep restorative interior cabin cleaning.',
    fullDescription:
      'Our Full Car Detailing package provides the ultimate complete refresh for your vehicle. We combine our rigorous multi-stage exterior wash, decontamination, and protective sealant with our extensive interior steam extraction, leather conditioning, and crevice detailing. Ideal for seasonal resets, pre-sale preparation, or vehicle enthusiasts who demand absolute cleanliness.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
    altText: 'Complete vehicle detailing transformation on sports sedan',
    included: [
      'Full exterior multi-bucket foam wash and iron decontamination',
      'Clay bar paint smoothing treatment',
      'Wheel wells, barrels, rims, and tire deep cleaning with dressing',
      'Deep interior shampooing of carpets, fabric seats, and floor mats',
      'Complete leather cleaning, conditioning, and UV barrier application',
      'Detailing of all dashboard vents, consoles, knobs, and infotainment screens',
      'Inside and outside streak-free crystal clear window cleaning',
      'Door jambs, trunk sills, and hood edges cleaned',
      'Durable paint sealant applied for glossy exterior protection',
    ],
    benefits: [
      {
        title: 'Total Vehicle Transformation',
        desc: 'Both the exterior finish and interior cabin are restored in one comprehensive appointment.',
      },
      {
        title: 'Maximum Resale & Trade-In Value',
        desc: 'Clean, well-maintained vehicles command higher market prices and faster sales.',
      },
      {
        title: 'Convenient All-In-One Service',
        desc: 'Saves you time and ensures unified vehicle protection from bumper to bumper.',
      },
    ],
    faqs: [
      {
        question: 'How long does a Full Car Detail take?',
        answer:
          'A Full Car Detail typically takes between 4 to 6 hours depending on vehicle size and initial condition.',
      },
      {
        question: 'Can I add paint correction or ceramic coating to this package?',
        answer:
          'Yes, we can seamlessly upgrade your package to include single-stage or multi-stage paint correction and ceramic coatings.',
      },
      {
        question: 'How do I book an appointment?',
        answer:
          'You can request a quick quote online through our form or call us directly at +1 778-878-3577.',
      },
    ],
    relatedServiceSlugs: ['ceramic-coating-abbotsford', 'paint-correction-abbotsford', 'interior-car-detailing-abbotsford'],
  },
  {
    id: 'paint-correction',
    slug: 'paint-correction-abbotsford',
    title: 'PAINT CORRECTION',
    headlineTitle: 'Paint Correction',
    subtitle: 'Optimize Your Paint’s Complexion & Clarity',
    metaTitle: 'Paint Correction in Abbotsford, BC | RM Detailing',
    metaDescription: 'Professional paint correction in Abbotsford, BC. Machine polishing to remove swirl marks, light scratches, oxidation, and restore mirror reflection.',
    h1: 'Professional Paint Correction in Abbotsford',
    shortDescription:
      'Precision machine polishing that safely levels clear coat imperfections, removes swirl marks, buffer trails, and hazing to reveal deep paint clarity.',
    fullDescription:
      'When viewing your vehicle in sunlight, do you notice fine spiderweb swirls, light scratches, or a dull hazy appearance? These imperfections scatter light and rob your paint of its true depth. Our Paint Correction service uses precision rotary and dual-action machine polishers with specialized compounds and polishing pads to safely refine your clear coat, restoring crystal clarity and reflective depth.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    altText: 'Paint correction machine polishing on high-end automobile panel',
    included: [
      'Paint depth thickness inspection with electronic gauge',
      'Multi-stage foam wash, iron remover, and fine-grade clay bar prep',
      'Delicate rubber trim, plastic moldings, and badge masking',
      'Single-stage (enhancement) or multi-stage (compound & finish) machine polish',
      'Removal of compounding oils via solvent wipe-down to verify true results',
      'Application of protective sealant or preparation for ceramic coating',
    ],
    benefits: [
      {
        title: 'Removes Swirls & Oxidation',
        desc: 'Eliminates wash marring, minor scratches, water spot etching, and dull clear coat oxidation.',
      },
      {
        title: 'True Mirror Reflection',
        desc: 'Levels micro-imperfections so light reflects uniformly, producing breathtaking depth and clarity.',
      },
      {
        title: 'Ideal Prep for Ceramic Coatings',
        desc: 'Ensures the cleanest possible substrate for long-term protective coatings to bond flawlessly.',
      },
    ],
    faqs: [
      {
        question: 'Does paint correction damage the clear coat?',
        answer:
          'When performed by experienced detailers using paint depth gauges, paint correction removes only a minuscule fraction of microns of clear coat to level out imperfections safely.',
      },
      {
        question: 'Will paint correction remove deep rock chips or gouges?',
        answer:
          'Scratches that have penetrated past the clear coat and base coat into the primer cannot be fully polished out. However, we can improve their appearance or discuss touch-up options.',
      },
      {
        question: 'What is the difference between 1-step and 2-step correction?',
        answer:
          'A 1-step polish uses an all-in-one or medium polish to boost gloss and remove mild hazing. A 2-step correction utilizes a heavy cutting compound first, followed by an ultra-fine finishing polish for maximum clarity.',
      },
    ],
    relatedServiceSlugs: ['ceramic-coating-abbotsford', 'exterior-car-detailing-abbotsford', 'full-car-detailing-abbotsford'],
  },
];

export const LOCATIONS: LocationItem[] = [
  {
    id: 'abbotsford',
    slug: 'car-detailing-abbotsford',
    cityName: 'Abbotsford',
    region: 'Fraser Valley, BC',
    metaTitle: 'Car Detailing Abbotsford BC | RM Detailing',
    metaDescription: 'Top-rated car detailing in Abbotsford, BC. Professional ceramic coating, paint correction, interior & exterior detailing services. Call +1 778-878-3577.',
    h1: 'Professional Car Detailing in Abbotsford, BC',
    intro:
      'As our home base, RM Detailing provides Abbotsford vehicle owners with high-standard auto detailing, paint correction, and ceramic protection tailored to Fraser Valley driving conditions.',
    localContext:
      'From navigating Highway 1 commutes and wet winter road spray to hot summer dust in East Abbotsford and Whatcom, local vehicles encounter substantial environmental wear. Our detailing services are specifically engineered to protect and rejuvenate your car’s exterior paint and interior cabin against seasonal BC elements.',
    features: [
      'Serving all Abbotsford neighborhoods: West Abbotsford, East Abbotsford, Clearbrook, Sumas Mountain & Matsqui',
      '5.0 Star rated vehicle care focused on meticulous craftsmanship',
      'Specialized ceramic coatings for wet Fraser Valley winters and UV protection in summer',
      'Flexible booking with friendly local customer service',
    ],
    popularServices: [
      'Ceramic Coating Abbotsford',
      'Full Car Detailing Abbotsford',
      'Paint Correction Abbotsford',
      'Interior Car Detailing Abbotsford',
      'Exterior Car Detailing Abbotsford',
    ],
    faqs: [
      {
        question: 'Where do you serve in Abbotsford?',
        answer:
          'We serve vehicle owners throughout Abbotsford including Clearbrook, Townline, McMillan, Auguston, Sumas Prairie, and surrounding areas.',
      },
      {
        question: 'How do I request a quote for detailing in Abbotsford?',
        answer:
          'You can submit our quick quote form or call us directly at +1 778-878-3577 for immediate assistance.',
      },
    ],
    nearbySlugs: ['car-detailing-chilliwack', 'car-detailing-mission-bc', 'car-detailing-aldergrove', 'car-detailing-langley'],
  },
  {
    id: 'chilliwack',
    slug: 'car-detailing-chilliwack',
    cityName: 'Chilliwack',
    region: 'Fraser Valley, BC',
    metaTitle: 'Car Detailing Chilliwack BC | RM Detailing',
    metaDescription: 'Premium car detailing services for Chilliwack, BC. Expert ceramic coating, interior steam cleaning, exterior wash & paint correction. Call +1 778-878-3577.',
    h1: 'Professional Car Detailing in Chilliwack, BC',
    intro:
      'Serving vehicle owners across Chilliwack, Sardis, Vedder Crossing, and Cultus Lake with dedicated automotive detailing and long-lasting paint preservation.',
    localContext:
      'Chilliwack drivers frequently encounter agricultural dust, mountain highway debris, outdoor recreation mud from Vedder and Cultus Lake, and rainy winter grime. RM Detailing delivers deep interior cleaning, stain removal, and durable exterior paint sealants and ceramic coatings to keep your car looking pristine.',
    features: [
      'Serving Chilliwack, Sardis, Promontory, Vedder Crossing, and Rosedale',
      'Expertise with daily commuters, family SUVs, trucks, and luxury automobiles',
      'Heavy-duty interior extraction for pet hair, mud, and trail dirt',
      'High-durability coatings to shield against highway road fallout',
    ],
    popularServices: [
      'Ceramic Coating Chilliwack',
      'Interior Deep Clean Chilliwack',
      'Truck & SUV Detailing Chilliwack',
      'Exterior Paint Correction',
    ],
    faqs: [
      {
        question: 'Do you detail trucks and SUVs in Chilliwack?',
        answer:
          'Yes, we regularly detail full-size trucks, lifted vehicles, SUVs, sedans, and performance cars with tailored packages for each vehicle size.',
      },
      {
        question: 'Can you handle vehicles with heavy mud and dog hair from local trails?',
        answer:
          'Absolutely. Our interior packages include thorough extraction and specialized pet hair removal techniques.',
      },
    ],
    nearbySlugs: ['car-detailing-abbotsford', 'car-detailing-mission-bc', 'car-detailing-aldergrove'],
  },
  {
    id: 'mission',
    slug: 'car-detailing-mission-bc',
    cityName: 'Mission',
    region: 'Fraser Valley, BC',
    metaTitle: 'Car Detailing Mission BC | RM Detailing',
    metaDescription: 'Trusted car detailing services for Mission, BC. Professional interior car cleaning, exterior foam wash, ceramic coatings, and paint correction.',
    h1: 'Professional Car Detailing in Mission, BC',
    intro:
      'RM Detailing proudly serves car owners in Mission, BC, providing top-tier automotive cleaning, interior sanitation, and paint correction services just across the Fraser River.',
    localContext:
      'Vehicles in Mission navigate hilly terrain, forest tree sap, seasonal dampness, and Lougheed Highway road film. Our specialized detailing processes thoroughly remove sap, fallout, and dirt while sealing paint and glass against moisture and road grime.',
    features: [
      'Serving Mission, Silverdale, Hatzic, Cedar Valley, and Steelhead',
      'Comprehensive tree sap, industrial fallout, and road salt removal',
      'Interior moisture extraction and anti-mildew treatment for rainy seasons',
      'Long-lasting ceramic coatings for year-round vehicle preservation',
    ],
    popularServices: [
      'Exterior Detailing & Sap Removal Mission',
      'Interior Shampooing Mission',
      'Ceramic Coatings Mission BC',
      'Full Vehicle Reset Packages',
    ],
    faqs: [
      {
        question: 'Can you safely remove tree sap without damaging my car paint?',
        answer:
          'Yes. We utilize dedicated solvent spot-treatments and gentle clay decontamination methods that dissolve tree sap without scratching your clear coat.',
      },
      {
        question: 'How do I book auto detailing in Mission, BC?',
        answer:
          'Contact RM Detailing by phone at +1 778-878-3577 or submit our online quote request form.',
      },
    ],
    nearbySlugs: ['car-detailing-abbotsford', 'car-detailing-aldergrove', 'car-detailing-langley'],
  },
  {
    id: 'langley',
    slug: 'car-detailing-langley',
    cityName: 'Langley',
    region: 'Metro Vancouver / Fraser Valley, BC',
    metaTitle: 'Car Detailing Langley BC | RM Detailing',
    metaDescription: 'High-end car detailing for Langley, BC. Ceramic coating, paint enhancement, interior steam detailing, and full car care. Call +1 778-878-3577.',
    h1: 'Professional Car Detailing in Langley, BC',
    intro:
      'Serving Langley City and Township with premium vehicle detailing, paint correction, and ceramic coatings designed for modern drivers and automotive enthusiasts.',
    localContext:
      'Langley drivers balance city commuting along 200th Street and Highway 1 with rural driving through South Langley and Fort Langley. We provide premium swirl mark removal, interior leather conditioning, and hydrophobic ceramic coatings that keep your vehicle looking showroom-ready.',
    features: [
      'Serving Langley City, Willoughby, Walnut Grove, Brookswood, and Fort Langley',
      'High-precision machine polishing to eliminate wash swirls and restore reflections',
      'Multi-year ceramic coatings for luxury cars, Tesla, trucks, and performance vehicles',
      'Convenient booking and attentive customer support',
    ],
    popularServices: [
      'Ceramic Coating Langley',
      'Paint Correction Langley',
      'Luxury Vehicle Detailing Langley',
      'Interior Upholstery Cleaning',
    ],
    faqs: [
      {
        question: 'Do you work on luxury and electric vehicles in Langley?',
        answer:
          'Yes, we are experienced with high-end sports cars, European luxury vehicles, electric vehicles (EVs), and custom trucks.',
      },
      {
        question: 'Why choose RM Detailing for Langley vehicle owners?',
        answer:
          'We focus on high quality, verified 5.0-star customer satisfaction, and careful attention to every detail of your vehicle.',
      },
    ],
    nearbySlugs: ['car-detailing-aldergrove', 'car-detailing-abbotsford', 'car-detailing-mission-bc'],
  },
  {
    id: 'aldergrove',
    slug: 'car-detailing-aldergrove',
    cityName: 'Aldergrove',
    region: 'Fraser Valley, BC',
    metaTitle: 'Car Detailing Aldergrove BC | RM Detailing',
    metaDescription: 'Expert car detailing in Aldergrove, BC. Ceramic coating, paint correction, interior vacuum & shampoo, exterior foam wash. Call +1 778-878-3577.',
    h1: 'Professional Car Detailing in Aldergrove, BC',
    intro:
      'Providing Aldergrove vehicle owners with dependable, meticulous automotive detailing and paint protection services.',
    localContext:
      'Located directly between Abbotsford and Langley along Fraser Highway, Aldergrove drivers need vehicle care that stands up to heavy highway travel, farm dust, and winter wetness. RM Detailing provides complete vehicle restoration, scratch-free hand washing, and protective sealants.',
    features: [
      'Serving Aldergrove, Gloucester, and adjacent rural Langley / Abbotsford borders',
      'Deep interior cleaning, leather conditioning, and carpet stain extraction',
      'Brake dust decontamination, wheel polishing, and tire conditioning',
      'Fast, personalized quotes with prompt scheduling',
    ],
    popularServices: [
      'Full Car Detailing Aldergrove',
      'Interior Deep Clean Aldergrove',
      'Exterior Wash & Seal Aldergrove',
      'Ceramic Paint Protection',
    ],
    faqs: [
      {
        question: 'How quickly can I get my vehicle detailed near Aldergrove?',
        answer:
          'We provide flexible scheduling Monday through Friday (9 AM - 6 PM) and Sunday (9 AM - 5 PM). Contact us at +1 778-878-3577 for current availability.',
      },
      {
        question: 'Can you detail work trucks in Aldergrove?',
        answer:
          'Yes, we detail work trucks, fleet vehicles, family cars, and enthusiast vehicles with equal care.',
      },
    ],
    nearbySlugs: ['car-detailing-abbotsford', 'car-detailing-langley', 'car-detailing-mission-bc'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Red BMW X5 M-Sport Ceramic Coat',
    category: 'Ceramic Coating',
    image: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80',
    caption: 'Deep gloss reflection and multi-year ceramic coating applied to high-performance SUV.',
  },
  {
    id: 'gal-2',
    title: 'Precision Dual-Action Paint Correction',
    category: 'Paint Correction',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Removing swirl marks and fine defects on dark metallic clear coat for mirror clarity.',
  },
  {
    id: 'gal-3',
    title: 'Luxury Leather & Cockpit Detail',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    caption: 'Complete interior vacuum, steam sanitization, and matte OEM leather conditioning.',
  },
  {
    id: 'gal-4',
    title: 'Hydrophobic Ceramic Water Beading',
    category: 'Ceramic Coating',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Extreme water contact angle ensuring effortless maintenance in rainy BC weather.',
  },
  {
    id: 'gal-5',
    title: 'Full-Size Heavy Duty Truck Detail',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Multi-stage foam wash, chrome polishing, and tire conditioning on a heavy-duty pickup.',
  },
  {
    id: 'gal-6',
    title: 'German Sedan Full Interior & Exterior Reset',
    category: 'Full Detail',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comprehensive transformation covering wheel wells, door jambs, upholstery, and paint.',
  },
  {
    id: 'gal-7',
    title: 'Sports Coupe Deep Gloss Paint Finish',
    category: 'Paint Correction',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    caption: '2-step compound and polish bringing out rich metallic flakes and crisp body lines.',
  },
  {
    id: 'gal-8',
    title: 'Console, Vents & Screen Precision Detailing',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
    caption: 'Soft-bristle brush detailing removing dust from delicate switches and air vents.',
  },
  {
    id: 'gal-9',
    title: 'Snow Foam Pre-Wash & Decontamination',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lifting abrasive road grime prior to hand contact washing to prevent swirl marks.',
  },
];
