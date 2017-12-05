import React, { Component } from 'react';

const ResultForm = ({ social, name, email, country, city, image, reset }) => (
  <div className="result_container__div">
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
          {Object.keys(social).map(network =>
            <div className="social_networks__wrapper second_font__par" key={network}>
              <label className="social_network__name">
                {network === "ok"
                  ? "Одноклассники : "
                  : network.charAt(0).toUpperCase() + network.slice(1) + " : "
                }
              </label>
              <p>
                {social[network]}
              </p>
            </div>)}
        </div>

      </div>
      <img className="result__image" src={image}/>
    </div>

    <button className="restart__button" name='reset' onClick={reset}>
      Пройти заново
    </button>

  </div>
);

export default ResultForm