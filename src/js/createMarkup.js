export function createMarkup({ flags, name, capital, population, languages }, countries) {
  const matches = countries.length === 1;

  return `<h2>
    <img src="${flags.svg}" alt="country flag" width="50" height="40">${name.official}
</h2>
${
  matches
    ? `<ul>
    <li>Capital: ${capital}</li>
    <li>Population: ${population}</li>
    <li>Languages: ${Object.values(languages)}</li>
</ul>`
    : ''
}
  `;
}
