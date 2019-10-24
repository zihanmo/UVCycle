<?php
    session_start();
    if (isset($_SESSION['email']) && isset($_SESSION['password'])) {
        header('Location:web.php');
    }
?>

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
        <h1>Welcome to the UV Cycle</h1>
    </header>

    <div class = "link">
        <form id = "login" method = "POST" action = "login.php">
            <input id = "username" name = "email" type = "text"  placeholder = "Email...">
            <input id = "pswd" name = "password" type = "password" placeholder = "Password...">
        </div>
        <div id = "button-div">
            <input id = "but" type = "submit" value = "Login">
        </div>
        <a href = "reset.php" id = "reg">Forget your password?</a>
    </div>

    <footer class = "foot">
        <p> By Team Wyzards With Andrew Demack @ <a href = "https://bq.org.au/">Bicycle Queensland Inc.</a></p>
    </footer>

</body>