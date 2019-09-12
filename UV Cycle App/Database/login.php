<?php
require 'database.php';

session_start();

$user = json_decode(file_get_contents('php://input'), true);


// if (isset($_POST["remember"])) {
//     setcookie("email", $_POST["email"], time() + 60 * 60 * 24, "/");
//     $_COOKIE["email"] = $_POST["email"];
// } else {
//     setcookie("email", null, -1, "/");
// }

// Check in DB
$db = new MySQLDatabase();
$db->connect();
$email = $user["email"];
$password = $user["password"];
$query = "SELECT * FROM Users WHERE email = '$email'";
$result = $db->query($query);

if ($row = mysqli_fetch_array($result)) {
    if ($password === $row['password']) {
        $_SESSION["email"] = $email;
        $success = "Credential matched!";
        $successJson = json_encode($success);
        echo ($successJson);
    } else {
        $fail = "Invalid password!";
        $failJson = json_encode($fail);
        echo ($failJson);
    }
} else {
    $fail = "Invalid credential!";
    $failJson = json_encode($fail);
    echo ($failJson);
}
$db->disconnect();

if (isset($_GET["signout"])) {
    session_destroy();
    // header("Location: index.php");
}
?> 