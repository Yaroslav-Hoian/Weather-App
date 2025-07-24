import { refs } from "./refs";

export function createMarkup(arr) {
    const markup = arr.map(({ date,
        day: {
            avgtemp_c,
            condition: {
                icon,
                text
            } } }) => `
        <li class="weather-card">
            <img src="${icon}" alt="${text}" class="weather-icon"/>
            <h2 class="weather-date">${date}</h2>
            <h3 class="weather-text">${text}</h3>
            <h3 class="temperature">${avgtemp_c} °C</h3>
        </li>
        `).join("");
    
    refs.weatherList.insertAdjacentHTML("beforeend", markup);
};

export function clearMarkup() {
    refs.weatherList.innerHTML = '';
};