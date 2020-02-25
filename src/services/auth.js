const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const signUp = (username, password) => {
  request('/auth/signup', 'POST', { username, password });
};

export const login = (username, password) => {
  request('/auth/login', 'POST', { username, password });
};

export const verify = () => {
  request('/auth/verify', 'GET');
};