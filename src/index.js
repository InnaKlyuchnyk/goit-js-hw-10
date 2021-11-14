import './css/styles.css';
import fetchCountries from '../src/js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { createMarkup } from './js/createMarkup';
import { refs } from './js/getRefs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputTyping, DEBOUNCE_DELAY));

function onInputTyping(event) {
  const name = event.target.value.trim();

  fetchCountries(name.trim())
    .then(countries => {
      if (countries.length > 10) {
        tooManyMatches();
        cleanInterface();
        return;
      } else if ((countries.length >= 2 && countries.length <= 10) || countries.length === 1) {
        cleanInterface();
        const markup = countries.map(country => createMarkup(country, countries)).join('');
        refs.countryInfo.insertAdjacentHTML('beforeend', markup);
      }
    })
    .catch(cleanInterface());
  if (name === '') {
    cleanInterface();
  }
}

function cleanInterface() {
  refs.countryInfo.innerHTML = '';
}
function tooManyMatches() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
}
