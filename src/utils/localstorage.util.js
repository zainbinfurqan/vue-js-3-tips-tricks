export const localStorageUtils = {
    addToLocalStorage: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    getFromLocalStorage: () => {
        return JSON.parse(localStorage.getItem(key))
    },
    clearLocalStorage: () => {
        localStorage.clear();
    },
    removeFromLocalStorage: (key) => {
        localStorage.removeItem(key)
    }
}