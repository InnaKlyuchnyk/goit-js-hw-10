import countryCard from '../templates/country-card.hbs';
import { refs } from '../index';

export default function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
  ).then(response => {
    return response.json().then(country => {
      console.log(country);
      const markup = countryCard(country[0]);
      refs.countryInfo.insertAdjacentHTML('beforeend', markup);
    });
  });
}
