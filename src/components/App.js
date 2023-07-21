import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import closeIcon from "../images/svg/svg_close.svg";
import trashIcon from "../images/svg/svg_trash.svg";
import likeIcon from "../images/svg/svg_like.svg";
import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";
import { form } from "../utils/constants";

function App() {
  return (
    <>
      <div className="page__container">
        <Header />
        <hr className="hrz-ruler" />
        <Main />
        <Footer />
        <PopupWithForm {...form.profile}>
          <Fieldset {...form.profile.nameInput} />
          <Fieldset {...form.profile.aboutInput} />
        </PopupWithForm>
        <PopupWithForm {...form.addPlace}>
          <Fieldset {...form.addPlace.titleInput} />
          <Fieldset {...form.addPlace.urlInput} />
        </PopupWithForm>
        <PopupWithForm {...form.changeAvatar}>
          <Fieldset {...form.changeAvatar.input} />
        </PopupWithForm>
        <PopupWithForm {...form.deleteAlert} />

        {/* MODAL LOADING */}
        <section id="modal-loading" className="popup">
          <div className="popup__container popup__container_loading">
            <div className="popup__spinner"></div>
          </div>
        </section>
        {/* MODAL TO CHANGE USER AVATAR */}
        <section id="avatar-modal" className="popup">
          <div className="popup__container">
            <button className="button button_close" type="button">
              <img
                className="img img_button_close"
                src={closeIcon}
                alt="Ícone em forma de um X para fechar a janela de edição de perfil"
              />
            </button>
            <form
              className="popup__form popup__form_place"
              name="changeAvatar"
              noValidate
            >
              <h2 className="popup__title">Alterar a foto do perfil</h2>
              <fieldset className="popup__input-container">
                <input
                  id="avatar-input"
                  className="popup__input popup__input_type_img"
                  required
                  type="url"
                  placeholder="Link de imagem"
                />
                <span className="avatar-input-error"></span>
              </fieldset>
              <button
                name="avatar"
                className="button button_save"
                type="submit"
              >
                Salvar
              </button>
            </form>
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

      {/* MODAL ZOOM PHOTOS */}

      <section id="modal-photo" className="popup">
        <div className="popup__photo-container">
          <button
            className="button button_close button_close_photo"
            type="button"
          >
            <img
              className="img img_button_close"
              src={closeIcon}
              alt="Ícone em forma de um X para fechar a janela de edição de perfil"
            />
          </button>
          <figure className="popup__fig-container">
            <img className="popup__img" />
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
        </div>
      </section>

      {/* TEMPLATE LOADING CARDS */}

      <template id="cards-loading">
        <li className="place__card place__loading skeleton"></li>
      </template>
    </>
  );
}

export default App;
