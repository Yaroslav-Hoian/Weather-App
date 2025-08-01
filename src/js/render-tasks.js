import { refs } from "./refs";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getWeatherByQuery } from "./weather-api";
import { hideLoader, showLoader } from "./loader";
import { createMarkup, clearMarkup } from "./markup-tasks";
import { emptyInput } from "./input-aydit";

export async function handleSubmit(ev) {
    ev.preventDefault();
    clearMarkup();

    const { city, days } = ev.currentTarget.elements;

    if (emptyInput(city.value.trim())) {
        return;
    };

    showLoader();

    try {
        const posts = await getWeatherByQuery(city.value.trim(), days.value);

        createMarkup(posts.forecast.forecastday)
        
    } catch (error) {
        iziToast.error({
            title: error.message,
        });
    }
    finally {
        hideLoader();
    }
};

