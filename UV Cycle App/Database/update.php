<?php
require 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

// Check in DB
$db = new MySQLDatabase();
$db->connect();
$email = $data["email"];
$skintype = $data["skintype"];
$query = "UPDATE Users SET skintype = $skintype WHERE email = '$email'";
$result = $db->query($query);

$checkQuery = "SELECT skintype FROM Users WHERE email = '$email'";
$checkResult = $db->query($checkQuery);

$db->disconnect();
?>