<?php
require 'database.php';

$user = json_decode(file_get_contents('php://input'), true);

// Check in DB
$db = new MySQLDatabase();
$db->connect();
$email = $user["email"];
$password = $user["password"];
$query = "SELECT * FROM Users WHERE email = '$email'";
$result = $db->query($query);

if ($row = mysqli_fetch_array($result)) { // If credential matched, respond success
    $hash = $row["password"];
    if (password_verify($password, $hash)) {
        $success = "Credential matched!";
        $successJson = json_encode($success);
        echo ($successJson);
    } else {
        $fail = "Invalid password!";
        $failJson = json_encode($fail);
        echo ($failJson);
    }
} else { // user not exist
    $fail = "Invalid credential!";
    $failJson = json_encode($fail);
    echo ($failJson);
}
$db->disconnect();
?> 