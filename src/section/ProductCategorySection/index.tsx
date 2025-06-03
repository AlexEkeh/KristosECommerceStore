import React, { useEffect, useState } from "react";
import { ProductSectionContainer, ProductsWrapper } from "./style";
import { ContentTop } from "@/components/Global/ContentTop";
import WindowIcon from "@mui/icons-material/Window";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ItemType, Item } from "@/db/items";
import { ItemCard } from "@/components/ItemCard";
import { basePath } from "@/utilities/basePath";

interface GetItemsFromDBCallback {
  (items: ItemType[]): void;
}

interface ProductCategorySectionProps {
  category: string;
}

const ProductCategorySection = ({ category }: ProductCategorySectionProps) => {
  const [isGridView, setIsGridView] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isGrid, setIsGrid] = useState(true);

  const [products, setProducts] = useState<ItemType[]>([]);

  // Move getItemsFromDB to component scope so it can be used in multiple places
  const getItemsFromDB = (callback: GetItemsFromDBCallback): void => {
    const request: IDBOpenDBRequest = indexedDB.open("KristosDB", 1);

    request.onsuccess = (event: Event) => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const transaction: IDBTransaction = db.transaction("items", "readonly");
      const store: IDBObjectStore = transaction.objectStore("items");
      const getAllRequest: IDBRequest<ItemType[]> = store.getAll();

      getAllRequest.onsuccess = () => {
        callback(getAllRequest.result);
      };
    };
  };

  // UseEffect to create IndexedDB, save Items, get items, and update product useState #########
  useEffect(() => {
    if (typeof window !== "undefined") {
      const request = indexedDB.open("KristosDB", 1);

      request.onupgradeneeded = (event) => {
        const target = event.target as IDBOpenDBRequest | null;
        if (target) {
          const db = target.result;
          db.createObjectStore("items", { keyPath: "id" });
        }
      };

      request.onsuccess = () => {
        console.log("IndexedDB initialized successfully!");
      };

      // Save Items to de ################################
      const saveItemsToDB = () => {
        const request = indexedDB.open("KristosDB", 1);

        request.onsuccess = (event) => {
          const target = event.target as IDBOpenDBRequest | null;
          if (!target) return;
          const db = target.result;
          const transaction = db.transaction("items", "readwrite");
          const store = transaction.objectStore("items");

          Item.forEach((item) => store.put(item)); // Add each item

          transaction.oncomplete = () =>
            console.log("Items saved successfully!");
        };
      };
      saveItemsToDB(); // Save Item array to IndexedDB #####

      getItemsFromDB((items) => setProducts(items)); // Fetch and store in state
    }
  }, []); //#############################################

  //Update if user Liked product ########################3
  const updateLikeInDB = (id: number) => {
    const request = indexedDB.open("KristosDB", 1);

    request.onsuccess = (event) => {
      const target = event.target as IDBOpenDBRequest | null;
      if (!target) return;
      const db = target.result;
      const transaction = db.transaction("items", "readwrite");
      const store = transaction.objectStore("items");
      const getRequest = store.get(id);

      getRequest.onsuccess = () => {
        const item = getRequest.result;
        if (item) {
          item.like = !item.like; // Toggle like status
          store.put(item); // Update item in IndexedDB
          console.log(
            `Item ${id + 1} like status changed to ${
              item.like ? "liked" : "not liked"
            }`
          );
        }
      };
    };
  };
  updateLikeInDB; //########################

  // Create a method to upgrade indexedDB on click event #####
  const handleToggleLike = (id: number) => {
    updateLikeInDB(id);
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, like: !product.like } : product
      )
    );
  }; //#######################3

  // useEffect to update mapped data on data change or update ###
  useEffect(() => {
    if (typeof window !== "undefined") {
      getItemsFromDB((items) => setProducts(items));
    }
  }, []); //##################

  const handleViewClick = () => {
    setIsGridView((prev) => !prev);
    setIsGrid((prev) => !prev);
  };

  const filteredProducts = products.filter(
    (product) => product.category === `${category}`
  );

  return (
    <ProductSectionContainer>
      <ContentTop
        category={category}
        itemNo={filteredProducts.length}
        viewIcon={isGridView ? <WindowIcon /> : <FormatListBulletedIcon />}
        menuIcon={isOpen ? <MenuIcon /> : <MenuOpenIcon />}
        onViewIconClick={handleViewClick}
        onMenuIconClick={() => setIsOpen((prev) => !prev)}
      />
      <ProductsWrapper
        sx={{
          gridTemplateColumns: `${
            isGrid ? "repeat(auto-fill, 20em)" : "repeat(1, 1fr) !important"
          }`,
        }}
      >
        {products
          .filter((product) => product.category === `${category}`)
          .map((item) => (
            <ItemCard
              key={item.id}
              imageSrc={`${basePath}/${item.img}`}
              alt={item.slug}
              onLikeClick={() => handleToggleLike(item.id)}
              like={item.like}
              likeId={`${item.id}`}
              likeStatus={item.like ? "liked" : "not liked"}
              ratingValue={item.ratings / item.ratings_count}
              ratingsCount={item.ratings_count}
              ratingReadOnly={true}
              itemName={item.name}
              itemDescription={item.description}
              itemAmount={item.amount}
              checked={item.like}
              isGridView={isGrid}
            />
          ))}
      </ProductsWrapper>
    </ProductSectionContainer>
  );
};

export default ProductCategorySection;
