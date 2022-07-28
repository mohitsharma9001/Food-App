document.querySelector('#form').addEventListener('submit', singUpFn);

var usersData;
if(localStorage.getItem('UserData')=== null){
    usersData = []
}else{
usersData=  JSON.parse(localStorage.getItem('UserData'))
}

document.querySelector('#form').value = "";
function singUpFn(){
    event.preventDefault();
var usersObj = {
    userName : document.querySelector('#userName').value,
   userEmail : document.querySelector('#userEmail').value,
   userPassword : document.querySelector('#userPassword').value
}
if(usersObj.userName == '' || usersObj.userEmail=='' || usersObj.userPassword==''){
    alert('!! Please fill required field')
    return
}
usersData.push(usersObj);
localStorage.setItem("UserData",JSON.stringify(usersData));
alert('User registerd')
window.location.href="Login.html"
}