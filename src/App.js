import React, { Component } from 'react';
import FirstForm from './FirstForm.js';
import SecondForm from './SecondForm.js';
import ThirdForm from './thirdForm.js';
import FourthForm from './FourthForm.js';
import ResultForm from './ResultForm.js';
import citiesFile from './static/cities.json';
import countriesFile from './static/countries.json';
import image1 from'./static/images/cat1.jpg';
import image2 from'./static/images/cat2.jpg';
import image3 from'./static/images/cat3.jpg';
import image4 from'./static/images/dog4.jpg';

const initialState = {
  activeForm: 0,
  topFormNumber: 0,
  images: [],
  name: '',
  email: '',
  country: '',
  city: '',
  social: {},
  selectedImage: ''
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const countries = Object.entries(countriesFile).map(([id, name]) => ({ id, name }));
    const images = [image1, image2, image3, image4];

    this.setState({ cities: Object.values(citiesFile), countries, images });
  }

  reset = () => this.setState(
    {
      activeForm: 0,
      topFormNumber: 0,
      name: '',
      email: '',
      country: '',
      city: '',
      social: {},
      selectedImage: ''
    }
  );

  saveValue = (key, property) => this.setState({ [key]: property });

  nextForm = () => {
    const { activeForm, topFormNumber } = this.state;
    const nextActiveForm = activeForm + 1;
    const nextTopFormNumber = topFormNumber === nextActiveForm - 1
      ? topFormNumber + 1
      : topFormNumber

    this.setState({ activeForm: nextActiveForm, topFormNumber: nextTopFormNumber });
  };

  prevForm = () => this.setState({ activeForm: this.state.activeForm - 1 });

  onFormNumberClick = idx => (this.state.topFormNumber >= idx) && this.setState({ activeForm: idx })

  renderFormsNumbers = () => {
    const { activeForm } = this.state;
    const { topFormNumber } = this.state;
    return (
      <div className="form_number__wrapper">
        <div
          className={`form_number_div
                                    ${activeForm == 0 && 'active_form'}
                                    ${topFormNumber > 0 && 'visited_form'}`}
          onClick={this.onFormNumberClick.bind(this, 0)}
        >
          1
        </div>
        <div className={`form_number_div
                                    ${activeForm == 1 && 'active_form'}
                                    ${topFormNumber > 1 && 'visited_form'}`}
             onClick={this.onFormNumberClick.bind(this, 1)}
        >
          2
        </div>
        <div className={`form_number_div
                                    ${activeForm == 2 && 'active_form'}
                                    ${topFormNumber > 2 && 'visited_form'}`}
             onClick={this.onFormNumberClick.bind(this, 2)}
        >
          3
        </div>
        <div className={`form_number_div
                                    ${activeForm == 3 && 'active_forms'}
                                    ${topFormNumber > 3 && 'visited_form'}`}
             onClick={this.onFormNumberClick.bind(this, 3)}
        >
          4
        </div>
      </div>
    )
  };

  getCountry = () => {
    const key = this.state.country;
    return this.state.countries[key - 1].name;
  };

  render() {
    const { activeForm, name, email, country, city, social, images, selectedImage } = this.state;

    return (
      <div>
        {activeForm === 0 && (
          <FirstForm
            name={name}
            email={email}
            saveValue={this.saveValue}
            nextForm={this.nextForm}
            renderFormsNumbers={this.renderFormsNumbers}
          />
        )}
        {activeForm === 1 && (
          <SecondForm
            countries={this.state.countries}
            cities={this.state.cities}
            country={country}
            city={city}
            saveValue={this.saveValue}
            nextForm={this.nextForm}
            prevForm={this.prevForm}
            renderFormsNumbers={this.renderFormsNumbers}
          />
        )}
        {activeForm == 2 && (
          <ThirdForm
            saveValue={this.saveValue}
            nextForm={this.nextForm}
            prevForm={this.prevForm}
            renderFormsNumbers={this.renderFormsNumbers}
          />
        )}
        {activeForm == 3 && (
          <FourthForm
            images={this.state.images}
            saveValue={this.saveValue}
            nextForm={this.nextForm}
            prevForm={this.prevForm}
            renderFormsNumbers={this.renderFormsNumbers}
          />
        )}
        {activeForm == 4 && (
          <ResultForm
            name={name}
            email={email}
            city={city}
            social={social}
            country={this.getCountry()}
            image={images[selectedImage]}
            reset={this.reset}
          />
        )}
      </div>
    )
  }
}