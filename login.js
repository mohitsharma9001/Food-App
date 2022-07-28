document.querySelector('#form').addEventListener('submit', loginFn);

var registeredUsers = JSON.parse(localStorage.getItem('UserData'));
function loginFn() {
    event.preventDefault();
    var enteredEmail = document.querySelector('#email').value;
    var enteredPassword = document.querySelector('#password').value;
    
    
    var flag=false;
   console.log(registeredUsers)
   
    registeredUsers.forEach(function(usersData)
        {
            // console.log(usersData.email,usersData.password)
            if(usersData.userEmail == enteredEmail && usersData.userPassword == enteredPassword && !flag)
            {
                flag=true;
                alert("Login Successfull")
                window.location.href="index.html";
            }
        })
        if(!flag)
        {
            alert("Invalid Email or Password")
            window.location.reload();
        }
       
  
}