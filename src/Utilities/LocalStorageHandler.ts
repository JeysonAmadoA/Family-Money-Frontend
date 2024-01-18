
export const setStorageData = <T>(key : string, value : T) => {
    localStorage.setItem(key, JSON.stringify({...value}));
}

export const clearStorageData = (key:string) => {
    localStorage.removeItem(key);
}