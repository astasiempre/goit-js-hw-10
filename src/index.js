import axios from "axios";

const base_url = 'https://api.thecatapi.com/v1/breeds';

const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
axios.defaults.headers.common["x-api-key"] = "live_I8eF3DXMlCDC2JNskh1kCmqnO7HT3eRkMJnSE1JIOM4N8JUJx5mz0oilnRyP06mx";
// function fetchBreeds() {
// //     return fetch(base_url, {headers: {
// //       'x-api-key': api_key
// //     }}).then((response) => {
// //    console.log(response);
// //         if (!response.ok) {
// //             throw new Error();
// //         }
// //         return response.json();
        
// //  })
//   return axios.get(base_url)
  
// }

 function fetchBreeds() {
   return axios.get(base_url)
     .then(response => response.data)
     
    // .catch(error => {
    //   throw new Error(error); // Прокидуємо помилку далі для обробки у виклику.
    // });
}


fetchBreeds()
  .then(breeds => {
   
    breeds.map(({ id, name }) => {
      const option = document.createElement("option");
      option.value = id;
      option.text = name;
      breedSelect.appendChild(option);
    });
        
    loader.hidden = true;
    error.hidden = true;
    
  })
  .catch(() =>
    loader.hidden = true,
    error.hidden = false) 
    

    function fetchCatByBreed(breedId) {
      return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        // .then(response => console.log(response);
        .then(response => response.data[0]);  
}

 


breedSelect.addEventListener("change", () => {
  const selectedBreedId = breedSelect.value;
  loader.hidden = false;
  // catInfo.innerHTML = "";

  fetchCatByBreed(selectedBreedId)
    .then(cat => {
      catInfo.insertAdjacentHTML("beforeend", createMarkUp(cat));
    })
      
      function createMarkUp(cat) {
        return cat.map((cat) =>
          `<li>
        <img src="${cat.url}" alt="${"Cat Image"}" width="200">
        <h2>${cat.breeds[0].name}</h2>
        <p>${cat.breeds[0].description}</p>
        <p>${cat.breeds[0].temperament}</p>
        </li>`)
          .join("");
      }
  
      console.log(cat)
      console.log(cat.breeds[0].name, cat.breeds[0].description, cat.breeds[0].temperament)
      
      loader.hidden = true;
      
      
      

     

});



// .then(cat => {
//       const catImage = document.createElement("img");
//       catImage.src = cat.url;
//       catImage.alt = "Cat Image";
//       console.log(cat)

//       const breedName = document.createElement("h2");
//       breedName.textContent = cat.breeds[0].name;

//       const breedDescription = document.createElement("p");
//       breedDescription.textContent = cat.breeds[0].description;

//       const breedTemperament = document.createElement("p");
//       breedTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

//       catInfo.appendChild(catImage);
//       catInfo.appendChild(breedName);
//       catInfo.appendChild(breedDescription);
//       catInfo.appendChild(breedTemperament);

//       loader.hidden = true;
//     })

//     .catch(() => {
//       loader.hidden = true;
//       error.hidden = false;
//     });