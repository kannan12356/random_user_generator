const name = document.getElementById("user_name")
const email = document.getElementById("user_email")
const img = document.getElementById("user_img")

// Gets user data from the api
const fetchUser = ()=>{
    fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .then(data=>{
        const user = data.results[0];
        email.textContent = user.email;
        name.textContent = `${user.name.title}. ${user.name.first} ${user.name.last}`;
        img.src = user.picture.large
    }).catch(error=>{console.error(error)})
}