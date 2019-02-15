function signup(){
    var user = document.getElementById('user').value;
    window.alert(`Congratulations ${user} Sign Up Successful!!`);

    var password=document.getElementById('password').value;
    var UserArray=new Array;
    UserArray.push(user);
    PasswordArray.push(password);
}

function login() {
    var uname;
    uname = document.getElementById('username').value;
    var password;
    password = document.getElementById('password').value;
    if (uname == 'Brahmastra' && password == 'great') {
        alert("Login Successfully!!");
        window.location = "main-page.html";
    }
    else { alert("Not Authorised By Satya!"); }
}

function redirect() {
    window.location = "../signup.html";
}


