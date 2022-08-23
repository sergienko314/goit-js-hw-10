const URL = 'https://restcountries.com/v3.1/name';
const FILTER_RESPONSE = 'name,capital,population,flags,languages';
import Notiflix from 'notiflix';

export function fetchCountries(name) {
  return fetch(`${URL}/${name}?fields=${FILTER_RESPONSE}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      return Notiflix.Notify.failure('Qui timide rogat docet negare');
    });
}
