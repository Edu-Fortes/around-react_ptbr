import trashIcon from "../images/svg/svg_trash.svg";
import likeIcon from "../images/svg/svg_like.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardContext } from "../contexts/CardContext";

export default function Card({ onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const cards = useContext(CardContext);

  return cards.map((card) => (
    <li key={card._id} className="place__card">
      <div className="place__btn-container">
        <button
          className={`button ${
            card.owner._id === currentUser._id
              ? "button_trash button_trash_visible"
              : "button_trash"
          }`}
          type="button"
        >
          <img
            className="button__image"
            src={trashIcon}
            alt="Ícone de uma lixeira do botão de excluir postagem"
          />
        </button>
      </div>
      <figure className="place__fig">
        <img
          onClick={onCardClick}
          className="img img_card"
          src={card.link}
          alt={`Imagem da postagem ${card.name}`}
        />
      </figure>
      <div className="place__content">
        <h2 className="place__name">{card.name}</h2>
        <button className="button" type="button">
          <img
            className={`button__like ${
              card.likes.some((i) => i._id === currentUser._id)
                ? "button__like_active"
                : ""
            }`}
            src={likeIcon}
            alt="Ícone de coração do botão curtir"
          />
          <span className="button__count">{card.likes.length}</span>
        </button>
      </div>
    </li>
  ));
}
