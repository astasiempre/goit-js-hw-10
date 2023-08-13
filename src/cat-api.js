import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_I8eF3DXMlCDC2JNskh1kCmqnO7HT3eRkMJnSE1JIOM4N8JUJx5mz0oilnRyP06mx";

const base_url = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
   return axios.get(base_url)
     .then(response => response.data)
     
}

export  function fetchCatByBreed(breedId) {
      return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        // .then(response => console.log(response);
        .then(response => response.data);  
}