function login() {
    var uname;
    uname=document.getElementById('username').value;
    var password;
    password=document.getElementById('password').value;
    if(uname=='Brahmastra' && password=='great')
        {   alert("Login Successfully!!"); 
    window.location="main-page.html";  }
    else
        {   alert("Not Authorised By Satya!");  }
}