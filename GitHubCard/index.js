/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
github info! You will need to understand the structure of this 
data in order to use it to build your component function 

Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
follow this link in your browser https://api.github.com/users/<Your github name>/followers 
, manually find some other users' github handles, or use the list found 
at the bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
<img src={image url of user} />
<div class="card-info">
<h3 class="name">{users name}</h3>
<p class="username">{users user name}</p>
<p>Location: {users location}</p>
<p>Profile:  
<a href={address to users github page}>{address to users github page}</a>
</p>
<p>Followers: {users followers count}</p>
<p>Following: {users following count}</p>
<p>Bio: {users bio}</p>
</div>
</div>

*/

// userImage, realName, userName, location, urlAddress, followers, following, userBio

function createCard(data) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const loc = document.createElement("p");
  const profile = document.createElement("p");
  const url = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  info.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  image.setAttribute("src", data.avatar_url);
  name.textContent = data.name;
  username.textContent = data.login;
  loc.textContent = `Location: ${data.location}`;
  profile.textContent = "Profile:";
  url.setAttribute("href", data.html_url);
  url.textContent = `${data.html_url}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  card.append(image);
  card.append(info);
  info.append(name);
  info.append(username);
  info.append(loc);
  info.append(profile);
  profile.append(url);
  info.append(followers);
  info.append(following);
  info.append(bio);

  return card;
}

const cards = document.querySelector(".cards");

let users = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

for (let i = 0; i < users.length; i++) {
  let search = `https://api.github.com/users/`;
  search += users[i];
  axios
    .get(search)
    .then(response => {
      cards.append(createCard(response.data));
    })
    .catch(error => {
      console.log(error);
    });
}

// const followersArray = [];

// axios.get('https://api.github.com/users/tetondan/followers')
//   .then(response =>{
//     for(let i = 0; i < response.data.length; i++){
//       followersArray.push(response.data[i].login)
//     }
//   }).catch(error =>{
//     console.log(error);
//   })

//   for(let i = 0; i < followersArray.length; i++){
//     let search = `https://api.github.com/users/`;
//     search += followersArray[i];
//     axios.get(search)
//       .then(res => {
//         cards.append(createCard(res.data));
//       }).catch(err =>{
//         console.log(err);
//       })
//   }
