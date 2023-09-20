/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jonathan Nkansah Koranteng';
let currentYear = '2023'
let profilePicture = "images/mypicture.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of Jonathan Nkansah Koranteng');




/* Step 5 - Array */
let favoritefoods = ['Banku and tilapia', 'fufu with any soup', 
'Jollof rice', 'Rice balls']

let newFooditem = 'waakye';
favoritefoods.push(newFooditem); /*add waakye to favoritefoods*/

foodElement.innerHTML += `<br>${favoritefoods}`

// remove first item from array
favoritefoods.shift();

foodElement.innerHTML += `<br>${favoritefoods}`

// remove last item from array
favoritefoods.pop();

foodElement.innerHTML += `<br>${favoritefoods}`





