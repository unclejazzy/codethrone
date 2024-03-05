function saveData(){
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  console.log("save")

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);


let new_user = new Array();
user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(new_user.some((v) => {
  return v.email==email
})){
  alert("Duplicate data");
}
else{
  u=new_user.push({
    "name":name,
    "email":email,
    "password": password
  })
  localStorage.setItem("users",JSON.stringify(new_user))
}
}
