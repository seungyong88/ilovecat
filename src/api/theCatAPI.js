const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async url => {
  try {
    const data = await fetch(url);
    return data.json();
  } catch(e) {
    console.warn(e);
  }
}

const api = {
  fetchCats: async keyword => {
    const breeds = (await request(`${API_ENDPOINT}/breeds/search?q=${keyword}`)).map(breed => breed.id);
    const requests = breeds.map(breed => request(`${API_ENDPOINT}/images/search?limit=50&breed_ids=${breed}`));

    return Promise.all(requests).then(responses => {
      let result = [];
      responses.forEach(response => {
        result = result.concat(response)
      });

      return result;
    })
  },
  randomCats: () => {
    return request(`${API_ENDPOINT}/images/search?limit=50`);
  }
}

export default api;