const btn = document.querySelector('.joke-btn');
const jokeSection = document.querySelector('.joke-section'); 

// fetch the request from https://hindi-jokes-api.onrender.com/
async function fetchRequest() {
    // https://hindi-jokes-api.onrender.com/

    const get = await fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=def3509e088f94330e14a6fde70a");
    const joke = await get.json();
    return joke;
}

btn.addEventListener('click', async () => {
    const jokeData = await fetchRequest();
    console.log(jokeData);

    jokeSection.innerText = jokeData.jokeContent;
});

btn.click();
