// HOW TO GET DATA FROM API
let container = document.getElementById('apidata');
let updateForm = document.getElementById('updateForm');
let postForm = document.getElementById('postForm');
let updateMode = "PUT"; // default

const TOKEN = "Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535";

function openPostForm() {
  postForm.style.display = "flex"; // show modal in center
}


// ✅ Get all users
function getAllUsers() {
  fetch("https://gorest.co.in/public/v2/users", {
    method: 'GET',
    headers: { Authorization: TOKEN }
  })
  .then(response => response.json())
  .then(function(data) {
    container.innerHTML = '';
    data.forEach(user => {
      let card = document.createElement('div');
      card.classList = 'card';

      card.innerHTML = `
        <p><b>ID:</b> ${user.id}</p>
        <p><b>Name:</b> ${user.name}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Gender:</b> ${user.gender}</p>
        <p><b>Status:</b> ${user.status}</p>
        <button onclick="delUser(${user.id})">Delete</button>
        <button onclick="openForm(${user.id}, '${user.name}', '${user.email}', '${user.gender}', '${user.status}', 'PUT')">PUT</button>
        <button onclick="openForm(${user.id}, '${user.name}', '${user.email}', '${user.gender}', '${user.status}', 'PATCH')">PATCH</button>
      `;
      container.appendChild(card);
    });
  });
}
getAllUsers();

// ✅ Delete user
function delUser(id) {
  fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: 'DELETE',
    headers: { Authorization: TOKEN }
  }).then(res => {
    if (res.status == 204) {
      getAllUsers();
    }
  });
}

// ✅ Open form for PUT/PATCH
function openForm(id, name, email, gender, status, mode) {
  updateMode = mode;
  updateForm.style.display = "flex";
  document.getElementById('formTitle').innerText = mode === "PUT" ? "Update User (PUT)" : "Update User (PATCH)";
  document.getElementById('updateId').value = id;
  document.getElementById('updateName').value = name;
  document.getElementById('updateEmail').value = email;
  document.getElementById('updateGender').value = gender;
  document.getElementById('updateStatus').value = status;
}

// ✅ Close update form
function closeForm() {
  updateForm.style.display = "none"; // hide modal
  document.getElementById('updateError').innerText = "";
}

// ✅ Close Post Form
function closePostForm() {
  postForm.style.display = "none"; // hide modal
  document.getElementById('postError').innerText = "";
}

// ✅ Submit Update (PUT/PATCH)
function submitUpdate() {
  let id = document.getElementById('updateId').value;
  let name = document.getElementById('updateName').value;
  let email = document.getElementById('updateEmail').value;
  let gender = document.getElementById('updateGender').value;
  let status = document.getElementById('updateStatus').value;

  fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: updateMode,
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN
    },
    body: JSON.stringify({ name, email, gender, status })
  })
  .then(res => res.json())
  .then(data => {
    if (data.message || data[0]?.message) {
      document.getElementById('updateError').innerText = data.message || data[0].field + ": " + data[0].message;
    } else {
      closeForm();   // ✅ CLOSE AFTER SUCCESS
      getAllUsers();
    }
  })
  .catch(err => console.error("Error:", err));
}

// ✅ Submit Post
function submitPost() {
  let name = document.getElementById('postName').value;
  let email = document.getElementById('postEmail').value;
  let gender = document.getElementById('postGender').value;
  let status = document.getElementById('postStatus').value;

  fetch("https://gorest.co.in/public/v2/users", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN
    },
    body: JSON.stringify({ name, email, gender, status })
  })
  .then(res => res.json())
  .then(data => {
    if (data.message || data[0]?.message) {
      document.getElementById('postError').innerText = data.message || data[0].field + ": " + data[0].message;
    } else {
      closePostForm();   // ✅ CLOSE AFTER SUCCESS
      getAllUsers();
    }
  })
  .catch(err => console.error("Error:", err));
}





// HOW TO POST DATA TO API 

// let newUser_1={
//   name:'Devil',
//   email:'Devil@gmail.com',
//   gender:'female',
//   status:'active'
// }

// fetch('https://gorest.co.in/public/v2/users ',{
//   method:'POST',
//   body:JSON.stringify(newUser_1),
//   headers:{
//     'Content-type':'application/json',
//     Accept:'application/json',
//     Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(response){
//   return response.json()
// })
// .then(function(jsondata){
//   console.log(jsondata)

// let card = document.createElement('div');
//       card.classList = 'card';
//       card.innerHTML = `
//           <p>ID: ${jsondata.id}</p>
//           <p>Name: ${jsondata.name}</p>
//           <p>Email: ${jsondata.email}</p>
//           <p>Gender: ${jsondata.gender}</p>
//           <p>Status: ${jsondata.status}</p>
//       `;
//       container.appendChild(card);
//     });


//how to update an API

// let user5={
//   name:'kohli',
// }

// fetch('https://gorest.co.in/public/v2/users/8103034',{
//   method:'PUT',       //it is used to update one field
//   body:JSON.stringify(user5),
//   headers:{
//     'Content-Type':'application/json',
//     Accept:'application/json',
//     Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(res){
//   return res.json()
// }).then(function(updated_data){
//   console.log(updated_data)
// })



// HOW TO PATCH(CHANGE MULTIPLE DATA ONCE) DATA IN API

// let user_6={
//   name:'Hardik Pandya',
//   email:`hardikk33${Date.now()}@gmail.com`,
//   gender:'male',
//   status:'active',
// }
// fetch('https://gorest.co.in/public/v2/users/8103026',{
//   method:'PATCH',     // IT IS USED TO UPDATE MULTIPLE FIELD
//   body:JSON.stringify(user_6),
//   headers:{
//     'Content-type':'application/json',
//      Accept:'application/json',
//      Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(patch_data){
//   return patch_data.json()
// }).then(function(patchjson_){
//   console.log(patchjson_)
// })



// HOW TO DELETE DATA FROM API
// FOR DELETION NO NEED TO WRITE BODY, CONTENT-TYPE BECAUSE WS DON'T HAVE TO PROVIDE ANY USER DATA

// "fetch('https://gorest.co.in/public/v2/users/8103021',{
//   method:'DELETE',
//   headers:{
//     Accept:'application/json',
//     Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(del){
//   return del.json()
// }).then(function(del_data){
//   console.log(del_data)
// })"

