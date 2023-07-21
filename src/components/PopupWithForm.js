import closeIcon from "../images/svg/svg_close.svg";

export default function PopupWithForm({ title, name, btnText, children }) {
  return (
    <>
      <section id={name} className="popup">
        <div className="popup__container">
          <button className="button button_close" type="button">
            <img
              src={closeIcon}
              alt="Ícone em form de um X para fechar a janela de confirmação de exclusão de cartão"
              className="img img_button_close"
            />
          </button>
          <form name={name} className={`popup__form popup__form_${name}`}>
            <h2 className="popup__title">{title}</h2>
            {children}
            <button className="button button_save" type="submit">
              {btnText}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
