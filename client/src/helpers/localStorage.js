const TODOS = "todoist:::todos";

/**
 * Gets a list of todos from local storage
 * @returns
 */
export const getTodosFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("todoist:::todos")) || [];

/**
 * Saves a list of todos in local storage
 * @param {Array} todos - a list of todos
 * @returns
 */
export const saveTodosToLocalStorage = (todos = []) =>
  localStorage.setItem("todoist:::todos", JSON.stringify(todos));
