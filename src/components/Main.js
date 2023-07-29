import pencilIcon from "../images/svg/svg_pencil.svg";
import plusIcon from "../images/svg/svg_plus.svg";
import trashIcon from "../images/svg/svg_trash.svg";
import likeIcon from "../images/svg/svg_like.svg";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { urlPaths } from "../utils/constants";
import Card from "./Card";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  //user data state variables
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();

  //card state variable
  const [cards, setCards] = useState([]);

  //fetch API to get user data and initial cards
  useEffect(() => {
    const user = api.get(urlPaths.user);
    const cardsList = api.get(urlPaths.cards);

    user.then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });

    cardsList.then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__item">
          <figure className="profile__fig">
            <img
              src={userAvatar}
              onClick={onEditAvatarClick}
              className="img img_avatar"
              alt="Foto do perfil do usuário"
            />
          </figure>
          <ul className="profile__description">
            <li className="list-container">
              <h1 className="profile__title">{userName}</h1>
              <button
                onClick={onEditProfileClick}
                className="button button_edit"
                type="button"
              >
                <img
                  onClick={onEditProfileClick}
                  className="img img_button_edit"
                  src={pencilIcon}
                  alt="Ícone de um lápis para editar o perfil"
                />
              </button>
            </li>
            <li>
              <h2 className="profile__subtitle">{userDescription}</h2>
            </li>
          </ul>
        </div>
        <button
          onClick={onAddPlaceClick}
          className="button button_add"
          type="button"
        >
          <img
            onClick={onAddPlaceClick}
            className="img img_button_add"
            src={plusIcon}
            alt="ícone do sinal de adição do botão de Adicionar"
          />
        </button>
      </section>

      <section className="places">
        <ul className="place">
          <Card card={cards} />
        </ul>
      </section>
    </main>
  );
}
