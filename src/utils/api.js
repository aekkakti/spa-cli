const API = process.env.VUE_APP_API;

export const loginRequest = (user) => {
  return new Promise((resolve, reject) => {
    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .then((result) => resolve(result.data.user_token))
        .catch((error) => {
          reject(error);
        });
  });
};

export const registerRequest = (user) => {
  return new Promise((resolve, reject) => {
    fetch(`${API}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .then((result) => resolve(result.data.user_token))
        .catch((error) => {
          reject(error);
        });
  });
};

export const logoutRequest = (user) => {
  return new Promise((reject) => {
    fetch(`${API}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
        .then((response) => response.json())
        .catch((error) => {
          reject(error);
        });
  });
};