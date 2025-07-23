import { refs } from "./refs";
import { themeSwitcher, setThemeFromStorage } from "./theme-switcher";
import { handleSubmit } from "./render-tasks";

setThemeFromStorage();

refs.themeToggle.addEventListener("click", themeSwitcher);

refs.form.addEventListener("submit", handleSubmit);







