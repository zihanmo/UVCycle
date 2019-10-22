<?php
require 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

// Check in DB
$db = new MySQLDatabase();
$db->connect();
$uvindex = $data["uvindex"];
$userid = $data["userid"];
$history_id = $data["history_id"];
$query = "REPLACE INTO History (uvindex, userid, history_id) VALUES ('$uvindex', '$userid', '$history_id')"; 
$result = $db->query($query);

$db->disconnect();
?>