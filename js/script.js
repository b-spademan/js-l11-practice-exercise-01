const randomFolks = document.querySelector(".random-peeps");

// API set up
const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    // console.log(data);
    const userResults = data.results; // grabs only the array of results from data
    // console.log(dataResults);
    displayUsers(userResults);
};
getData(); 

// function to display results array
const displayUsers = function(userResults) {
    randomFolks.innerHTML = "";
    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User Avatar" />
        `;
        randomFolks.append(userDiv);
    }
};
