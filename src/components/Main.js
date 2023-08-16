import pencilIcon from "../images/svg/svg_pencil.svg";
import plusIcon from "../images/svg/svg_plus.svg";
import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  //user data context
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__item">
          <figure className="profile__fig">
            <img
              src={currentUser.avatar}
              onClick={onEditAvatarClick}
              className="img img_avatar"
              alt="Foto do perfil do usuário"
            />
          </figure>
          <ul className="profile__description">
            <li className="list-container">
              <h1 className="profile__title">{currentUser.name}</h1>
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
              <h2 className="profile__subtitle">{currentUser.about}</h2>
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
          <Card onCardClick={onCardClick} />
        </ul>
      </section>
    </main>
  );
}
