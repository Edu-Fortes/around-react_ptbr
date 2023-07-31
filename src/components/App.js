import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";
import ImagePopup from "./ImagePopup";
import { form } from "../utils/constants";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState();
  const [selectedCard, setSelectedCard] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleCardClick(evt) {
    setSelectedCard(evt.target);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
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
          onCardClick={handleCardClick}
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

        {/* Modal to Show Big Image */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        {/* MODAL LOADING */}
        <section id="modal-loading" className="popup">
          <div className="popup__container popup__container_loading">
            <div className="popup__spinner"></div>
          </div>
        </section>
      </div>

      {/* TEMPLATE LOADING CARDS */}

      <template id="cards-loading">
        <li className="place__card place__loading skeleton"></li>
      </template>
    </>
  );
}

export default App;
