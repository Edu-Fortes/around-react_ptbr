import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";
import { form } from "../utils/constants";
import { useState } from "react";

export default function AddPlacePopup({ onClose, isOpen, onAddPlaceSubmit }) {
  const [newCard, setNewCard] = useState({ name: "", link: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit(newCard);
  }

  function handleFormReset() {
    onClose();
    setNewCard();
  }

  return (
    <PopupWithForm
      onClose={handleFormReset}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      {...form.addPlace}
    >
      <Fieldset
        onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
        {...form.addPlace.titleInput}
      />
      <Fieldset
        onChange={(e) => setNewCard({ ...newCard, link: e.target.value })}
        {...form.addPlace.urlInput}
      />
    </PopupWithForm>
  );
}
