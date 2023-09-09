export class LocalStorage {
  setItem<T>(key: string, value: T) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    return window.localStorage.getItem(key);
  }

  removeItem(key: string) {
    return window.localStorage.removeItem(key);
  }

  clear() {
    return window.localStorage.clear();
  }
}

export default new LocalStorage()
