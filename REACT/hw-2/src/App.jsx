import React from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";

export default class App extends React.Component {
  state = {
    colections: [],
    basketItems: null,
    favoriteItems: null,
  };
  componentDidMount() {
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

        const colection = addToArray(data);
        const newState = { ...this.state, colections: colection };
        this.setState(newState);
      })
      .catch((error) => {
        console.error(error);
      });
    this.updateItemCount();
    this.updateFavorite();
  }

  componentDidUpdate(prevState) {
    if (prevState.basketItems !== this.state.basketItems) {
      this.updateItemCount();
    }
    if (prevState.favoriteItems !== this.state.favoriteItems) {
      this.updateFavorite();
    }
  }
  
  updateItemCount = () => {
    const basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    const itemCount = basketItems.length;
    if (itemCount !== this.state.basketItems) {
      this.setState({ basketItems: itemCount });
    }
  };
  updateFavorite = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite")) || [];
    const itemCount = favoriteItems.length;
    if (itemCount !== this.state.favoriteItems) {
      this.setState({ favoriteItems: itemCount });
    }
  };
  render() {
    return (
      <>
        <Header
          countOfItems={this.state.basketItems}
          countOfFavorites={this.state.favoriteItems}
        />
        <CardList
          list={this.state.colections}
          updateItemCount={() => this.updateItemCount()}
          basketItems={this.state.basketItems}
          updateFavorite={() => this.updateFavorite()}
          favoriteItems={this.state.favoriteItems}
        />
      </>
    );
  }
}
