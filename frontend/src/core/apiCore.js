import { API } from '../config';

export const getProducts = async () => {
  try {
    const response = await fetch(
      `${API}/product/products`,
      {
        method: 'GET'
      }
    );
    console.log(response);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}



export const getUser = async () =>{
  try {
    const response = await fetch(
      `${API}/auth/list`,
      {
        method: 'GET'
      }
    );
    const datos = response;
    console.log(datos);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}


export const read = (videogameId) => {
  return fetch(`${API}/product/${videogameId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
    .catch(err => console.log(err))
}

export const signin = async user => {
  try {
    const response = await fetch('http://localhost:8000/service/auth/signin', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) // user: 
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const signup = async user => {
  try {
    const response = await fetch('http://localhost:8000/service/auth/signup', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const authenticate = (data, next) => {
  if(typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return fetch(`${API}/auth/signout`, {
      method: 'GET',
    })
      .then(response => {
          console.log('signout',response);
      })
      .catch( err => console.log(err));
  }
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    
    return JSON.parse(localStorage.getItem('jwt'));
    // return localStorage.getItem('jwt')
  }
    return false;
}
//  add this to route later
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCategories = () => {
  return fetch(`${API}/category/categories`, {
    method: 'GET'
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}
// ${userId}
export const createVideogame = (userId, token, videogame) => {
  return fetch(`${API}/product/create/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: videogame
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}