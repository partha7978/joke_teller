const btn = document.querySelector('.joke-btn');
const jokeSection = document.querySelector('.joke-section'); 
const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=def3509e088f94330e14a6fde70a";

// fetch the request from https://hindi-jokes-api.onrender.com/
async function fetchRequest() {
    // https://hindi-jokes-api.onrender.com/
    try {
        jokeSection.classList.remove('error-text');
        loading(true);
        const get = await fetch(url);
        const joke = await get.json();
        loading(false);
        return joke;
    }
    catch (err) {
        jokeSection.classList.add('error-text');
        jokeSection.innerText = err;
        console.log(err);
    }
   
}

btn.addEventListener('click', async () => {
    const jokeData = await fetchRequest();
    // console.log(jokeData);  
    jokeSection.innerText = jokeData.jokeContent;
});

btn.click();

function loading(load) {
    load === true ?
    jokeSection.innerHTML = `<img src='./loading.gif' alt='loading image' />`
    :
    jokeSection.innerHTML = ``;
}