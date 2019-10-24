<?php
require 'database.php';

// Check in DB
$db = new MySQLDatabase();
$db->connect();
$email = $_REQUEST["email"];
$password = $_REQUEST["password"];
$query = "SELECT * FROM Users WHERE email = '$email'";
$result = $db->query($query);

if ($row = mysqli_fetch_array($result)) { // If credential matched, respond success
    $hash = $row["password"];
    if (password_verify($password, $hash)) {
        header("Location:web.php");
    } else {
        echo "wrong";
    }
} else { // user not exist
    $fail = "Invalid credential!";
    $failJson = json_encode($fail);
    echo ($failJson);
}
$db->disconnect();
?> 