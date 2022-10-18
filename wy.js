function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password"
    }
}

function validate(){
    var password = document.getElementById("pass");
    var uname = document.getElementById("uname");
    var length = document. getElementById("length");
    //alert(password.value.toString());
    //alert(uname.value.toString());
    if((uname.value.toString() == "+min") && (password.value.toString() == "zszszs")){
        alert("login succesfull");
        window.location.replace("blah....html")
        return false;
    }
    else{
        alert("login fail");
    }

}