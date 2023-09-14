export const setCollections = (collections) => ({
  type: "SET_COLLECTIONS",
  payload: collections,
});

export const toggleModal = () => ({
  type: "TOGGLE_MODAL",
});

// const addToBasket = (cardId) => {
//   const local = JSON.parse(localStorage.getItem("basket")) || [];
//   if (local) {
//     const index = local.indexOf(cardId);
//     if (index === -1) {
//       localStorage.setItem("basket", JSON.stringify([...local, cardId]));
//     } else {
//       const updatedLocal = [...local];
//       updatedLocal.splice(index, 1);
//       if (updatedLocal.length === 0) {
//         localStorage.removeItem("basket");
//       } else {
//         localStorage.setItem("basket", JSON.stringify(updatedLocal));
//       }
//     }
//   } else {
//     localStorage.setItem("basket", JSON.stringify([cardId]));
//   }
// };

// export const addToBasketWithThunk = (cardId) => {
//   return (dispatch) => {
//     dispatch(addToBasket(cardId)); // Виклик дії addToBasket
//     dispatch(toggleModal()); // Виклик дії toggleModal
//   };
// };
