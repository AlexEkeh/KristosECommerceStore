interface ItemType {
  id: number;
  like: boolean;
  img: string;
  name: string;
  category: string;
  amount: number | string;
  ratings: number;
  ratings_count: number;
  slug: string;
  section: "latest deals" | "special offers" | "amazing discount";
}

const Item: ItemType[] = [
  {
    id: 0,
    like: true,
    img: "GasCooker.svg",
    name: "GoPro HERO6 4K Action",
    category: "Camera - Black",
    amount: "N1,000,000",
    ratings: 35,
    ratings_count: 10,
    slug: "Gas Cooker",
    section: "latest deals",
  },
  {
    id: 1,
    like: true,
    img: "GasCooker.svg",
    name: "GoPro HERO6 4K Action",
    category: "Camera - Black",
    amount: "N1,000,000",
    ratings: 30,
    ratings_count: 11,
    slug: "Gas Cooker",
    section: "latest deals",
  },
  {
    id: 2,
    like: false,
    img: "GasCooker.svg",
    name: "GoPro HERO6 4K Action",
    category: "Camera - Black",
    amount: "N1,000,000",
    ratings: 15,
    ratings_count: 10,
    slug: "Gas Cooker",
    section: "latest deals",
  },
  {
    id: 3,
    like: true,
    img: "GasCooker.svg",
    name: "GoPro HERO6 4K Action",
    category: "Camera - Black",
    amount: "N2,000,000",
    ratings: 45,
    ratings_count: 10,
    slug: "Gas Cooker",
    section: "latest deals",
  },
  {
    id: 4,
    like: false,
    img: "GasCooker.svg",
    name: "GoPro HERO6 4K Action",
    category: "Camera - Black",
    amount: "N100,000",
    ratings: 35,
    ratings_count: 10,
    slug: "Gas Cooker",
    section: "latest deals",
  },
  {
    id: 5,
    like: false,
    img: "GasCooker.svg",
    name: "GoPro HERO6 4K Action",
    category: "Camera - Black",
    amount: "N1,000,000",
    ratings: 40,
    ratings_count: 12,
    slug: "Gas Cooker",
    section: "latest deals",
  },
  {
    id: 6,
    like: true,
    img: "GasCooker.svg",
    name: "GoPro HERO6 4K Action",
    category: "Camera - Black",
    amount: "N9,999",
    ratings: 50,
    ratings_count: 10,
    slug: "Gas Cooker",
    section: "amazing discount",
  },
];

export { Item };
export type { ItemType };
