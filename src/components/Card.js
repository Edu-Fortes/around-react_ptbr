import trashIcon from "../images/svg/svg_trash.svg";
import likeIcon from "../images/svg/svg_like.svg";

export default function Card({ card, onCardClick }) {
  return card.map((card) => (
    <li key={card._id} className="place__card">
      <div className="place__btn-container">
        <button className="button button_trash" type="button">
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
            className="button__like button__like_active"
            src={likeIcon}
            alt="Ícone de coração do botão curtir"
          />
          <span className="button__count">{card.likes.length}</span>
        </button>
      </div>
    </li>
  ));
}
