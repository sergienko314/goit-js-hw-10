import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputCountries = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputCountries.addEventListener(
  'input',
  debounce(serchCountries, DEBOUNCE_DELAY)
);

function serchCountries(input) {
  let inInput = input.target.value;
  if (inInput.trim() !== '') {
    fetchCountries(inInput).then(data => criateList(data));
  } else if (inInput === '') {
    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '');
  }
}

function criateList(country) {
  if (!country?.length)
    return Notiflix.Notify.warning('Memento te hominem esse');
  if (country.length > 1 && country.length <= 10) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = country
      .map(({ name, flags }) => {
        return ` <li class="country-list__item list">
          <h2 class="country-list__name">${name.official}</h2>
                          <img class="country-list__flag" src="${flags.png}" alt="Flag of ${name.official}" width = 300 >
                          
                      </li>`;
      })
      .join('');
  }

  if (country.length === 1) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = country
      .map(({ name, capital, population, languages, flags }) => {
        return `
        <h2 class="country-list__name">${name.official}</h2>
        <img class="country-list__flag" src="${flags.png}" alt="Flag of ${
          name.official
        }" width = 300 >
        <h3>Capital : ${capital}</h3>
            <p>Population : ${population}</p>
            <p>languages : ${Object.values(languages).join(',')}</p>
            `;
      })
      .join('');
  } else if (country.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}
