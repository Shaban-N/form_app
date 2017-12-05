import React, {Component} from 'react';
import back from './static/ico/back.png'
import next from './static/ico/next.png'

export default class SecondForm extends Component {

    onCountryChange = e => this.props.saveValue('country', e.target.value);

    onCityChange = e => this.props.saveValue('city', e.target.value);

    nextForm = () => this.props.country && this.props.city && this.props.nextForm()


    render() {
        const {countries, cities, country} = this.props;

        const countriesOptions = countries.map(({id, name}) =>(
            <option value={id}
                     key={id}>
                {name}
            </option>));

        const citiesInCountry = Object.entries(cities)
            .filter(([id, city]) => city.country == country)
            .map(([id, city]) => <option value={city.name} key={id}>{city.name}</option>);

        const isCityDisabled = !country || !citiesInCountry.length;

        return (
            <div className="center_wrapper">
                {this.props.renderFormsNumbers()}
                <p className='form__name'>2.Выберете страну и город</p>

                <div className="inputs_wrapper">
                    <select name='country'
                            className="country__select"
                            value={country}
                            onChange={this.onCountryChange}>
                        <option value='' disabled>Select country</option>
                        {countriesOptions}
                    </select>
                    <select name='city'
                            value={this.props.city}
                            onChange={this.onCityChange}
                            disabled={isCityDisabled}>
                        <option value='' disabled>Select city</option>
                        {citiesInCountry}
                    </select>
                </div>

                <div className="button_wrapper">
                    <div name="prev"
                         className="button prev__button"
                         onClick={this.props.prevForm}>
                            <img className="icon" src={back}/>
                            <span>Предыдущий</span>
                    </div>
                    <div name="next"
                         className="button next__button"
                         onClick={this.nextForm}>
                            <span>Следующий</span>
                            <img className="icon" src={next}/>
                    </div>
                </div>

            </div>
        )
    }
}

