<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
require 'database.php';
session_start();

$db = new MySQLDatabase();
$db->connect();

$user = json_decode(file_get_contents('php://input'), true);
$firstname = $user["firstName"];
$lastname = $user["lastName"];
$password = $user["password"];
$email = $user["email"];
$skintype = $user["skinType"];
$sensor = $user["sensorName"];

$query = "SELECT * FROM Users WHERE email = '$email'";
$result = $db->query($query);
$check = mysqli_fetch_array($result);

if (!isset($check)) {
    $query = "INSERT INTO Users (`firstname`, `lastname`, `password`, `email`, `sensor`, `skintype`) 
        VALUES ('$firstname', '$lastname', '$password', '$email', '$sensor', $skintype)";
    $db->query($query);
    echo "insert user success!";
}
?>