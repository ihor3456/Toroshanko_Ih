import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import Favorite from "./pages/Favorite/Favorite";
import Basket from "./pages/Basket/Basket";
import { useDispatch } from "react-redux";
import { setCollections } from "./store/actions";
import { useSelector } from "react-redux";
import store from "./store/store";

export default function App() {
  const dispatch = useDispatch()
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

        dispatch(setCollections(collection));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const collections = useSelector((state) => state.collections);

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

  // console.log(collections);

  return (
    <>
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
    </>
  );
}
