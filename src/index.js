import './css/styles.css';
import fetchCountries from '../src/js/fetchCountries';
import debounce from 'lodash.debounce';
export const refs = {
  input: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputTyping, DEBOUNCE_DELAY));

function onInputTyping(event) {
  const name = event.target.value;
  fetchCountries(name);
}
