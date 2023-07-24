/* MODAL ZOOM PHOTOS */

<section id="modal-photo" className="popup">
  <div className="popup__photo-container">
    <button className="button button_close button_close_photo" type="button">
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
</section>;
