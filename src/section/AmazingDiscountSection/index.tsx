"use client";
import React, { useEffect, useState } from "react";
import {
  AmazingDiscountSectionContainer,
  AmazingDiscountSectionContentBox,
  AmazingDiscountSectionTitleWrapper,
  TitleHead,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Item, ItemType } from "@/db/items";
import { ItemCard } from "@/components/ItemCard";

interface GetItemsFromDBCallback {
  (items: ItemType[]): void;
}

const AmazingDiscountSection = () => {
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

  return (
    <AmazingDiscountSectionContainer>
      <AmazingDiscountSectionTitleWrapper>
        <TitleHead>Get Amazing Discounts on these Products</TitleHead>
      </AmazingDiscountSectionTitleWrapper>
      <Swiper
        className="product-section"
        spaceBetween={12}
        pagination={{ clickable: true }}
        loop
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        effect="fade"
        breakpoints={{
          1: { slidesPerView: 2, pagination: { type: "bullets" } },
          500: { slidesPerView: 3, pagination: { type: "bullets" } },
          700: { slidesPerView: 4, pagination: { type: "bullets" } },
          920: { slidesPerView: 5, pagination: { type: "bullets" } },
          1200: { slidesPerView: 5, pagination: { type: "bullets" } },
          1380: {
            slidesPerView: 5,
            pagination: { type: "bullets" },
          },
        }}
        style={{
          padding: "0 0 30px 0",
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {products
          .filter((product) => product.section === "amazing discount")
          .slice(0, 15)
          .map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "100%", minWidth: "fit-content" }}
            >
              <ItemCard
                key={item.id}
                imageSrc={item.img}
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
                isGridView
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <AmazingDiscountSectionContentBox></AmazingDiscountSectionContentBox>
    </AmazingDiscountSectionContainer>
  );
};

export default AmazingDiscountSection;
