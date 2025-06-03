import { basePath } from "@/utilities/basePath";

interface ProductCatType {
  id: number;
  name: string;
  img: string;
  width: number;
  height: number;
  alt: string;
  href: string;
}

const ProductCategories: ProductCatType[] = [
  {
    id: 0,
    name: "Washing Machine",
    img: "WashingMachines.svg",
    width: 134,
    height: 137,
    alt: "Washing Machine",
    href: `${basePath}/home/washing_machine`,
  },
  {
    id: 1,
    name: "Cookers",
    img: "Cookers.svg",
    width: 113,
    height: 144,
    alt: "Cooker",
    href: `${basePath}/home/cookers`,
  },
  {
    id: 2,
    name: "Air Condition",
    img: "AirConditioners.svg",
    width: 155,
    height: 76,
    alt: "Air Condition",
    href: `${basePath}/home/air_condition`,
  },
  {
    id: 3,
    name: "TV",
    img: "TV.svg",
    width: 143,
    height: 103,
    alt: "Tv",
    href: `${basePath}/home/tv`,
  },
  {
    id: 4,
    name: "Generator",
    img: "Generators.svg",
    width: 129,
    height: 104,
    alt: "Generator",
    href: `${basePath}/home/generator`,
  },
  {
    id: 5,
    name: "Blender",
    img: "Blenders.svg",
    width: 79,
    height: 140,
    alt: "Blender",
    href: `${basePath}/home/blender`,
  },
];

export { ProductCategories };
