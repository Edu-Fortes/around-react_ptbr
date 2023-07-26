import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import trashIcon from "../images/svg/svg_trash.svg";
import likeIcon from "../images/svg/svg_like.svg";
import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";
import { form } from "../utils/constants";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <div className="page__container">
        <Header />
        <hr className="hrz-ruler" />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
        />
        <Footer />
        {/* Modal to Edit Profile */}
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          {...form.profile}
        >
          <Fieldset {...form.profile.nameInput} />
          <Fieldset {...form.profile.aboutInput} />
        </PopupWithForm>

        {/* Modal to Add New Place*/}
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          {...form.addPlace}
        >
          <Fieldset {...form.addPlace.titleInput} />
          <Fieldset {...form.addPlace.urlInput} />
        </PopupWithForm>

        {/* Modal to Change user Avatar */}
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          {...form.changeAvatar}
        >
          <Fieldset {...form.changeAvatar.input} />
        </PopupWithForm>

        {/* Delete Alert Modal */}
        <PopupWithForm {...form.deleteAlert} />

        {/* MODAL LOADING */}
        <section id="modal-loading" className="popup">
          <div className="popup__container popup__container_loading">
            <div className="popup__spinner"></div>
          </div>
        </section>
      </div>

      {/* TEMPLATE DO CARD LUGARES */}

      <template id="card-template">
        <li className="place__card">
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
            <img className="img img_card" />
          </figure>
          <div className="place__content">
            <h2 className="place__name"></h2>
            <button className="button" type="button">
              <img
                className="button__like button__like_active"
                src={likeIcon}
                alt="Ícone de coração do botão curtir"
              />
              <span className="button__count"></span>
            </button>
          </div>
        </li>
      </template>

      {/* TEMPLATE LOADING CARDS */}

      <template id="cards-loading">
        <li className="place__card place__loading skeleton"></li>
      </template>
    </>
  );
}

export default App;
