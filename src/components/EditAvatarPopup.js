import PopupWithForm from "./PopupWithForm";
import { form } from "../utils/constants";
import { useRef } from "react";

export default function EditAvatarPopup({
  onClose,
  isOpen,
  onUpdateAvatar,
  id,
  className,
  type,
  placeholder,
}) {
  const avatarRef = useRef(null);

  const handleFormReset = () => {
    onClose();
    avatarRef.current.value = "";
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = "";
  }
  return (
    <PopupWithForm
      onClose={handleFormReset}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      {...form.changeAvatar}
    >
      <fieldset className="popup__input-container">
        <input
          ref={avatarRef}
          id={id}
          className={`popup__input popup__input_type_${className}`}
          required
          type={type}
          placeholder={placeholder}
        />
        <span className={`${id}-error`}></span>
      </fieldset>
    </PopupWithForm>
  );
}
