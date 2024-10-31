const btnTrue = document.querySelector('#btn-true');
const btnFalse = document.querySelector('#btn-false');
let ansdiv = document.getElementById('ansdiv');
function makePromise(val){
    let pinkyPromise = new Promise((res, err)=>{
        if(val){
            res("Promise is resolved");
            //take a look at what happens when the fctns are resolved
        }
        else{
            err("Promise unfulfilled like all your hopes and dreams");
        }
    }
    )
    pinkyPromise.then((text) => {
        ansdiv.innerHTML = `<h6> ${text} </h6>`;
    }).catch((text)=>{
        ansdiv.innerHTML =  `<h6> ${text} </h6>`;
    }).finally(() =>{
        ansdiv.innerHTML += '<h6>Regardless of the outcome this line is inevitable just like all your bills, taxes, and Thanos; You cannot run away from your responsibilities</h6>'; }
    );
}
    //Verify what is the central error here
    /*promise.then(
        successMessage => ansdiv.innerHTML = `<h6> ${successMessage} </h6>`,
        errorMessage => ansdiv.innerHTML = `<h6> ${errorMessage} </h6>`
    ).finally(() =>{
        ansdiv.innerHTML += '<h6>Regardless of the outcome this line is inevitable just like all your bills, taxes, and Thanos; You cannot run away from your responsibilities</h6>'; }
    );*/


btnTrue.addEventListener('click', () => makePromise(true));
btnFalse.addEventListener('click', () => makePromise(false));


/*
const btnTrue = document.querySelector('#btn-true');
const btnFalse = document.querySelector('#btn-false');

function makePromise(val){
    let ansdiv = document.getElementById('ansdiv');
    let promise = new Promise((res, err)=>{
        if(val){
            resolve("Promise is resolved").then((text) => {
                ansdiv.innerHTML = '<h6>' + text + '</h6>';
            });
            //take a look at what happens when the fctns are resolved
        }
        else{
            reject("Promise unfulflled like all your hopes and dreams").then((text)=>{
                ansdiv.innerHTML = '<h6>' + text + '</h6>'; 
            });
        }
    }
    )
    promise.finally(
        ansdiv.innerHTML += '<h6>Regardless of the outcome this line will run just like all your bills and taxes; You cannot run away from your responsibilities</h6>'; 
    )
}

btnTrue.addEventListner('click', makePromise(true));
btnFalse.addEventListner('click', makePromise(false));
*/

/*Random Promise Addition */

/*
*function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Mail has arrived');
    } else {
      reject(new Error('Failed to arrive'));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });

*/