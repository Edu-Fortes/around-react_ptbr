import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";
import ImagePopup from "./ImagePopup";
import { form, urlPaths } from "../utils/constants";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardContext } from "../contexts/CardContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState();
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //fetch user data from server
    api.get(urlPaths.user).then((res) => {
      setCurrentUser(res);
    });
    //fetch card list from server
    api.get(urlPaths.cards).then((res) => {
      setCards(res);
    });
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api.put(urlPaths.likes, card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.delete(urlPaths.likes, card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <hr className="hrz-ruler" />
        <CardContext.Provider value={cards}>
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
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
        </CardContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
