const url = 'https://todoapp-d00c4-default-rtdb.firebaseio.com/';

const api = {
  getTodos(id) {
    return fetch(`${url}${id}/todo/.json`)
      .then((data) => data.json());
  },
  updateTodos(id, data) {
    return fetch(`${url}${id}/todo/.json`, { method: 'PUT', body: JSON.stringify(data) })
      .then((response) => response.json());
  },
};

export default api;
