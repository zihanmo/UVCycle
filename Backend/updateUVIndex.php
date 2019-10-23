<?php
require 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

// Check in DB
$db = new MySQLDatabase();
$db->connect();
$uvindex = $data["uvindex"];
$sensorid = $data["sensorid"];
$history_id = $data["history_id"];
$query = "REPLACE INTO History (uvindex, sensorid, history_id) VALUES ('$uvindex', '$sensorid', '$history_id')"; 
$result = $db->query($query);

$db->disconnect();
?>