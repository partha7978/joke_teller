const btn = document.querySelector('.joke-btn');
const jokeSection = document.querySelector('.joke-section'); 

// fetch the request from https://icanhazdadjoke.com/api
async function fetchRequest() {
    const get =  await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    });
    const joke = await get.json();
   return joke;
}

btn.addEventListener('click', async () => {
    const jokeData = await fetchRequest();
    console.log(jokeData);

    jokeSection.innerText = jokeData.joke;
});

