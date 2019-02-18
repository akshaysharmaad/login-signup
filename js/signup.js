function signup(){
    var user = document.getElementById('user').value;
    window.alert(`Congratulations ${user} Sign Up Successful!!`);
    window.location="main-page.html";
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
    window.location = "signup.html";
}


function rlogin() {
    window.location = "index.html";
    
}

function rhome(){
    window.location = "main-page.html";
}

function change(){
    var html = '<i class="fa fa-bookmark"></i>';
    document.getElementById("change").innerHTML=html;
}

function like(){
    var html = '<i class="fa fa-thumbs-up"> Liked</i>';
    document.getElementById("like").innerHTML=html;
}

function dislike() {
    var html = '<i class="fa fa-thumbs-down"> DisLiked</i>';
    document.getElementById("dislike").innerHTML = html;
}

function comment() {
    var html = '<br><textarea style="width:100%;">';
    document.getElementById("comment").innerHTML=html;
    
}
