<?php

require 'database.php';
session_start();

$info = json_decode(file_get_contents('php://input'), true);
$email = $info["email"];
$date = $info["date"];
$db = new MySQLDatabase();
$db->connect();

// get userid
$query = "SELECT userid FROM Users WHERE email = '$email'";
$result = $db->query($query);
$userid = mysqli_fetch_array($result)['userid'];

// fetch all recorded date according to userid
$query = "SELECT * FROM History h, Users u 
WHERE h.sensorid = u.sensorid AND date(`timestamp`) = '$date' AND email = '$email'"; 
$result = $db->query($query);
$arr = array();
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
        $arr[$row["timestamp"]] = $row["uvindex"];
    }
}
$db->disconnect();
echo(json_encode($arr));
