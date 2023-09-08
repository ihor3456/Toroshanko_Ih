import { useState, useEffect } from "react";
import Button from "../Button";
import Icon from "../Icon/Icon"
import PropTypes from 'prop-types';

export default function CardItem ({id,name, price, path, color, article, handleModal, updateFavorite, text, renderIcon=false, renderButton=false}) {
    const [favoriteColor, setFavoriteColor] = useState("blue")

    const addToFavorite = (id) => {
        const itemInLocalStorage = JSON.parse(localStorage.getItem("favorite"))
        if (itemInLocalStorage){
            const index = itemInLocalStorage.indexOf(id)
            if(index === -1){
                localStorage.setItem("favorite", JSON.stringify([...itemInLocalStorage, id]))
            }else{
                const updatedLocalStorage = [...itemInLocalStorage]
    
                updatedLocalStorage.splice(index, 1)
                if(updatedLocalStorage.length === 0) {
                    localStorage.removeItem("favorite")
                }else{
                    localStorage.setItem("favorite", JSON.stringify(updatedLocalStorage))
                }
            }
        }else{
            localStorage.setItem("favorite", JSON.stringify([id]))
        }
    }

    useEffect(()=>{
        const getFavoriteLocalStorage = JSON.parse(localStorage.getItem("favorite"))
        if(getFavoriteLocalStorage){
            getFavoriteLocalStorage.forEach(id=>{
                if(+id === +article) setFavoriteColor("yellow")
            })
        }
    }, [article])
    useEffect(() => {
        if (updateFavorite) {
          updateFavorite();
        }
      }, [favoriteColor]);
    

const changeColor = () => {
    if(favoriteColor === "blue") {
        setFavoriteColor("yellow");
      } else {
        setFavoriteColor("blue");
      }
      updateFavorite();
      addToFavorite(id);
}

    return(
        <ul className="card-box">
            <li>{name}</li>
            <li className="card-item"><img src={path} alt="img" /></li>
            <li>Цінф: {price}UAH</li>
            <li>Код товару: {article}</li>
            <li>Колір: {color}</li>
            <li className="card-box-btn">
            {renderIcon && (
                <Icon changeColor={changeColor} color={favoriteColor}/>
                )}

            {renderButton && (
                <Button text = {text} onClick={handleModal}/>
             )}   
            </li>
            
        </ul>
    )
}

CardItem.propTypes = {
    article: PropTypes.string,
    addToFavorite: PropTypes.func,
    name: PropTypes.string,
    color: PropTypes.string,
    path: PropTypes.string,
    price: PropTypes.string,
    handleModal: PropTypes.func,
    updateFavorite: PropTypes.func,   
    renderButton: PropTypes.bool,
    renderIcon: PropTypes.bool,
    id: PropTypes.string
  };

