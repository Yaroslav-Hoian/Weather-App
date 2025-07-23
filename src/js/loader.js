import { refs } from "./refs";

export function showLoader() {
    refs.loaderSpan.classList.remove("hidden");
}

export function hideLoader() {
    refs.loaderSpan.classList.add("hidden");
}