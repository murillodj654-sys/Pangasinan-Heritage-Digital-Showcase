export type HeritageCategory = "Natural" | "Historical" | "Religious";

export interface HeritageSite {
  slug: string;
  name: string;
  location: string;
  category: HeritageCategory;
  shortDescription: string;
  description: string;
  image: string;
  contact?: string;
}

export const heritageSites: HeritageSite[] = [
  {
    slug: "balingasay-river",
    name: "Balingasay River",
    location: "Bolinao, Pangasinan",
    category: "Natural",
    shortDescription:
      "A calm turquoise river lined with mangroves, dotted with floating cottages and bangka rides.",
    description:
      "The Balingasay River winds through Bolinao's mangrove forest into striking turquoise waters. Visitors can rent a bangka (outrigger boat) for a relaxing river cruise, or unwind at one of the floating cottages built right over the water — a favorite quiet spot away from the crowds.",
    image: "/images/balingasay-river.jpg",
    contact: "Bolinao Municipal Tourism Office",
  },
  {
    slug: "cabongaoan-beach",
    name: "Cabongaoan Beach",
    location: "Burgos, Pangasinan",
    category: "Natural",
    shortDescription:
      "A rugged coastline of natural rock pools and tidal formations carved by the West Philippine Sea.",
    description:
      "Cabongaoan Beach is known for its dramatic rock formations and natural tidal pools, where waves crash over volcanic rock shelves to fill swimmable pools at low tide. It's a favorite spot for photography, cliff views, and watching the surf roll in from the West Philippine Sea.",
    image: "/images/cabongaoan-beach.jpg",
    contact: "Burgos Municipal Tourism Office",
  },
  {
    slug: "manaoag-basilica",
    name: "Minor Basilica of Our Lady of Manaoag",
    location: "Manaoag, Pangasinan",
    category: "Religious",
    shortDescription:
      "A grand yellow basilica and one of the country's most visited Marian pilgrimage sites.",
    description:
      "Elevated to a Minor Basilica, this church has drawn devotees since the 17th century who come to pray before the miraculous image of Our Lady of Manaoag, believed to grant favors and healing. Its bell tower and wide plaza make it a landmark stop for pilgrims and heritage travelers alike.",
    image: "/images/manaoag-basilica.jpg",
    contact: "Parish Office · manaoagshrine.com",
  },
  {
    slug: "tayug-sunflower-maze",
    name: "Tayug Sunflower Maze & Eco-Park",
    location: "Tayug, Pangasinan",
    category: "Natural",
    shortDescription:
      "Rolling fields of blooming sunflowers arranged in a walkable maze, best visited at golden hour.",
    description:
      "A seasonal must-visit, the Tayug Sunflower Maze transforms open farmland into sweeping rows of golden sunflowers arranged in maze-like paths. Families and photographers flock here during bloom season for picnics, photo ops, and wide-open mountain-backdrop views.",
    image: "/images/tayug-sunflower.jpg",
  },
  {
    slug: "cape-bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    category: "Historical",
    shortDescription:
      "A Spanish-era lighthouse perched on Punta Piedra Point, the second tallest in the country.",
    description:
      "Built in 1905 during the American colonial period atop a Spanish-era foundation, the Cape Bolinao Lighthouse stands 101 feet tall and still guides ships along the South China Sea. Its hilltop location offers panoramic views of the coastline and surrounding forest.",
    image: "/images/cape-bolinao-lighthouse.jpg",
    contact: "Bolinao Municipal Tourism Office",
  },
];

export const categories: HeritageCategory[] = ["Natural", "Historical", "Religious"];
