export default function Fieldset({
  id,
  className,
  type,
  placeholder,
  minLength,
  maxLength,
}) {
  return (
    <fieldset className="popup__input-container">
      <input
        id={id}
        className={`popup__input popup__input_type_${className}`}
        required
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
      <span className={`${id}-error`}></span>
    </fieldset>
  );
}
