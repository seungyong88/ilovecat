const API_ENDPOINT = 'https://api.thecatapi.com/v1';

//breeds/search?q=${keyword}
// ${API_ENDPOINT}/images/search?limit=50
// ${API_ENDPOINT}/images/search?limit=50&breed_ids=${breed}

const request = async url => {
  try {
    const data = await fetch(url);
    return data.json();
  } catch(e) {
    console.warn(e);
  }
}

const api = {
  fetchCats: keyword => {
    return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
  },
  randomCats: () => {
    return request(`${API_ENDPOINT}/images/search?limit=50`);
  }
}

export default api;