import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";
import { form } from "../utils/constants";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState();
  const [about, setAbout] = useState();

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  const handleFormReset = () => {
    onClose();
    setName(currentUser.name);
    setAbout(currentUser.about);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(name, about);
  }
  return (
    <PopupWithForm
      onClose={handleFormReset}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      {...form.profile}
    >
      <Fieldset
        {...form.profile.nameInput}
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
      />
      <Fieldset
        {...form.profile.aboutInput}
        value={about || ""}
        onChange={(e) => setAbout(e.target.value)}
      />
    </PopupWithForm>
  );
}
