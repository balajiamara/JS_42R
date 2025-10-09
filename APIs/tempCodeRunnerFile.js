let container=document.getElementById('apidata')
fetch("https://gorest.co.in/public/v2/users ")
.then(function(response){
    return response.json()
})
  .then(function(data) {
    console.log(data);        // Handle the JSON data
    for(let i=0; i<data.length-1; i++){
        let card=document.createElement('div')
        card.classList='card'
        card.innerHTML=`
            <p>${data[i].id}</p>
            <p>${data[i].name}</p>
            <p>${data[i].email}</p>
            <p>${data[i].gender}</p>
            <p>${data[i].status}</p>
        `
        container.appendChild(card)
    }
})