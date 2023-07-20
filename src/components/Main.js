import pencilIcon from "../images/svg/svg_pencil.svg";
import plusIcon from "../images/svg/svg_plus.svg";

function handleEditAvatarClick() {}
function handleEditProfileClick() {}
function handleAddPlaceClick() {}

export default function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__item">
          <figure className="profile__fig">
            <img className="img img_avatar" alt="Foto do perfil do usuário" />
          </figure>
          <ul className="profile__description">
            <li className="list-container">
              <h1 className="profile__title"></h1>
              <button className="button button_edit" type="button">
                <img
                  className="img img_button_edit"
                  src={pencilIcon}
                  alt="Ícone de um lápis para editar o perfil"
                />
              </button>
            </li>
            <li>
              <h2 className="profile__subtitle"></h2>
            </li>
          </ul>
        </div>
        <button className="button button_add" type="button">
          <img
            className="img img_button_add"
            src={plusIcon}
            alt="ícone do sinal de adição do botão de Adicionar"
          />
        </button>
      </section>

      <section className="places">
        <ul className="place"></ul>
      </section>
    </main>
  );
}
