import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
//import "./App.css";

function App() {
  return (
    <>
      <div className="page__container">
        <Header />
        <hr className="hrz-ruler" />
        <Main />
        <Footer />

        {/* MODAL EDITAR PERFIL */}

        <section id="profile-modal" className="popup popup_opened">
          <div className="popup__container">
            <button className="button button_close" type="button">
              <img
                className="img img_button_close"
                src="<%=require('./images/svg/svg_close.svg')%>"
                alt="Ícone em forma de um X para fechar a janela de edição de perfil"
              />
            </button>
            <form
              className="popup__form popup__form_profile"
              name="editProfile"
              novalidate
            >
              <h2 className="popup__title">Editar perfil</h2>
              <fieldset className="popup__input-container">
                <input
                  id="name-input"
                  className="popup__input popup__input_type_name"
                  required
                  type="text"
                  placeholder="Nome"
                  minlength="2"
                  maxlength="40"
                />
                <span className="name-input-error"></span>
              </fieldset>
              <fieldset className="popup__input-container">
                <input
                  id="about-input"
                  className="popup__input popup__input_type_about"
                  required
                  type="text"
                  placeholder="Sobre mim"
                  minlength="2"
                  maxlength="200"
                />
                <span className="about-input-error"></span>
              </fieldset>
              <button className="button button_save" type="submit">
                Salvar
              </button>
            </form>
          </div>
        </section>

        {/* MODAL ADICIONAR CARD */}

        <section id="add-card-modal" className="popup popup_opened">
          <div className="popup__container">
            <button className="button button_close" type="button">
              <img
                className="img img_button_close"
                src="<%=require('./images/svg/svg_close.svg')%>"
                alt="Ícone em forma de um X para fechar a janela de edição de perfil"
              />
            </button>
            <form
              className="popup__form popup__form_place"
              name="addPlace"
              novalidate
            >
              <h2 className="popup__title">Novo local</h2>
              <fieldset className="popup__input-container">
                <input
                  id="title-input"
                  className="popup__input popup__input_type_place"
                  maxlength="30"
                  minlength="2"
                  required
                  type="text"
                  placeholder="Título"
                />
                <span className="title-input-error"></span>
              </fieldset>
              <fieldset className="popup__input-container">
                <input
                  id="url-input"
                  className="popup__input popup__input_type_img"
                  required
                  type="url"
                  placeholder="Link de imagem"
                />
                <span className="url-input-error"></span>
              </fieldset>
              <button
                name="create"
                className="button button_save"
                type="submit"
              >
                Criar
              </button>
            </form>
          </div>
        </section>

        {/* MODAL TO DELETE CARD */}

        <section id="modal-delete" className="popup popup_opened">
          <div className="popup__container">
            <button className="button button_close" type="button">
              <img
                src="<%=require('./images/svg/svg_close.svg')%>"
                alt="Ícone em form de um X para fechar a janela de confirmação de exclusão de cartão"
                className="img img_button_close"
              />
            </button>
            <form name="deleteAlert" className="popup__form popup__form_delete">
              <h2 className="popup__title">Tem certeza?</h2>
              <button className="button button_yes" type="submit">
                Sim
              </button>
            </form>
          </div>
        </section>

        {/* MODAL LOADING */}

        <section id="modal-loading" className="popup popup_opened">
          <div className="popup__container popup__container_loading">
            <div className="popup__spinner"></div>
          </div>
        </section>

        {/* MODAL TO CHANGE USER AVATAR */}

        <section id="avatar-modal" className="popup popup_opened">
          <div className="popup__container">
            <button className="button button_close" type="button">
              <img
                className="img img_button_close"
                src="<%=require('./images/svg/svg_close.svg')%>"
                alt="Ícone em forma de um X para fechar a janela de edição de perfil"
              />
            </button>
            <form
              className="popup__form popup__form_place"
              name="changeAvatar"
              novalidate
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
                src="<%=require('./images/svg/svg_trash.svg')%>"
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
                src="<%=require('./images/svg/svg_like.svg')%>"
                alt="Ícone de coração do botão curtir"
              />
              <span className="button__count"></span>
            </button>
          </div>
        </li>
      </template>

      {/* MODAL ZOOM PHOTOS */}

      <section id="modal-photo" className="popup popup_opened">
        <div className="popup__photo-container">
          <button
            className="button button_close button_close_photo"
            type="button"
          >
            <img
              className="img img_button_close"
              src="<%=require('./images/svg/svg_close.svg')%>"
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
