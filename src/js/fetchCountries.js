const BASE_URL = 'https://restcountries.com/v3.1';

export default function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      throw Error;
    },
  );
}
