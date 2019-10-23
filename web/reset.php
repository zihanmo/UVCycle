<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "utf-8"/>
    <link rel = "stylesheet" href = "css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Saira' rel = 'stylesheet'>
    <title>DECO3801_PROJECT</title>
</head>

<body>
    <div class = "logo">
        <img src = "images/logo.png" id = "img">
    </div>

    <header class = "welcome">
        <h1>Please fill the forms to create a new password.</h1>
    </header>

    <div class = "link">
        <form id = "login" action = "repass.php">
            <input name = "email" id = "username" type = "email"  placeholder = "Email...">
            <input name = "password" id = "pswd" type = "password" placeholder = "New password...">
            <input name = "password1" id = "pswd" type = "password" placeholder = "Confirm password...">
        </div>
        <div id = "button-div">
            <input id = "but" type = "submit" value = "Reset now">
        </div>
    </div>

    <footer class = "foot">
        <p> By Team Wyzards With Andrew Demack @ <a href = "https://bq.org.au/">Bicycle Queensland</a></p>
    </footer>

</body>