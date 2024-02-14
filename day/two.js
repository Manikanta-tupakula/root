function validateForm(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(name == "" && pass.length<8){
    window.location.href("two.html");
    }else{
    document.getElementById("error").innerText="error";
    }
    }
    