export interface Product {
  id: number
  name: string
  brand: string
  price: number
  originalPrice: number | null
  image: string
  images?: string[]
  rating: number
  reviews: number
  badge: string | null
  category: string
  species: string
  description?: string
  features?: string[]
  sku?: string
  inStock?: boolean
  stockCount?: number
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Dry Dog Food - Chicken & Rice",
    brand: "Vital Nutrition",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&auto=format&fit=crop&q=80",
    ],
    rating: 4.8,
    reviews: 156,
    badge: "Best Seller",
    category: "food",
    species: "dog",
    description: "Premium quality dry dog food made with real chicken and rice. Provides complete and balanced nutrition for adult dogs of all sizes. Contains essential vitamins and minerals for a healthy coat and strong bones.",
    features: [
      "Made with real chicken as the first ingredient",
      "No artificial colors or preservatives",
      "Supports healthy digestion",
      "Promotes shiny coat and healthy skin",
      "Suitable for all adult dog breeds",
    ],
    sku: "VN-DOG-001",
    inStock: true,
    stockCount: 150,
  },
  {
    id: 2,
    name: "Salmon & Tuna Wet Cat Food - 12 Pack",
    brand: "Ocean Feast",
    price: 18.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 89,
    badge: "New",
    category: "food",
    species: "cat",
    description: "Delicious wet cat food made with premium salmon and tuna. Each pouch contains real fish pieces in a savory gravy that cats love. Perfect for fussy eaters.",
    features: [
      "Real salmon and tuna pieces",
      "High protein content",
      "Grain-free formula",
      "No artificial additives",
      "Convenient portion packs",
    ],
    sku: "OF-CAT-002",
    inStock: true,
    stockCount: 200,
  },
  {
    id: 3,
    name: "Interactive Dog Toy Bundle",
    brand: "PlayPaws",
    price: 15.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 234,
    badge: "Sale",
    category: "toys",
    species: "dog",
    description: "Keep your dog entertained for hours with this interactive toy bundle. Includes a variety of toys designed to stimulate your dog mentally and physically.",
    features: [
      "Includes 5 different toys",
      "Durable materials",
      "Suitable for aggressive chewers",
      "Promotes healthy play",
      "Various textures and sounds",
    ],
    sku: "PP-DOG-003",
    inStock: true,
    stockCount: 75,
  },
  {
    id: 4,
    name: "Luxury Cat Bed - Plush Grey",
    brand: "ComfortPet",
    price: 34.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 67,
    badge: null,
    category: "beds",
    species: "cat",
    description: "Ultra-soft luxury cat bed with raised edges for security. Features a removable, machine-washable cover and non-slip bottom.",
    features: [
      "Super soft plush material",
      "Raised edges for comfort",
      "Machine washable cover",
      "Non-slip bottom",
      "Suitable for cats up to 6kg",
    ],
    sku: "CP-CAT-004",
    inStock: true,
    stockCount: 45,
  },
  {
    id: 5,
    name: "Small Animal Hay - Timothy Grass 2kg",
    brand: "Nature's Best",
    price: 8.99,
    originalPrice: 10.99,
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 112,
    badge: "Popular",
    category: "food",
    species: "small-animal",
    description: "Premium Timothy hay perfect for rabbits, guinea pigs, and other small animals. Hand-selected for quality and freshness.",
    features: [
      "100% natural Timothy grass",
      "High fiber content",
      "Supports dental health",
      "Fresh and aromatic",
      "Resealable packaging",
    ],
    sku: "NB-SM-005",
    inStock: true,
    stockCount: 300,
  },
  {
    id: 6,
    name: "Premium Bird Seed Mix - 5kg",
    brand: "Feathered Friends",
    price: 12.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 45,
    badge: null,
    category: "food",
    species: "bird",
    description: "A nutritious blend of seeds and grains designed for wild birds. Attracts a variety of garden birds all year round.",
    features: [
      "Mixed seed blend",
      "High energy content",
      "No artificial additives",
      "Attracts various bird species",
      "Suitable for feeders and tables",
    ],
    sku: "FF-BIRD-006",
    inStock: true,
    stockCount: 180,
  },
  {
    id: 7,
    name: "Dog Grooming Kit - Professional",
    brand: "GroomPro",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 178,
    badge: "Top Rated",
    category: "grooming",
    species: "dog",
    description: "Complete professional grooming kit for dogs. Includes all essential tools for maintaining your dog's coat at home.",
    features: [
      "Stainless steel scissors",
      "Slicker brush included",
      "Nail clippers with guard",
      "Dematting comb",
      "Storage case included",
    ],
    sku: "GP-DOG-007",
    inStock: true,
    stockCount: 60,
  },
  {
    id: 8,
    name: "Cat Scratching Tower - Multi-Level",
    brand: "ClimbCat",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 203,
    badge: "Sale",
    category: "furniture",
    species: "cat",
    description: "Multi-level cat scratching tower with platforms, hideaway, and dangling toys. Provides exercise and scratching satisfaction.",
    features: [
      "Multiple scratching posts",
      "Cozy hideaway cubby",
      "Hanging toy attachments",
      "Sturdy base for stability",
      "Easy assembly",
    ],
    sku: "CC-CAT-008",
    inStock: true,
    stockCount: 35,
  },
  {
    id: 9,
    name: "Aquarium LED Light Bar - 60cm",
    brand: "AquaGlow",
    price: 32.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 92,
    badge: "New",
    category: "aquatics",
    species: "fish",
    description: "High-output LED light bar perfect for freshwater and marine aquariums. Features adjustable brightness and color modes.",
    features: [
      "Full spectrum LED",
      "Adjustable brightness",
      "Multiple color modes",
      "Energy efficient",
      "Waterproof design",
    ],
    sku: "AG-FISH-009",
    inStock: true,
    stockCount: 55,
  },
  {
    id: 10,
    name: "Horse Grooming Brush Set",
    brand: "EquiCare",
    price: 45.99,
    originalPrice: 55.99,
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 67,
    badge: "Popular",
    category: "grooming",
    species: "equine",
    description: "Professional horse grooming brush set with ergonomic handles. Includes body brush, dandy brush, mane comb, and hoof pick.",
    features: [
      "Ergonomic handles",
      "Natural bristles",
      "Complete grooming set",
      "Durable construction",
      "Carry bag included",
    ],
    sku: "EC-EQ-010",
    inStock: true,
    stockCount: 40,
  },
  {
    id: 11,
    name: "Reptile Heat Mat - Medium",
    brand: "ReptileZone",
    price: 19.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=400&auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 78,
    badge: null,
    category: "heating",
    species: "reptile",
    description: "Safe and reliable under-tank heat mat for reptiles. Provides gentle warmth for optimal thermoregulation.",
    features: [
      "Even heat distribution",
      "Waterproof design",
      "Auto temperature control",
      "Energy efficient",
      "Easy to install",
    ],
    sku: "RZ-REP-011",
    inStock: true,
    stockCount: 90,
  },
  {
    id: 12,
    name: "Rabbit Hutch - Double Tier",
    brand: "PetHome",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 134,
    badge: "Sale",
    category: "housing",
    species: "small-animal",
    description: "Spacious two-tier rabbit hutch with ramp access. Features weatherproof roof and easy-clean slide-out tray.",
    features: [
      "Double tier design",
      "Weatherproof roof",
      "Slide-out cleaning tray",
      "Secure latches",
      "Indoor/outdoor use",
    ],
    sku: "PH-SM-012",
    inStock: true,
    stockCount: 25,
  },
]

export const categories = [
  { id: "food", name: "Food & Treats", icon: "utensils" },
  { id: "toys", name: "Toys", icon: "gamepad" },
  { id: "beds", name: "Beds & Bedding", icon: "bed" },
  { id: "grooming", name: "Grooming", icon: "scissors" },
  { id: "health", name: "Health & Wellness", icon: "heart" },
  { id: "healthcare", name: "Healthcare", icon: "heart" },
  { id: "accessories", name: "Accessories", icon: "tag" },
  { id: "aquatics", name: "Aquatics", icon: "fish" },
  { id: "furniture", name: "Furniture", icon: "sofa" },
  { id: "housing", name: "Housing & Cages", icon: "home" },
  { id: "heating", name: "Heating & Lighting", icon: "sun" },
]

export const species = [
  { id: "dog", name: "Dog", count: 1250 },
  { id: "cat", name: "Cat", count: 890 },
  { id: "small-animal", name: "Small Animal", count: 420 },
  { id: "bird", name: "Bird", count: 310 },
  { id: "fish", name: "Fish", count: 580 },
  { id: "reptile", name: "Reptile", count: 190 },
  { id: "equine", name: "Equine", count: 275 },
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsBySpecies(speciesId: string): Product[] {
  return products.filter((p) => p.species === speciesId)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  )
}
