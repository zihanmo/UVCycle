<?php
require 'database.php';

session_start();

$userEmail = json_decode(file_get_contents('php://input'), true);

// Check in DB
$db = new MySQLDatabase();
$db->connect();
$email = $userEmail["email"];
$query = "SELECT * FROM Users WHERE email = '$email'";
$result = $db->query($query);

$row = mysqli_fetch_array($result);
echo json_encode($row);


$db->disconnect();
?>