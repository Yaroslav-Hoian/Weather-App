import axios from "axios";

export async function getWeatherByQuery(city = "", days = 1) {
    const response = await axios.get("http://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: "56039d7908c048a0890183312252307",
            q: city,
            days,
            lang: "uk"
        }
    });
    return response.data;
};