import { Component } from 'react';

import { nanoid } from 'nanoid';
import css from './contactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  nameId = nanoid();
  phoneId = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, phone } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.formGroup}>
          <label htmlFor={this.nameId}>Name</label>
          <input
            onChange={this.handleChange}
            id={this.nameId}
            type="text"
            name="name"
            value={name}
            required
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={this.phoneId}>Phone</label>
          <input
            onChange={this.handleChange}
            id={this.phoneId}
            type="text"
            name="phone"
            value={phone}
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
