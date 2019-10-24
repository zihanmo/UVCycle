<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
require 'database.php';

$db = new MySQLDatabase();
$db->connect();

$user = json_decode(file_get_contents('php://input'), true);
$firstname = $user["firstName"];
$lastname = $user["lastName"];
$password = $user["password"];
$password = password_hash($password, PASSWORD_DEFAULT);
$email = $user["email"];
$skintype = $user["skinType"];
$sensor = $user["sensorid"];

$query = "SELECT * FROM Users WHERE email = '$email'";
$result = $db->query($query);
$check = mysqli_fetch_array($result);

if (!isset($check)) { // check if the user is existing, otherwise create a new account
    $query = "INSERT INTO Users (`firstname`, `lastname`, `password`, `email`, `skintype`, `sensorid`) 
        VALUES ('$firstname', '$lastname', '$password', '$email', $skintype, $sensor)";
    $db->query($query);
    $response = "Sign Up successfully";
    $responseJson = json_encode($response);
    echo ($responseJson);
} else {
    $response = "Email has already used";
    $responseJson = json_encode($response);
    echo ($responseJson);
}
$db->disconnect();
?>