var username = "your_username";
var password = "password";
var body = document.body;
var textContent = body.textContent;
setTimeout(function () {
    // document.getElementById("valuepkg3").value = nameValue;
    document.getElementsByName("username")[0].value = username;
    document.getElementsByName("password")[0].value = password;
}, 500);