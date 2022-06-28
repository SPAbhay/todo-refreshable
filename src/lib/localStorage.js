export const getLocalStorage = (key = "react-todo-list-todos") => {
  return localStorage.getItem(key);
};

export const setLocalStorage = ({ key = "react-todo-list-todos", value }) => {
  localStorage.setItem(key, JSON.stringify(value));
  return getLocalStorage(key);
};
