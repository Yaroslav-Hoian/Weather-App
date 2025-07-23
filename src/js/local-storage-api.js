const localThemeKey = "theme";

export function getThemeFromStorage() {
    const currentTheme = JSON.parse(localStorage.getItem(localThemeKey));
    return currentTheme;
}

export function setThemeToStorage(theme) {
    localStorage.setItem(localThemeKey, JSON.stringify(theme))
}

