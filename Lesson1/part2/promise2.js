
/*
Source: MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
*/
const btnPrime = document.querySelector("#btn-prime");
const ansDiv = document.querySelector("#ansdiv");

/*This example will definitely not handle rejections*/
/*Error 1*/
/*
btnPrime.addEventListener("click", ()=>{
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    fetchPromise
    .then((response) => {
        response.json();
        console.log(response);

    })
    .then((data) => {
      ansDiv.innerHTML += `<h6>${data[0].name}</h6>`;
    });
});*/


/*Solution 1*/

btnPrime.addEventListener("click", ()=>{
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
    ansDiv.innerHTML += `<h6>${data[0].name}</h6>`;

  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
    ansDiv.innerHTML += `<h6>Could not get products: ${error}</h6>`;
  });

})

/*Solutions 2*/

/*Todo*/