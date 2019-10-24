<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
require 'database.php';

$db = new MySQLDatabase();
$db->connect();

$email = $_REQUEST["email"];
$password = $_REQUEST["password"];
$password1 = $_REQUEST["password1"];
$password2 = password_hash($password, PASSWORD_DEFAULT);

$query = "SELECT * FROM Users WHERE email = '$email'";
$result = $db->query($query);
$check = mysqli_fetch_array($result);

if (!isset($check)) {
    echo ("You are not a memeber currentlly, please download our app and resiter as a new member.");
} else {
    if ($password == $password1) {
        $query = "UPDATE Users SET `password` = '$password2' WHERE email = '$email'";
        $db->query($query);
        header("Location:index.php");
    } else {
        echo ("Two passwords do not match!");
    }
}
$db->disconnect();
?>