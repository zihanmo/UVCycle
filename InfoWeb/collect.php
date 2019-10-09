<?php
error_reporting(-1);
ini_set('display_errors', 'On');
require 'connectDB.php';
$db = new MySQLDatabase();
$db->connect();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Saira' rel='stylesheet'>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/angular/angular.min.js"></script>
    <title>Collect Information</title>
</head>

<body>
    <div class="logo">
        <img src="img/TeamWyzards.png" id="img">
    </div>

    <header class="welcome">
        <h1>Welcome to the UV Cycle</h1>
    </header>

    <form ng-app class="link" action="insert.php" method="POST" name="collect">
        <div id="info">
            <input class="user-info" id="username" name="username" type="text" placeholder="Username..." ng-model="user.username" ng-required="true" required>
            <p class="form-error" ng-show="collect.username.$invalid && collect.username.$touched">Please enter your
                username</p>

            <input class="user-info" id="email" name="email" type="email" placeholder="Email..." ng-model="user.email" ng-required="true" required>
            <p class="form-error" ng-show="collect.email.$invalid && collect.email.$touched">Please enter valid email</p>

            <input class="user-info" id="phone" name="phone" type="number" placeholder="Phone number..." ng-model="user.phone" ng-required="true" ng-minlength="10" required>
            <p class="form-error" ng-show="collect.phone.$invalid && collect.phone.$touched">
                    Please enter the 10-digit phone number</p>
        </div>
        <div id="confirm">
            <input id="but" type="submit" value="Confirm">
        </div>
    </form>

    <footer class="foot">
        <p> By Team Wyzards With Andrew Demack @ <a href="https://bq.org.au/">Bicycle Queensland</a></p>
    </footer>

</body>