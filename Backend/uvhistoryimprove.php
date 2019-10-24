<?php
require 'database.php';
session_start();

$userEmail = json_decode(file_get_contents('php://input'), true);
$email = $userEmail["email"];
$db = new MySQLDatabase();
$db->connect();

// fetch all recorded date according to userid
$query = "SELECT DISTINCT date(`timestamp`) AS `date` FROM History h, Users u WHERE h.sensorid = u.sensorid AND u.email = '$email'";
$result = $db->query($query);
$arr = array();
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
        array_push($arr, $row['date']);
    }
}
$db->disconnect();
echo(json_encode($arr));
?>