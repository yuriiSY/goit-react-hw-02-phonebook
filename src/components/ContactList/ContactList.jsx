import css from './contactList.module.css';

const ContactList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, phone }) => (
    <li key={id}>
      {name}:{phone}
      <button
        className={css.button}
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ContactList;
