import CardItem from "../../components/CardList/CardItem";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import './Favorite.scss';

const Favorites = ({colections, updateFavorite}) => {


  useEffect(() => {
    if (updateFavorite) {
        updateFavorite();
    }
  }, [updateFavorite]);

    const inFavorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const filterFavoriteColections = colections.filter(product =>{
      let savedFavorite = inFavorite.find((fav)=> fav === product.article)
      return savedFavorite
    })

const listCard = filterFavoriteColections.map((el) => (
  <CardItem
    name={el.name}
    price={el.price}
    path={el.path}
    color={el.color}
    article={el.article}
    renderIcon={true}
    renderButton = {false}
    updateFavorite={updateFavorite}
    id={el.article}
  />
));
    return(
    <>
    <div className="cards">
    {listCard.length > 0 ? (
      listCard
    ) : (
      <p className="no-items">Обраних товарів немає!<br/><a href="/">Головна</a></p>
    )}
    </div>
    </>

    )
}
Favorites.propTypes = {
  colections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      article: PropTypes.string,
      color: PropTypes.string,
      path: PropTypes.string,
      price: PropTypes.string
    })
  ),
  updateFavorite: PropTypes.func
};
export default Favorites