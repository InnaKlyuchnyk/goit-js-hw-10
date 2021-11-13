import './css/styles.css';
import fetchCountries from '../src/js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { createMarkup } from './js/createMarkup';

const refs = {
  input: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 300;
const maxLength = 10;

refs.input.addEventListener('input', debounce(onInputTyping, DEBOUNCE_DELAY));

function onInputTyping(event) {
  const name = event.target.value.trim();
  fetchCountries(name)
    .then(countries => {
      console.log(countries);
      if (countries.length > maxLength) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        return;
      }
      const markup = countries.map(country => createMarkup(country)).join('');
      refs.countryInfo.insertAdjacentHTML('beforeend', markup);
    })
    .finally(() => (refs.input.innerHTML = ''));
}
