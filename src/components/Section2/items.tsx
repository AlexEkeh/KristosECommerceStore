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
    img: "/WashingMachines.png",
    width: 250,
    height: 250,
    alt: "Washing Machine"
  },
  {
    id: 1,
    name: "Cookers",
    img: "/Cookers.png",
    width: 250,
    height: 300,
    alt: "Cooker"
  },
  {
    id: 2,
    name: "Air Condition",
    img: "/AirConditions.png",
    width: 250,
    height: 300,
    alt: "Air Condition"
  },
  {
    id: 3,
    name: "TV",
    img: "/TV.png",
    width: 200,
    height: 300,
    alt: "Tv"
  },
  {
    id: 4,
    name: "Generator",
    img: "/Generators.png",
    width: 250,
    height: 300,
    alt: "Generator"
  },
  {
    id: 5,
    name: "Blender",
    img: "/Blenders.png",
    width: 250,
    height: 250,
    alt: "Blender"
  },
];

export { ProductCategories };
