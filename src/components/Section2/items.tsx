interface ProductCatType {
  id: number;
  name: string;
  img: string;
  width: number;
  height: number;
  alt: string;
}

const ProductCategories: ProductCatType[] = [
  {
    id: 0,
    name: "Washing Machine",
    img: "/WashingMachines.svg",
    width: 134,
    height: 137,
    alt: "Washing Machine",
  },
  {
    id: 1,
    name: "Cookers",
    img: "/Cookers.svg",
    width: 113,
    height: 144,
    alt: "Cooker",
  },
  {
    id: 2,
    name: "Air Condition",
    img: "/AirConditioners.svg",
    width: 155,
    height: 76,
    alt: "Air Condition",
  },
  {
    id: 3,
    name: "TV",
    img: "/TV.svg",
    width: 143,
    height: 103,
    alt: "Tv",
  },
  {
    id: 4,
    name: "Generator",
    img: "/Generators.svg",
    width: 129,
    height: 104,
    alt: "Generator",
  },
  {
    id: 5,
    name: "Blender",
    img: "/Blenders.svg",
    width: 79,
    height: 140,
    alt: "Blender",
  },
];

export { ProductCategories };
