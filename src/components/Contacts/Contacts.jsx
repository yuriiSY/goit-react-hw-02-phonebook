import { Component } from 'react';

import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isDuplicate({ name }) {
    const nameNormalized = name.toLowerCase();
    const { contacts } = this.state;

    const duplicate = contacts.find(item => {
      const currentNameNormalize = item.name.toLowerCase();
      return currentNameNormalize === nameNormalized;
    });

    return Boolean(duplicate);
  }

  addContact = data => {
    if (this.isDuplicate(data)) {
      return alert(`${data.name} is already in contacts`);
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);

      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredList() {
    const { filter, contacts } = this.state;
    const normolizedTarget = filter.toLowerCase();
    const filteredContats = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normolizedTarget);
    });

    return filteredContats;
  }

  render() {
    const contacts = this.getFilteredList();
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <Filter onChange={this.changeFilter} />
        <ContactList items={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default Contacts;
