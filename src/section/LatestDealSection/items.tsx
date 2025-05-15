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
  },
];

export { Item };
