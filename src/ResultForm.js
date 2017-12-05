import React, {Component} from 'react';

export default class ResultForm extends Component {

    render() {
        const {social,name,email,country,city,image,restart}=this.props;
        return (
            < div className="result_container__div">

                <div className="result_wrapper__div">
                    <div className="info_wrapper__div">

                        <div>
                            <h2>{name}</h2>
                            <p className="second_font__par">
                                {email}
                            </p>
                        </div>

                        <p className="second_font__par">
                            {country} {city}
                        </p>

                        <div>
                            { Object.keys(social).map(this_key =>
                                <div className="social_networks__wrapper second_font__par" key={this_key}>
                                    <label className="social_network__name">
                                        { this_key === "ok" ?
                                            "Одноклассники : " :
                                            this_key.charAt(0).toUpperCase() + this_key.slice(1) + " : "}
                                    </label>
                                    <p>
                                        {social[this_key]}
                                    </p>
                                </div>)}
                        </div>

                    </div>
                    <img className="result__image" src={image}/>
                </div>

                <button className="restart__button" name='reset' onClick={restart}>
                    Пройти заново
                </button>

            </div>
        )

    }
}