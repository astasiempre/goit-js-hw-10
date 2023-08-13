import {fetchBreeds, fetchCatByBreed} from './cat-api.js'

const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");


fetchBreeds()
  .then(breeds => {
  
    breeds.map(({ id, name }) => {
      const option = document.createElement("option");
      option.value = id;
      option.text = name;
      breedSelect.appendChild(option);
    
    });
   
   loader.hidden = true,
    error.hidden = true
  
  })
  .catch(() =>
    loader.hidden = true,
    error.hidden = false); 
    

breedSelect.addEventListener("change", () => {
  const selectedBreedId = breedSelect.value;
  loader.hidden = false;
  error.hidden = true;
  // catInfo.innerHTML = "";

  fetchCatByBreed(selectedBreedId)
    .then(data => {
      catInfo.innerHTML = createMarkUp(data);
      loader.hidden = true;
    })
  .catch(() => {
      loader.hidden = true;
      error.hidden = false;
    });
  
      
  function createMarkUp(cat) {
        // console.log(cat)
        return cat.map((cat) =>
          `<li class="list">
        <img src="${cat.url}" alt="${"Cat Image"}" width="500">
        <h2>${cat.breeds[0].name}</h2>
        <p>${cat.breeds[0].description}</p>
        <p><b>Temperament:</b>${cat.breeds[0].temperament}</p>
        </li>`)
          .join("");
      }
  
})
  
  
