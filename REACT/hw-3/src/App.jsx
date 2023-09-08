import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import Favorite from "./pages/Favorite/Favorite";
import Basket from "./pages/Basket/Basket";
// import Main from "./pages/Main/Main";

export default function App() {
  const [collections, setCollections] = useState([]);
  const [basketItems, setBasketItems] = useState(null);
  const [favoriteItems, setFavoriteItems] = useState(null);

  useEffect(() => {
    fetch("/api/array.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Помилка завантаження файла");
        }
      })
      .then((data) => {
        const addToArray = (data) => {
          return data.map((el) => {
            el.isFavorite = false;
            el.isAdded = false;
            return el;
          });
        };

        const collection = addToArray(data);
        setCollections(collection);
      })
      .catch((error) => {
        console.error(error);
      });
    updateItemCount();
    updateFavorite();
  }, []);

  useEffect(() => {
    updateItemCount();
  }, [basketItems]);

  useEffect(() => {
    updateFavorite();
  }, [favoriteItems]);

  const updateItemCount = () => {
    const basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    const itemCount = basketItems.length;
    if (itemCount !== basketItems) {
      setBasketItems(itemCount);
      return itemCount;
    }
  };

  const updateFavorite = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite")) || [];
    const itemCount = favoriteItems.length;
    if (itemCount !== favoriteItems) {
      setFavoriteItems(itemCount);
    }
  };
  console.log(collections);
  return (
    <>
      <BrowserRouter>
        <Header countOfItems={basketItems} countOfFavorites={favoriteItems} />
        <Routes>
          <Route
            path="/"
            element={
              <CardList
                list={collections}
                updateItemCount={() => updateItemCount()}
                basketItems={basketItems}
                updateFavorite={() => updateFavorite()}
                favoriteItems={favoriteItems}
              />
            }
          ></Route>
          <Route
            path="/favorite"
            element={
              <Favorite
                colections={collections}
                updateFavorite={() => updateFavorite()}
              />
            }
          ></Route>
          <Route
            path="/basket"
            element={
              <Basket
                collections={collections}
                updateItemCount={() => updateItemCount()}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
