import React, { useEffect, useRef, useState } from "react";
import {
  ClearFilterButton,
  ProductSectionContainer,
  ProductsWrapper,
  SortFilterStatusBox,
  SortStatus,
  SortStatusWrapper,
} from "./style";
import { ContentTop } from "@/components/Global/ContentTop";
import WindowIcon from "@mui/icons-material/Window";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ItemType, Item } from "@/db/items";
import { ItemCard } from "@/components/ItemCard";
import { basePath } from "@/utilities/basePath";
import {
  FilterSortMenu,
  getSortLabel,
  SortOptionProp,
} from "@/components/FilterSortMenu";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

interface GetItemsFromDBCallback {
  (items: ItemType[]): void;
}

interface ProductCategorySectionProps {
  category: string;
}

const ProductCategorySection = ({ category }: ProductCategorySectionProps) => {
  const [isGridView, setIsGridView] = useState(true); //state for items layout
  const [isOpen, setIsOpen] = useState(false); //State for menu
  const [isGrid, setIsGrid] = useState(true); //State for grid
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [products, setProducts] = useState<ItemType[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<ItemType[]>([]);

  const menuRef = useRef<HTMLDivElement>(null);

  const [clearFilterButton, setClearFilterButton] = useState(false);

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

      // Save Items to db ################################
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

      getItemsFromDB((items) => {
        setProducts(items);
        const categoryItems = items.filter(
          (item) => item.category === category
        );
        setDisplayedProducts(categoryItems);
      }); // Fetch and store in state
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
    setDisplayedProducts((prev) =>
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

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // useEffect to scroll to top on pagination data change or update ###
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  //State for sorting
  const [sortOption, setSortOption] = useState<SortOptionProp>("dateAsc");

  //Sort Function
  const sortFunctions = {
    nameAsc: (a: ItemType, b: ItemType) => a.name.localeCompare(b.name),
    nameDsc: (a: ItemType, b: ItemType) => b.name.localeCompare(a.name),
    priceAsc: (a: ItemType, b: ItemType) => Number(a.amount) - Number(b.amount),
    priceDsc: (a: ItemType, b: ItemType) => Number(b.amount) - Number(a.amount),
    dateAsc: (a: ItemType, b: ItemType) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
    dateDsc: (a: ItemType, b: ItemType) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  };

  // State for filter
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [defaultMinPrice, setDefaultMinPrice] = useState<number>(0);
  const [defaultMaxPrice, setDefaultMaxPrice] = useState<number>(0);

  //Use Effect to set min max default filter value
  useEffect(() => {
    if (products.length > 0) {
      const categoryProducts = products.filter(
        (product) => product.category === category
      );

      if (categoryProducts.length > 0) {
        const amounts = categoryProducts.map((p) => Number(p.amount));
        const min = Math.min(...amounts);
        const max = Math.max(...amounts);

        setDefaultMinPrice(min);
        setDefaultMaxPrice(max);

        // Only set min/max if user hasn't changed them yet
        if (minPrice === 0 && maxPrice === 0) {
          setMinPrice(min);
          setMaxPrice(max);
        }
      }
    }
  }, [products, category]);

  // Apply Filter Button on Click
  const handleApplyFilter = () => {
    getItemsFromDB((items) => {
      const filteredProducts = items.filter(
        (product) =>
          product.category === category &&
          Number(product.amount) >= minPrice &&
          Number(product.amount) <= maxPrice
      );

      setProducts(items); // optional: keep full dataset in sync
      setDisplayedProducts(filteredProducts);
    });
    setIsOpen(!isOpen);
    setClearFilterButton(true);
  };

  //Reset Filter Button on Click
  const handleResetFilter = () => {
    getItemsFromDB((items) => {
      const categoryItems = items.filter((item) => item.category === category);
      setDisplayedProducts(categoryItems);

      setMinPrice(defaultMinPrice);
      setMaxPrice(defaultMaxPrice);
    });
    setIsOpen(false);
    setClearFilterButton(false);
  };

  //Handle close FilterMenu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Handle filter clear button click
  const handleClearFilter = () => {
    handleResetFilter();
    setIsOpen(false);
    setClearFilterButton(false);
  };

  return (
    <ProductSectionContainer>
      <ContentTop
        category={category}
        itemNo={displayedProducts.length}
        viewIcon={isGridView ? <WindowIcon /> : <FormatListBulletedIcon />}
        viewType={isGridView ? "Grid" : "List"}
        menuIcon={isOpen ? <MenuOpenIcon /> : <MenuIcon />}
        onViewIconClick={handleViewClick}
        onMenuIconClick={onToggle}
      />
      <SortFilterStatusBox>
        <SortStatusWrapper>
          Sorted by:{" "}
          <SortStatus onClick={() => setIsOpen(true)}>
            {" "}
            {getSortLabel(sortOption)}{" "}
          </SortStatus>
        </SortStatusWrapper>
        {clearFilterButton && (
          <ClearFilterButton onClick={handleClearFilter} color="error">
            <FilterAltOffIcon />
            Clear all Filter
          </ClearFilterButton>
        )}
      </SortFilterStatusBox>
      <ProductsWrapper
        sx={{
          gridTemplateColumns: `${
            isGrid ? "repeat(auto-fill, 20em)" : "repeat(1, 1fr) !important"
          }`,
        }}
      >
        {displayedProducts
          .filter((product) => product.category === `${category}`)
          .sort(sortFunctions[sortOption])
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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
              currency={item.currency}
              itemAmount={item.amount}
              checked={item.like}
              isGridView={isGrid}
            />
          ))}
      </ProductsWrapper>
      <Stack>
        <Pagination
          count={Math.ceil(displayedProducts.length / itemsPerPage)}
          page={currentPage}
          onChange={(_, value) => setCurrentPage(value)}
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Stack>
      {isOpen! && (
        <FilterSortMenu
          ref={menuRef}
          onClick={onToggle}
          additionalMethod={() => setIsOpen(false)}
          sortOption={sortOption}
          onSortChange={(option) => setSortOption(option)}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          onApplyFilter={handleApplyFilter}
          onResetFilter={handleResetFilter}
        />
      )}
    </ProductSectionContainer>
  );
};

export default ProductCategorySection;
