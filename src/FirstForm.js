import React, { Component } from 'react';
import back from './static/ico/back.png';
import next from './static/ico/next.png';

export default class FirstForm extends React.Component {
  state = {
    isEmailValid: true
  };

  onEmailChange = e => this.props.saveValue('email', e.target.value);

  onNameChange = e => this.props.saveValue('name', e.target.value);

  nextForm = () => {
    const isEmailValid = this.props.email.search(/[\w\.]*@\w*\.[a-z]{2,3}/) != (-1);
    this.setState({ isEmailValid });
    isEmailValid && this.props.name && this.props.nextForm()
  };

  render() {
    const { isEmailValid } = this.state;
    const { name, email } = this.props;

    return (
      <div className="center_wrapper">
        {this.props.renderFormsNumbers()}
        <p className='form__name'>
          1.Введите имя и e-mail
        </p>
        <div className="inputs_wrapper">
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onNameChange}
            className="input_text"
            placeholder="Имя"
          />
          <div className={`${!isEmailValid && 'onerror'}`}>
            <input
              type="text"
              name="email"
              value={email}
              className={`input_text ${!isEmailValid && 'input_error inline'}`}
              onChange={this.onEmailChange}
              placeholder="Email"/>
            <p className={`error_message inline ${isEmailValid && 'none'}`}>
              Некорректный адрес</p>
          </div>
        </div>
        <div className="button_wrapper">
          <div name="prev"
               className="button prev__button"
               disabled="true">
            <img className="icon" src={back}/>
            <span>Предыдущий</span>
          </div>
          <div name="next"
               className="button next__button"
               onClick={this.nextForm}
          >
            <span>Следующий</span>
            <img className="icon" src={next}/>
          </div>
        </div>
      </div>
    );
  }
}