const url = "data.json";
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Code to handle the data goes here
  })
  .catch(error => {
    // Code to handle any errors goes here
  });
  fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      // Code to display the item goes here
    }
  })
  .catch(error => {
    // Code to handle any errors goes here
  });
getMovies(APIURL);


const showMovies = (data) => {
    moiveBox.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            moiveBox.appendChild(box)
        }
    )
}

document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
)