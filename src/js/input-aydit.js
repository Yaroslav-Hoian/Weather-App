import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function emptyInput(city) {
    const isEmpty = city === '';

    if (isEmpty) {
        iziToast.warning({
            title: "Порожньо",
            message: "Введіть місто",
            position: "bottomCenter"
        })
    }

    return isEmpty;
};